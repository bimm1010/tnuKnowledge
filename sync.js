/**
 * Script bóc tách toàn bộ tài liệu & ngân hàng câu hỏi eTNU
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const wstoken = '0dbcb4e17f9b914e0118f6d5ef55ae54';
const userid = '25451';
const baseDir = '/Volumes/MacEX/MacStorageEX/.gemini/antigravity/scratch/etnu-knowledge';

function callMoodle(wsfunction, params = {}) {
  let paramStr = `wstoken=${wstoken}&wsfunction=${wsfunction}&moodlewsrestformat=json`;
  for (const [k, v] of Object.entries(params)) {
    paramStr += `&${k}=${encodeURIComponent(v)}`;
  }
  const cmd = `curl -s -X POST "https://tnu.aum.edu.vn/webservice/rest/server.php" -d "${paramStr}"`;
  const res = execSync(cmd).toString();
  try {
    return JSON.parse(res);
  } catch (e) {
    return null;
  }
}

async function run() {
  console.log('🚀 Bắt đầu quét và xây dựng Knowledge Base eTNU...');
  
  // 1. Lấy danh sách khóa học
  const courses = callMoodle('core_enrol_get_users_courses', { userid });
  if (!courses || !Array.isArray(courses)) {
    console.error('Không thể lấy danh sách khóa học!');
    return;
  }
  
  const fullQADatabase = [];
  const knowledgeSummary = [];
  
  for (const c of courses) {
    const cleanName = c.fullname.replace(/\s*-\s*\d+$/, '').trim();
    const code = c.shortname.split('-')[0].trim();
    const courseDirName = `${code}_${cleanName.replace(/[^a-zA-Z0-9_\p{L}]/gu, '_')}`;
    const coursePath = path.join(baseDir, courseDirName);
    const docsPath = path.join(coursePath, 'tailieu');
    
    fs.mkdirSync(coursePath, { recursive: true });
    fs.mkdirSync(docsPath, { recursive: true });
    
    console.log(`\n📚 Đang xử lý: ${cleanName} [${code}]`);
    
    // 2. Lấy nội dung môn học (sections & modules)
    const sections = callMoodle('core_course_get_contents', { courseid: c.id });
    if (!sections || !Array.isArray(sections)) continue;
    
    let downloadedFilesCount = 0;
    const courseQuizzes = [];
    
    // Quét tài liệu và các bài quiz
    sections.forEach(sec => {
      (sec.modules || []).forEach(m => {
        // Tải tài liệu đính kèm (PDF, Word, Slide...)
        if (m.contents && Array.isArray(m.contents)) {
          m.contents.forEach(file => {
            if (file.type === 'file' && file.fileurl && file.filename) {
              const ext = path.extname(file.filename).toLowerCase();
              if (['.pdf', '.docx', '.doc', '.pptx', '.ppt', '.txt'].includes(ext)) {
                const targetFilePath = path.join(docsPath, file.filename);
                const existsAndValid = fs.existsSync(targetFilePath) && fs.statSync(targetFilePath).size > 1000;
                if (!existsAndValid) {
                  console.log(`   📥 Đang tải tài liệu: ${file.filename}`);
                  try {
                    const separator = file.fileurl.includes('?') ? '&' : '?';
                    const downloadUrl = `${file.fileurl}${separator}token=${wstoken}`;
                    execSync(`curl -s -L "${downloadUrl}" -o "${targetFilePath}"`);
                    downloadedFilesCount++;
                  } catch (err) {
                    console.error(`   ⚠️ Lỗi tải file: ${file.filename}`);
                  }
                } else {
                  downloadedFilesCount++;
                }
              }
            }
          });
        }
        
        // Ghi nhận bài quiz/bài kiểm tra
        if (m.modname === 'quiz' && m.instance) {
          courseQuizzes.push({
            name: m.name,
            cmid: m.id,
            quizid: m.instance
          });
        }
      });
    });
    
    // 3. Bóc tách câu hỏi & đáp án từ tất cả các lần làm bài quiz
    const courseQAList = [];
    console.log(`   📝 Đang quét ngân hàng câu hỏi từ ${courseQuizzes.length} bài quiz/kiểm tra...`);
    
    for (const q of courseQuizzes) {
      const attemptsData = callMoodle('mod_quiz_get_user_attempts', { quizid: q.quizid, userid });
      if (attemptsData && attemptsData.attempts && attemptsData.attempts.length > 0) {
        for (const att of attemptsData.attempts) {
          if (att.state === 'finished') {
            const reviewData = callMoodle('mod_quiz_get_attempt_review', { attemptid: att.id });
            if (reviewData && reviewData.questions) {
              reviewData.questions.forEach((question, qIdx) => {
                const html = question.html || '';
                
                // Trích xuất câu hỏi
                const qtextMatch = html.match(/class="qtext">([\s\S]*?)<\/div>/);
                let qtext = qtextMatch ? qtextMatch[1].replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim() : '';
                
                // Trích xuất các phương án lựa chọn
                const options = [];
                const answerBlockMatch = html.match(/class="answer">([\s\S]*?)<\/div>/);
                if (answerBlockMatch) {
                  const optionRegex = /class="r[01]">[\s\S]*?<label[^>]*>([\s\S]*?)<\/label>/g;
                  let optMatch;
                  while ((optMatch = optionRegex.exec(answerBlockMatch[1])) !== null) {
                    const cleanOpt = optMatch[1].replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
                    if (cleanOpt) options.push(cleanOpt);
                  }
                }
                
                // Trích xuất đáp án đúng chính thức
                const rightMatch = html.match(/class="rightanswer">([\s\S]*?)<\/div>/);
                let rightAnswer = rightMatch ? rightMatch[1].replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim() : '';
                if (rightAnswer.startsWith('Câu trả lời đúng là:')) {
                  rightAnswer = rightAnswer.replace('Câu trả lời đúng là:', '').trim();
                }
                
                // Trạng thái (Đúng / Sai)
                const stateMatch = html.match(/class="state">([^<]+)<\/div>/);
                const state = stateMatch ? stateMatch[1].trim() : '';
                
                if (qtext && rightAnswer) {
                  // Kiểm tra trùng lặp câu hỏi
                  const isExisted = courseQAList.some(item => item.question === qtext);
                  if (!isExisted) {
                    const qaItem = {
                      courseCode: code,
                      courseName: cleanName,
                      quizName: q.name,
                      question: qtext,
                      options: options,
                      correctAnswer: rightAnswer,
                      userAnswerState: state
                    };
                    courseQAList.push(qaItem);
                    fullQADatabase.push(qaItem);
                  }
                }
              });
            }
          }
        }
      }
    }
    
    // Lưu file JSON và Markdown cho từng môn
    fs.writeFileSync(path.join(coursePath, 'ngan_hang_cau_hoi.json'), JSON.stringify(courseQAList, null, 2));
    
    let courseMd = `# Ngân hàng Câu hỏi & Đáp án eTNU: ${cleanName} [${code}]\n\n`;
    courseMd += `> Tổng số câu hỏi đã bóc tách chính thức: **${courseQAList.length} câu**\n\n`;
    courseQAList.forEach((item, i) => {
      courseMd += `### Câu ${i + 1} (${item.quizName})\n`;
      courseMd += `**Hỏi:** ${item.question}\n\n`;
      if (item.options && item.options.length) {
        courseMd += `**Các lựa chọn:**\n`;
        item.options.forEach(opt => {
          courseMd += `- ${opt}\n`;
        });
        courseMd += `\n`;
      }
      courseMd += `🎯 **ĐÁP ÁN ĐÚNG CỦA TRƯỜNG:** \`${item.correctAnswer}\`\n\n`;
      courseMd += `---\n\n`;
    });
    fs.writeFileSync(path.join(coursePath, 'ngan_hang_cau_hoi.md'), courseMd);
    
    knowledgeSummary.push({
      course: cleanName,
      code: code,
      filesDownloaded: downloadedFilesCount,
      questionsExtracted: courseQAList.length
    });
  }
  
  // Tự động trích xuất text cho toàn bộ tài liệu mới tải
  try {
    const { PDFParse } = require('pdf-parse');
    for (const c of courses) {
      const cleanName = c.fullname.replace(/\s*-\s*\d+$/, '').trim();
      const code = c.shortname.split('-')[0].trim();
      const courseDirName = `${code}_${cleanName.replace(/[^a-zA-Z0-9_\p{L}]/gu, '_')}`;
      const coursePath = path.join(baseDir, courseDirName);
      const docsPath = path.join(coursePath, 'tailieu');
      const textDir = path.join(coursePath, 'giao_trinh_text');
      fs.mkdirSync(textDir, { recursive: true });

      if (fs.existsSync(docsPath)) {
        const pdfs = fs.readdirSync(docsPath).filter(f => f.endsWith('.pdf'));
        for (const f of pdfs) {
          const txtFile = path.join(textDir, f.replace('.pdf', '.txt'));
          if (!fs.existsSync(txtFile) || fs.statSync(txtFile).size < 100) {
            try {
              const buf = fs.readFileSync(path.join(docsPath, f));
              const parser = new PDFParse({ data: buf });
              await parser.load();
              const res = await parser.getText();
              const content = typeof res === 'string' ? res : (res.text || JSON.stringify(res));
              fs.writeFileSync(txtFile, content, 'utf8');
            } catch(e) {}
          }
        }
      }
    }
  } catch(e) {
    console.error('Lỗi trích xuất text:', e.message);
  }

  // Merge với database hiện tại để không làm mất các câu hỏi đã học từ người dùng
  const dbFile = path.join(baseDir, 'etnu_full_qa_database.json');
  let currentDb = [];
  if (fs.existsSync(dbFile)) {
    try { currentDb = JSON.parse(fs.readFileSync(dbFile, 'utf8')); } catch(e) {}
  }
  for (const item of fullQADatabase) {
    if (!currentDb.some(x => x.question === item.question)) {
      currentDb.push(item);
    }
  }
  fs.writeFileSync(dbFile, JSON.stringify(currentDb, null, 2));
  
  console.log('\n================ TỔNG KẾT KHO KNOWLEDGE BASE ================');
  knowledgeSummary.forEach(s => {
    console.log(`• ${s.course} [${s.code}]:`);
    console.log(`  - Tài liệu đã tải: ${s.filesDownloaded} file`);
    console.log(`  - Ngân hàng câu hỏi & đáp án chuẩn: ${s.questionsExtracted} câu`);
  });
  console.log(`\n🎉 Tổng số câu hỏi trắc nghiệm chuẩn trong kho: ${currentDb.length} câu!`);

  console.log('\n⚡ Đang tự động cập nhật Smart Inverted Index & Chunks...');
  try {
    const { execSync } = require('child_process');
    execSync(`node "${path.join(baseDir, 'build_smart_index.js')}"`, { stdio: 'inherit' });
    console.log('✅ Đã cập nhật xong Smart Index cho toàn bộ tài liệu mới!');
  } catch(err) {
    console.error('Lỗi build smart index:', err.message);
  }
}

run();

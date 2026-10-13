/**
 * Script bóc tách giáo trình và đề thi eTNU thành Inverted Index & Chunks
 * Phục vụ tra cứu siêu tốc dưới 50ms cho câu hỏi dạng ảnh / văn bản
 */
const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

// Danh sách từ dừng (Stop words) tiếng Việt
const STOP_WORDS = new Set([
  'là', 'của', 'và', 'các', 'những', 'nào', 'sau', 'đây', 'khi', 'về', 'hỏi', 'hãy', 'chọn',
  'được', 'có', 'trong', 'cho', 'với', 'ở', 'đến', 'theo', 'như', 'đã', 'sẽ', 'một', 'để',
  'tại', 'bởi', 'do', 'này', 'đó', 'thì', 'mà', 'ra', 'lại', 'qua', 'bằng', 'trên', 'dưới'
]);

// Hàm chuẩn hóa chuỗi và tách từ khóa
function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

console.log('⚡ Bắt đầu bóc tách & đánh chỉ mục toàn bộ Kho Tri Thức eTNU...');

// 1. Chỉ mục Ngân hàng Đề thi (QA Database)
const qaFile = path.join(baseDir, 'etnu_full_qa_database.json');
let qaList = [];
if (fs.existsSync(qaFile)) {
  qaList = JSON.parse(fs.readFileSync(qaFile, 'utf8'));
}

const indexedQA = qaList.map((item, id) => {
  const qTokens = tokenize(item.question);
  const optTokens = tokenize((item.options || []).join(' '));
  const ansTokens = tokenize(item.correctAnswer);
  const allTokens = Array.from(new Set([...qTokens, ...optTokens, ...ansTokens]));

  return {
    id,
    courseCode: item.courseCode,
    courseName: item.courseName,
    quizName: item.quizName,
    question: item.question,
    options: item.options || [],
    correctAnswer: item.correctAnswer,
    tokens: allTokens,
    rawText: `${item.question} ${(item.options || []).join(' ')} ${item.correctAnswer}`.toLowerCase()
  };
});

console.log(`✅ Đã lập chỉ mục ${indexedQA.length} câu hỏi trắc nghiệm chính thức.`);

// 2. Bóc tách & Chunking toàn bộ Giáo trình / Slide
const courses = fs.readdirSync(baseDir).filter(f => f.startsWith('A0') && fs.statSync(path.join(baseDir, f)).isDirectory());
const chunks = [];

for (const c of courses) {
  const courseCode = c.split('_')[0];
  const courseName = c.substring(c.indexOf('_') + 1).replace(/_/g, ' ');
  const textDir = path.join(baseDir, c, 'giao_trinh_text');
  if (!fs.existsSync(textDir)) continue;

  const files = fs.readdirSync(textDir).filter(f => f.endsWith('.txt'));
  for (const f of files) {
    const rawContent = fs.readFileSync(path.join(textDir, f), 'utf8');
    const docName = f.replace('.txt', '');

    // Cắt theo slide marker (-- \d+ of \d+ --) hoặc đoạn trống
    let rawBlocks = rawContent.split(/--\s*\d+\s*of\s*\d+\s*--/g);
    if (rawBlocks.length <= 1) {
      rawBlocks = rawContent.split(/\n\s*\n/g);
    }

    rawBlocks.forEach((block, idx) => {
      const cleanBlock = block.replace(/\s+/g, ' ').trim();
      if (cleanBlock.length >= 40) {
        const tokens = tokenize(cleanBlock);
        chunks.push({
          id: chunks.length,
          courseCode,
          courseName,
          docName,
          slideIndex: idx + 1,
          content: cleanBlock,
          tokens: Array.from(new Set(tokens))
        });
      }
    });
  }
}

console.log(`✅ Đã bóc tách thành ${chunks.length} khối tri thức (Chunks) giáo trình.`);

// 3. Lưu toàn bộ chỉ mục vào file JSON nén tối ưu
const indexData = {
  createdAt: new Date().toISOString(),
  qa: indexedQA,
  chunks: chunks
};

fs.writeFileSync(path.join(baseDir, 'etnu_knowledge_index.json'), JSON.stringify(indexData));
console.log(`🎉 HOÀN TẤT LẬP CHỈ MỤC SIÊU TỐC! File đã lưu: etnu_knowledge_index.json (${Math.round(fs.statSync(path.join(baseDir, 'etnu_knowledge_index.json')).size / 1024)} KB)`);

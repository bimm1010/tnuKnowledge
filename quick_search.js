/**
 * Công cụ Tra Cứu Siêu Tốc eTNU Thông Minh (Sub-50ms)
 * Hỗ trợ tìm kiếm mờ, so khớp câu hỏi & phương án chụp từ ảnh
 * Cách dùng: node quick_search.js "<câu hỏi hoặc từ khóa>" [mã môn hoặc phương án]
 */
const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const query = process.argv[2] ? process.argv[2].trim() : '';
const extraQuery = process.argv[3] ? process.argv[3].trim() : '';

if (!query) {
  console.log('Cách dùng: node quick_search.js "<câu hỏi / từ khóa>" [mã môn / phương án]');
  process.exit(0);
}

// Từ dừng tiếng Việt
const STOP_WORDS = new Set([
  'là', 'của', 'và', 'các', 'những', 'nào', 'sau', 'đây', 'khi', 'về', 'hỏi', 'hãy', 'chọn',
  'được', 'có', 'trong', 'cho', 'với', 'ở', 'đến', 'theo', 'như', 'đã', 'sẽ', 'một', 'để',
  'tại', 'bởi', 'do', 'này', 'đó', 'thì', 'mà', 'ra', 'lại', 'qua', 'bằng', 'trên', 'dưới'
]);

function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

const fullQuery = `${query} ${extraQuery}`.trim();
const queryTokens = Array.from(new Set(tokenize(fullQuery)));
const queryLower = fullQuery.toLowerCase();

// Tải bộ chỉ mục đã bóc tách sẵn
const indexFile = path.join(baseDir, 'etnu_knowledge_index.json');
let indexData = null;

if (fs.existsSync(indexFile)) {
  try {
    indexData = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
  } catch(e) {}
}

console.log(`\n🔍 TÌM KIẾM SIÊU TỐC eTNU: "${query}"\n`);

// 1. TÌM TRONG NGÂN HÀNG CÂU HỎI CHÍNH THỨC
let qaScored = [];
if (indexData && indexData.qa) {
  for (const item of indexData.qa) {
    let score = 0;
    const itemTokens = new Set(item.tokens);

    // Điểm trùng khớp từ khóa
    queryTokens.forEach(t => {
      if (itemTokens.has(t)) score += 1;
    });

    // Điểm thưởng nếu câu hỏi chứa chuỗi liên tục
    if (item.question.toLowerCase().includes(queryLower)) {
      score += 10;
    } else {
      // Thưởng nếu câu hỏi chứa 3 từ liên tiếp
      for (let i = 0; i < queryTokens.length - 2; i++) {
        const sub = `${queryTokens[i]} ${queryTokens[i+1]} ${queryTokens[i+2]}`;
        if (item.rawText.includes(sub)) score += 3;
      }
    }

    const matchRatio = queryTokens.length > 0 ? (score / queryTokens.length) : 0;
    if (score > 1 || matchRatio >= 0.4) {
      qaScored.push({
        ...item,
        score,
        matchRatio: Math.min(100, Math.round(matchRatio * 100))
      });
    }
  }

  qaScored.sort((a, b) => b.score - a.score);
}

if (qaScored.length > 0 && qaScored[0].matchRatio >= 40) {
  const top = qaScored[0];
  console.log(`🎯 [ĐỘ TRÙNG KHỚP: ${top.matchRatio}%] TÌM THẤY TRONG NGÂN HÀNG ĐỀ CHÍNH THỨC:`);
  console.log(`\n📚 Môn: ${top.courseName} [${top.courseCode}] - ${top.quizName}`);
  console.log(`❓ Câu hỏi: ${top.question}`);
  if (top.options && top.options.length) {
    console.log(`📋 Các lựa chọn:`);
    top.options.forEach(opt => console.log(`   ${opt}`));
  }
  console.log(`\n🎯 ĐÁP ÁN CHÍNH THỨC: ${top.correctAnswer}`);
  console.log(`\n------------------------------------------------------------\n`);
} else {
  // 2. NẾU KHÔNG CÓ TRONG ĐỀ THI -> TÌM TRONG 621 KHỐI TRI THỨC GIÁO TRÌNH
  let chunkScored = [];
  if (indexData && indexData.chunks) {
    for (const chunk of indexData.chunks) {
      let score = 0;
      const chunkTokens = new Set(chunk.tokens);

      queryTokens.forEach(t => {
        if (chunkTokens.has(t)) score += 1;
      });

      if (chunk.content.toLowerCase().includes(queryLower)) {
        score += 15;
      }

      if (score >= 2) {
        chunkScored.push({
          ...chunk,
          score
        });
      }
    }

    chunkScored.sort((a, b) => b.score - a.score);
  }

  if (chunkScored.length > 0) {
    console.log(`📖 CĂN CỨ TỪ GIÁO TRÌNH & SLIDE CHÍNH THỨC (Tìm thấy ${chunkScored.length} đoạn trích liên quan):`);
    chunkScored.slice(0, 3).forEach((c, idx) => {
      console.log(`\n[${idx + 1}] [${c.courseCode}] ${c.docName} (Slide/Đoạn: ${c.slideIndex})`);
      console.log(`   "... ${c.content.slice(0, 350)} ..."`);
    });
  } else {
    console.log('Chưa tìm thấy đoạn trích phù hợp trong giáo trình.');
  }
}

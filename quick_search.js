/**
 * Công cụ Tra Cứu Siêu Tốc eTNU & Obsidian Vault (<50ms)
 * - Ưu tiên khớp chính xác phần câu hỏi (qTokens) + phương án (extraQuery) để không nhầm các câu chung đề bài
 * - Fallback tìm trực tiếp trong toàn bộ Obsidian Vault (tóm tắt lý thuyết, thuật ngữ, giáo trình)
 * Cách dùng: node quick_search.js "<câu hỏi hoặc từ khóa>" "[các phương án hoặc từ khóa bổ sung]"
 */
const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const query = process.argv[2] ? process.argv[2].trim() : '';
const extraQuery = process.argv[3] ? process.argv[3].trim() : '';

if (!query) {
  console.log('Cách dùng: node quick_search.js "<câu hỏi / từ khóa>" "[phương án / từ khóa phụ]"');
  process.exit(0);
}

const STOP_WORDS = new Set([
  'là', 'của', 'và', 'các', 'những', 'nào', 'sau', 'đây', 'khi', 'về', 'hỏi', 'hãy', 'chọn',
  'được', 'có', 'trong', 'cho', 'với', 'ở', 'đến', 'theo', 'như', 'đã', 'sẽ', 'một', 'để',
  'tại', 'bởi', 'do', 'này', 'đó', 'thì', 'mà', 'ra', 'lại', 'qua', 'bằng', 'trên', 'dưới',
  'gì', 'bao', 'nhiêu', 'thế', 'nên', 'vào', 'từ', 'nếu', 'cần', 'phải', 'không'
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

const qTokens = Array.from(new Set(tokenize(query)));
const extraTokens = Array.from(new Set(tokenize(extraQuery)));
const allQueryTokens = Array.from(new Set([...qTokens, ...extraTokens]));
const queryLower = query.toLowerCase().normalize('NFC').replace(/\s+/g, ' ');
const extraLower = extraQuery.toLowerCase().normalize('NFC').replace(/\s+/g, ' ');

const indexFile = path.join(baseDir, 'etnu_knowledge_index.json');
if (!fs.existsSync(indexFile)) {
  console.error('Chưa có etnu_knowledge_index.json. Hãy chạy: node build_smart_index.js');
  process.exit(1);
}

const indexData = JSON.parse(fs.readFileSync(indexFile, 'utf8'));

// 1. TÌM TRONG NGÂN HÀNG CÂU HỎI (QA + VERIFIED ADDITIONS)
const qaScored = [];
for (const item of indexData.qa || []) {
  const qSet = new Set(item.qTokens || item.tokens);
  const allSet = new Set(item.tokens);

  let qMatches = 0;
  for (const t of qTokens) {
    if (qSet.has(t)) qMatches += 1;
  }

  let extraMatches = 0;
  for (const t of extraTokens) {
    if (allSet.has(t)) extraMatches += 1;
  }

  let bonus = 0;
  const qLower = item.qLower || item.question.toLowerCase();
  if (qLower === queryLower) {
    bonus += 50;
  } else if (queryLower.length >= 10 && qLower.includes(queryLower)) {
    bonus += 20;
  } else if (qLower.length >= 10 && queryLower.includes(qLower)) {
    bonus += 20;
  } else {
    // Thưởng chuỗi 3 từ liên tiếp trong câu hỏi
    for (let i = 0; i < qTokens.length - 2; i++) {
      const sub = `${qTokens[i]} ${qTokens[i + 1]} ${qTokens[i + 2]}`;
      if (qLower.includes(sub)) bonus += 4;
    }
  }

  // Thưởng nếu đáp án đúng hoặc options khớp với extraQuery
  if (extraLower && item.correctAnswer.toLowerCase().includes(extraLower)) {
    bonus += 5;
  }

  const coverage = qTokens.length > 0 ? qMatches / qTokens.length : 0;
  const reverseCoverage = (item.qTokens && item.qTokens.length > 0) ? qMatches / item.qTokens.length : coverage;
  const score = qMatches * 2 + extraMatches + bonus;
  const matchRatio = Math.min(100, Math.round(Math.max(coverage, reverseCoverage) * 100));

  if ((qMatches >= 2 && matchRatio >= 45) || bonus >= 20) {
    qaScored.push({ ...item, score, matchRatio });
  }
}

qaScored.sort((a, b) => b.score - a.score || b.matchRatio - a.matchRatio);

if (qaScored.length > 0 && (qaScored[0].matchRatio >= 55 || qaScored[0].score >= 20)) {
  const top = qaScored[0];
  console.log(`🎯 [${top.matchRatio}% | ${top.courseCode}] ${top.question}`);
  console.log(`✅ ĐÁP ÁN: ${top.correctAnswer}`);
  if (qaScored.length > 1 && qaScored[1].matchRatio >= 55) {
    console.log(`↪️ Câu gần giống: [${qaScored[1].matchRatio}%] ${qaScored[1].question} => ${qaScored[1].correctAnswer}`);
  }
  process.exit(0);
}

// 2. FALLBACK: TÌM TRONG OBSIDIAN VAULT (TÓM TẮT + THUẬT NGỮ + GIÁO TRÌNH)
const chunkScored = [];
for (const chunk of indexData.chunks || []) {
  const chunkSet = new Set(chunk.tokens);
  let matches = 0;
  for (const t of allQueryTokens) {
    if (chunkSet.has(t)) matches += 1;
  }
  if (matches < 2) continue;

  let score = matches * (chunk.priority === 2 ? 1.5 : 1);
  const contentLower = chunk.content.toLowerCase();
  if (queryLower.length >= 8 && contentLower.includes(queryLower)) {
    score += 15;
  }
  chunkScored.push({ ...chunk, score, matches });
}

chunkScored.sort((a, b) => b.score - a.score);

if (chunkScored.length > 0) {
  console.log(`📖 TÌM THẤY TRONG OBSIDIAN VAULT (${chunkScored.length} đoạn liên quan):`);
  chunkScored.slice(0, 3).forEach((c, idx) => {
    // Cắt đoạn văn quanh từ khóa khớp đầu tiên thay vì cắt từ đầu
    const lower = c.content.toLowerCase();
    let pos = -1;
    for (const t of qTokens) {
      const p = lower.indexOf(t);
      if (p !== -1) { pos = p; break; }
    }
    const start = Math.max(0, pos - 120);
    const snippet = c.content.slice(start, start + 420);
    console.log(`\n[${idx + 1}] [${c.courseCode}] ${c.docName}`);
    console.log(`   "...${snippet}..."`);
  });
} else {
  console.log('❌ Không tìm thấy trong Vault.');
}

/**
 * Script bóc tách Ngân hàng Đề thi & Obsidian Vault (tnu-knowledge/) thành Inverted Index
 * Phục vụ tra cứu siêu tốc (<50ms) và chính xác cao cho câu hỏi dạng ảnh / văn bản
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const baseDir = __dirname;
const vaultDir = path.join(baseDir, 'tnu-knowledge');

const STOP_WORDS = new Set([
  'là', 'của', 'và', 'các', 'những', 'nào', 'sau', 'đây', 'khi', 'về', 'hỏi', 'hãy', 'chọn',
  'được', 'có', 'trong', 'cho', 'với', 'ở', 'đến', 'theo', 'như', 'đã', 'sẽ', 'một', 'để',
  'tại', 'bởi', 'do', 'này', 'đó', 'thì', 'mà', 'ra', 'lại', 'qua', 'bằng', 'trên', 'dưới',
  'gì', 'bao', 'nhiêu', 'thế', 'nên', 'vào', 'từ', 'nếu', 'cần', 'phải', 'không'
]);

function normalizeText(text) {
  return (text || '').normalize('NFC').replace(/\s+/g, ' ').trim();
}

function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

function walkMdFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMdFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

console.log('⚡ Bắt đầu lập chỉ mục tối ưu từ Kho Tri Thức & Obsidian Vault...');

// 1. Gộp Ngân hàng Đề thi (QA Database + Verified Additions)
const qaFiles = ['etnu_full_qa_database.json', 'verified_qa_additions.json'];
const seenQuestions = new Set();
const qaList = [];

for (const file of qaFiles) {
  const fullPath = path.join(baseDir, file);
  if (!fs.existsSync(fullPath)) continue;
  const items = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  for (const item of items) {
    const qKey = normalizeText(item.question).toLowerCase();
    if (!qKey || seenQuestions.has(qKey)) continue;
    seenQuestions.add(qKey);
    qaList.push(item);
  }
}

const indexedQA = qaList.map((item, id) => {
  const qNorm = normalizeText(item.question);
  const qTokens = Array.from(new Set(tokenize(qNorm)));
  const optTokens = Array.from(new Set(tokenize((item.options || []).join(' '))));
  const ansTokens = Array.from(new Set(tokenize(item.correctAnswer)));
  const allTokens = Array.from(new Set([...qTokens, ...optTokens, ...ansTokens]));

  return {
    id,
    courseCode: item.courseCode,
    courseName: item.courseName,
    quizName: item.quizName,
    question: qNorm,
    options: item.options || [],
    correctAnswer: normalizeText(item.correctAnswer),
    explanation: item.explanation || '',
    reference: item.reference || '',
    qTokens,
    tokens: allTokens,
    qLower: qNorm.toLowerCase(),
    rawText: `${qNorm} ${(item.options || []).join(' ')} ${item.correctAnswer}`.toLowerCase()
  };
});

console.log(`✅ Đã lập chỉ mục ${indexedQA.length} câu hỏi trắc nghiệm (đã khử trùng lặp).`);

// 2. Chỉ mục toàn bộ Obsidian Vault (tnu-knowledge/) — khử trùng lặp nội dung
const chunks = [];
const seenHashes = new Set();
const mdFiles = walkMdFiles(vaultDir);

for (const filePath of mdFiles) {
  const relPath = path.relative(vaultDir, filePath);
  // Bỏ qua thư mục Ngân hàng trắc nghiệm vì đã có trong indexedQA
  if (relPath.includes('Ngân hàng trắc nghiệm') || relPath.includes('00 - Mục Lục') || relPath === 'README.md') {
    continue;
  }

  let rawContent = fs.readFileSync(filePath, 'utf8');
  // Bỏ frontmatter YAML
  rawContent = rawContent.replace(/^---[\s\S]*?---\s*/, '');

  const isSummaryOrConcept =
    relPath.includes('00 - Tổng quan lý thuyết') ||
    relPath.includes('Thuật ngữ & Khái niệm cốt lõi');

  const courseMatch = relPath.match(/\[(A\d{6})\]/);
  const courseCode = courseMatch ? courseMatch[1] : 'CORE';
  const docName = path.basename(filePath, '.md').normalize('NFC');

  // Tách theo heading ## / ### hoặc slide marker hoặc đoạn văn
  let rawBlocks = rawContent.split(/(?=^#{1,4}\s+)|--\s*\d+\s*of\s*\d+\s*--/gm);
  if (rawBlocks.length <= 1) {
    rawBlocks = rawContent.split(/\n\s*\n/g);
  }

  for (let idx = 0; idx < rawBlocks.length; idx++) {
    const cleanBlock = normalizeText(rawBlocks[idx]);
    if (cleanBlock.length < 35) continue;

    // Khử trùng lặp chính xác theo MD5 nội dung
    const hash = crypto.createHash('md5').update(cleanBlock.toLowerCase()).digest('hex');
    if (seenHashes.has(hash)) continue;
    seenHashes.add(hash);

    const tokens = Array.from(new Set(tokenize(cleanBlock)));
    if (tokens.length < 3) continue;

    chunks.push({
      id: chunks.length,
      courseCode,
      docName,
      relPath,
      priority: isSummaryOrConcept ? 2 : 1,
      slideIndex: idx + 1,
      content: cleanBlock,
      tokens
    });
  }
}

console.log(`✅ Đã bóc tách ${chunks.length} khối tri thức duy nhất từ Obsidian Vault (đã loại bỏ trùng lặp).`);

const indexFile = path.join(baseDir, 'etnu_knowledge_index.json');
const indexData = {
  createdAt: new Date().toISOString(),
  qa: indexedQA,
  chunks
};

fs.writeFileSync(indexFile, JSON.stringify(indexData));
const sizeKB = Math.round(fs.statSync(indexFile).size / 1024);
console.log(`🎉 HOÀN TẤT! File chỉ mục mới: etnu_knowledge_index.json (${sizeKB} KB)`);

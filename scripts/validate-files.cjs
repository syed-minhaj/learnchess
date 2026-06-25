const {Chess} = require('chess.js');
const fs = require('fs');

function verify(fen, moves) {
  const g = new Chess(fen);
  for (const m of moves) {
    try { g.move(m.trim().replace(/#$/, '').replace(/\+$/, '')); }
    catch(e) { return { ok: false, at: m, reason: e.message }; }
  }
  return { ok: true };
}

function verifyFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  if (start === -1 || end === -1) { console.log('SKIP ' + filePath + ': no array'); return; }
  
  const jsonStr = content.substring(start, end + 1)
    .replace(/\/\/.*$/gm, '')
    .replace(/:\s*'([^']*)'/g, (m, p1) => ':"' + p1.replace(/"/g, '\\"') + '"')
    .replace(/,\s*\]/g, ']')
    .replace(/,\s*\}/g, '}')
    .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
  
  try {
    const lessons = JSON.parse(jsonStr);
    let passed = 0, failed = 0;
    for (const lesson of lessons) {
      const moves = (lesson.mainLine || []).map(m => m.san);
      const result = verify(lesson.startingFen, moves);
      if (result.ok) {
        passed++;
      } else {
        console.log('  FAIL ' + lesson.id + ': move "' + result.at + '" failed: ' + result.reason);
        failed++;
      }
    }
    console.log(filePath + ': ' + passed + '/' + (passed + failed) + ' passed' + (failed > 0 ? ' (' + failed + ' failed)' : ''));
    return { passed, failed };
  } catch(e) {
    console.log('PARSE ERR ' + filePath + ': ' + e.message);
    console.log('First 200 chars of JSON attempt: ' + jsonStr.substring(0, 200));
    return { passed: 0, failed: 0, parseError: e.message };
  }
}

console.log('=== FULL VALIDATION ===\n');
const files = [
  'data/defense.ts',
  'data/tactics.ts',
  'data/checkmates.ts',
  'data/pawn-structures.ts',
  'data/middlegame.ts',
  'data/endgame.ts',
  'data/openings.ts',
  'data/famous-games.ts'
];

let totalPassed = 0, totalFailed = 0;
for (const file of files) {
  const result = verifyFile(file);
  if (result) {
    totalPassed += result.passed || 0;
    totalFailed += result.failed || 0;
  }
}
console.log('\n=== TOTAL: ' + totalPassed + '/' + (totalPassed + totalFailed) + ' passed ===');

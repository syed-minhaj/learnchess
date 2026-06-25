const {Chess} = require('chess.js');
const fs = require('fs');

const content = fs.readFileSync('data/famous-games.ts', 'utf-8');

// Parse lessons - very crude approach
const lessons = [];
const lessonBlocks = content.split(/\n  \{/);
for (let block of lessonBlocks.slice(1)) {
  block = '{' + block;
  const idMatch = block.match(/id:\s*'([^']+)'/);
  const fenMatch = block.match(/startingFen:\s*'([^']+)'/);
  const sanMatches = [...block.matchAll(/san:\s*'([^']+)'/g)];
  if (idMatch && fenMatch && sanMatches.length > 0) {
    lessons.push({
      id: idMatch[1],
      fen: fenMatch[1],
      san: sanMatches.map(m => m[1])
    });
  }
}

for (const lesson of lessons) {
  const g = new Chess(lesson.fen);
  let ok = true;
  for (const m of lesson.san) {
    try {
      const san = m.replace(/[+#]/g, '');
      g.move(san);
    } catch(e) {
      console.log('FAIL ' + lesson.id + ': move "' + m + '" invalid: ' + e.message);
      ok = false;
      break;
    }
  }
  if (ok) {
    console.log('PASS ' + lesson.id + ' (' + lesson.san.length + ' moves)');
  }
}

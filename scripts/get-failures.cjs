const {Chess} = require('chess.js');
const fs = require('fs');

const content = fs.readFileSync('data/famous-games.ts', 'utf-8');
const lessonBlocks = content.split(/\n  \{/);

for (let i = 1; i < lessonBlocks.length; i++) {
  const block = '{' + lessonBlocks[i];
  const idMatch = block.match(/id:\s*'([^']+)'/);
  const fenMatch = block.match(/startingFen:\s*'([^']+)'/);
  if (!idMatch || !fenMatch) continue;

  const id = idMatch[1];
  const fen = fenMatch[1];
  const moves = [...block.matchAll(/san:\s*'([^']+)'/g)].map(m => m[1]);

  const g = new Chess(fen);
  let failAt = -1, failMove = '';
  for (let j = 0; j < moves.length; j++) {
    try { g.move(moves[j].replace(/[+#]/g, '')); } catch(e) {
      failAt = j;
      failMove = moves[j];
      break;
    }
  }

  if (failAt === -1) {
    console.log(`PASS  ${id} (${moves.length} moves all valid, ends at line ~?)`);
  } else {
    // Find actual line in file
    const escaped = moves[failAt].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const idx = content.indexOf(`san: '${moves[failAt]}'`);
    const lineNo = content.substring(0, idx).split('\n').length;
    console.log(`FAIL  ${id}: move ${failAt+1} "${moves[failAt]}" fails at line ${lineNo}` +
      ` (${moves.length} total moves, ${moves.length - failAt - 1} remaining)`);
  }
}

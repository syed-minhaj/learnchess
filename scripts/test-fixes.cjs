const { Chess } = require('chess.js');
const fs = require('fs');
const path = require('path');

function matchBrace(str, start, open, close) {
  let depth = 1, i = start + 1;
  while (i < str.length && depth > 0) {
    if (str[i] === open) depth++;
    else if (str[i] === close) depth--;
    i++;
  }
  return i;
}

function extractLessonBlocks(content) {
  const blocks = [];
  let pos = 0;
  while (true) {
    const idPos = content.indexOf("\n    id: '", pos);
    if (idPos === -1) break;
    const idEnd = content.indexOf("'", idPos + 10);
    const id = content.substring(idPos + 10, idEnd);
    const blockStart = content.lastIndexOf('{', idPos);
    if (blockStart === -1) { pos = idEnd + 1; continue; }
    const blockEnd = matchBrace(content, blockStart, '{', '}');
    blocks.push({ id, block: content.substring(blockStart, blockEnd), start: blockStart, end: blockEnd });
    pos = blockEnd;
  }
  return blocks;
}

// Fix a lesson's FEN by replacing it in the file content
function replaceFEN(content, lessonId, newFen) {
  const blocks = extractLessonBlocks(content);
  for (const b of blocks) {
    if (b.id === lessonId) {
      const oldFenMatch = b.block.match(/(startingFen:\s*)'([^']+)'/);
      if (oldFenMatch) {
        const oldFen = oldFenMatch[2];
        const before = content.substring(0, b.start + oldFenMatch.index + oldFenMatch[1].length + 1);
        const after = content.substring(b.start + oldFenMatch.index + oldFenMatch[1].length + 1 + oldFen.length + 1);
        return before + newFen + "'" + after;
      }
    }
  }
  return content;
}

// Test a sequence and return the first failing index (or -1 if all pass)
function testSequence(fen, moves) {
  try {
    const g = new Chess(fen);
    for (let i = 0; i < moves.length; i++) {
      try {
        const r = g.move(moves[i]);
        if (!r) return { index: i, reason: 'illegal', legal: g.moves().slice(0, 8) };
      } catch(e) {
        return { index: i, reason: e.message, legal: g.moves().slice(0, 8) };
      }
    }
    return null;
  } catch(e) {
    return { index: -1, reason: 'Invalid FEN: ' + e.message };
  }
}

console.log('=== Testing current fixes ===\n');

// Test the tactics skewers fix
console.log('1. Tactics - skewers:');
const r1 = testSequence('r1bq1rk1/ppp2ppp/2np4/8/3P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 6', ['Bxh7+','Kxh7','Ng5+']);
console.log(r1 ? 'FAIL at ' + r1.index + ': ' + r1.reason : 'PASS');

// Test defense fixes
console.log('\n2. Defense - fortresses:');
const r2 = testSequence('8/8/8/8/8/8/8/k2BK3 w - - 0 1', ['Kd1','Kb2','Bc1+']);
console.log(r2 ? 'FAIL at ' + r2.index + ': ' + r2.reason : 'PASS');

console.log('\n3. Defense - perpetual-check:');
const r3 = testSequence('8/8/8/8/Q7/2K5/8/7k w - - 0 1', ['Qd1+','Kg2','Qe2+','Kg3','Qe1+','Kg4','Qe4+']);
console.log(r3 ? 'FAIL at ' + r3.index + ': ' + r3.reason : 'PASS');

console.log('\n4. Defense - counterplay:');
// Redesign: white pushes d4 against black center
const r4 = testSequence('r1bq1rk1/pppp1ppp/2n2n2/4p3/2B1P1n1/2NP4/PPP2PPP/R1BQ1RK1 w - - 0 6', ['h3','Nh6','d4','exd4','Nxd4']);
console.log(r4 ? 'FAIL at ' + r4.index + ': ' + r4.reason : 'PASS');

// Test checkmate fixes
console.log('\n5. Checkmates - back-rank:');
const r5 = testSequence('6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1', ['Re8#']);
console.log(r5 ? 'FAIL at ' + r5.index + ': ' + r5.reason : 'PASS');

console.log('\n6. Checkmates - smothered:');
// Classic smothered mate: Nf7+ Kh8 Ng5 h6 Nf7+ Kh7 Ng5+ Kh8 ... but still not mate
// Actually the original lesson doesn't end in checkmate - it shows the pattern
// Let me design a simple smothered mate: white knight on f7, black king in corner
// The smothered mate requires the king to be surrounded by its own pieces
// Known pattern: Ng5 Nf7+ Kh8 Nh6+... but that's complex
// Simple position: black king on h8, pawns on g7, f7, white knight on f7 gives perpetual
// Actually the original lesson just shows the knight checking sequence, no mate
const r6 = testSequence('6k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1', []);
// Too broken to fix quickly, mark as needs redesign
console.log('SKIP - needs full redesign');

console.log('\n7. Checkmates - anastasia:');
// Anastasia mate: knight covers escape squares, rook delivers mate along h-file
// Position: black king h8, pawn on g7, white rook on g1, white knight on f6
// Rg1+ Kf8 Rh1 Ke8 Rh8#
const r7 = testSequence('6k1/5ppp/8/8/8/8/5PPP/7K w - - 0 1', []);
console.log('SKIP - needs full redesign');

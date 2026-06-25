const { Chess } = require('chess.js');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

function matchBrace(str, start, open, close) {
  let depth = 1, i = start + 1;
  while (i < str.length && depth > 0) {
    if (str[i] === open) depth++;
    else if (str[i] === close) depth--;
    i++;
  }
  return i;
}

function extractLessons(content, sourceFile) {
  const lessons = [];
  let pos = 0;
  while (true) {
    const idPos = content.indexOf("\n    id: '", pos);
    if (idPos === -1) break;
    const idEnd = content.indexOf("'", idPos + 10);
    const id = content.substring(idPos + 10, idEnd);
    const blockStart = content.lastIndexOf('{', idPos);
    if (blockStart === -1) { pos = idEnd + 1; continue; }
    const blockEnd = matchBrace(content, blockStart, '{', '}');
    const block = content.substring(blockStart, blockEnd);
    const fenMatch = block.match(/startingFen:\s*'([^']+)'/);
    const colorMatch = block.match(/userColor:\s*'([^']+)'/);
    if (!fenMatch || !colorMatch) { pos = idEnd + 1; continue; }
    const fen = fenMatch[1];
    const mainIdx = block.indexOf('mainLine:');
    if (mainIdx === -1) { pos = idEnd + 1; continue; }
    const bracketStart = block.indexOf('[', mainIdx);
    if (bracketStart === -1) { pos = idEnd + 1; continue; }
    const mainEnd = matchBrace(block, bracketStart, '[', ']');
    const mainContent = block.substring(bracketStart + 1, mainEnd - 1);
    const moves = [];
    const sanRegex = /san:\s*'([^']+)'/g;
    let m;
    while ((m = sanRegex.exec(mainContent)) !== null) moves.push(m[1]);
    if (moves.length > 0) lessons.push({ id, fen, moves, file: sourceFile });
    pos = idEnd + 1;
  }
  return lessons;
}

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'sections.ts' && f !== 'registry.ts');
let allLessons = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  allLessons.push(...extractLessons(content, file));
}

for (const lesson of allLessons) {
  try {
    const game = new Chess(lesson.fen);
    for (let i = 0; i < lesson.moves.length; i++) {
      try {
        const r = game.move(lesson.moves[i]);
        if (!r) {
          const legal = game.moves({ verbose: true }).slice(0, 8).map(m => m.san).join(', ');
          console.log(`${lesson.file} / ${lesson.id} / move ${i+1}: "${lesson.moves[i]}" - ILLEGAL (legal: ${legal}...)`);
          break;
        }
      } catch(e) {
        const legal = game.moves({ verbose: true }).slice(0, 8).map(m => m.san).join(', ');
        console.log(`${lesson.file} / ${lesson.id} / move ${i+1}: "${lesson.moves[i]}" - ${e.message} (legal: ${legal}...)`);
        break;
      }
    }
  } catch(e) {
    console.log(`${lesson.file} / ${lesson.id} / FEN: ${e.message}`);
  }
}

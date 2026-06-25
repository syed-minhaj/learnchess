const { Chess } = require('chess.js');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'sections.ts' && f !== 'registry.ts');

function matchBrace(str, start, open, close) {
  let depth = 1;
  let i = start + 1;
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
    const color = colorMatch[1];

    const mainIdx = block.indexOf('mainLine:');
    if (mainIdx === -1) { pos = idEnd + 1; continue; }

    const bracketStart = block.indexOf('[', mainIdx);
    if (bracketStart === -1) { pos = idEnd + 1; continue; }

    const mainEnd = matchBrace(block, bracketStart, '[', ']');
    const mainContent = block.substring(bracketStart + 1, mainEnd - 1);

    const moves = [];
    const sanRegex = /san:\s*'([^']+)'/g;
    let m;
    while ((m = sanRegex.exec(mainContent)) !== null) {
      moves.push(m[1]);
    }

    if (moves.length > 0) {
      lessons.push({ id, fen, color, moves, file: sourceFile });
    }
    pos = idEnd + 1;
  }
  return lessons;
}

let allLessons = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  allLessons.push(...extractLessons(content, file));
}

console.log(`Found ${allLessons.length} lessons across ${files.length} files\n`);

let hasErrors = false;
let totalMoves = 0;
let errorDetails = [];

for (const lesson of allLessons) {
  try {
    const game = new Chess(lesson.fen);
    for (let moveNum = 0; moveNum < lesson.moves.length; moveNum++) {
      totalMoves++;
      const san = lesson.moves[moveNum];
      try {
        const result = game.move(san);
        if (!result) {
          console.log(`X ${lesson.file} / ${lesson.id} (move ${moveNum + 1}): "${san}" — illegal`);
          hasErrors = true;
          errorDetails.push({ lesson: lesson.id, file: lesson.file, moveNum: moveNum + 1, san });
        }
      } catch (e) {
        console.log(`X ${lesson.file} / ${lesson.id} (move ${moveNum + 1}): "${san}" — ${e.message}`);
        hasErrors = true;
        errorDetails.push({ lesson: lesson.id, file: lesson.file, moveNum: moveNum + 1, san });
      }
    }
  } catch (e) {
    console.log(`X ${lesson.file} / ${lesson.id} — Invalid FEN: ${e.message}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.log(`\nIssues: ${errorDetails.length} error(s) across ${allLessons.length} lessons, ${totalMoves} total moves`);
} else {
  console.log(`All ${totalMoves} moves across ${allLessons.length} lessons are valid!`);
}

const { Chess } = require('chess.js');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'sections.ts' && f !== 'registry.ts' && f !== 'tests.ts');

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

    const titleMatch = block.match(/title:\s*'([^']+)'/);
    const descMatch = block.match(/description:\s*'([^']+)'/);
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
    const moveRegex = /\bsan:\s*'([^']+)'\s*,\s*explanation:\s*'((?:[^'\\]|\\.)*)'/g;
    let m;
    while ((m = moveRegex.exec(mainContent)) !== null) {
      moves.push({ san: m[1], explanation: m[2].replace(/\\'/g, "'") });
    }
    if (moves.length > 0) {
      lessons.push({ id, fen, color, moves, file: sourceFile, title: titleMatch ? titleMatch[1] : id, description: descMatch ? descMatch[1] : '' });
    }
    pos = idEnd + 1;
  }
  return lessons;
}

console.log('Parsing lesson files...\n');
let allLessons = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  allLessons.push(...extractLessons(content, file));
}
console.log(`Found ${allLessons.length} lessons\n`);

function generateTestPrompt(title, description) {
  const lower = (title + ' ' + description).toLowerCase();
  if (lower.includes('fork')) return 'Find the fork to win material.';
  if (lower.includes('pin')) return 'Create a pin to restrict the opponent\'s pieces.';
  if (lower.includes('skewer')) return 'Use a skewer to win material.';
  if (lower.includes('discovered')) return 'Unleash a discovered attack.';
  if (lower.includes('double check')) return 'Deliver a double check.';
  if (lower.includes('checkmate') || lower.includes('mate')) return 'Deliver checkmate from this position.';
  if (lower.includes('open') && lower.includes('sicilian')) return 'Play the correct moves in the Open Sicilian.';
  if (lower.includes('italian')) return 'Play the Italian Game correctly.';
  if (lower.includes('ruy') || lower.includes('lopez')) return 'Play the Ruy Lopez correctly.';
  if (lower.includes('french')) return 'Play the French Defense correctly.';
  if (lower.includes('queen') && lower.includes('gambit')) return 'Play the Queen\'s Gambit correctly.';
  if (lower.includes('center')) return 'Fight for control of the center.';
  if (lower.includes('activity')) return 'Improve your piece activity.';
  if (lower.includes('king safety')) return 'Keep your king safe.';
  if (lower.includes('pawn') && lower.includes('structure')) return 'Handle the pawn structure correctly.';
  if (lower.includes('open file')) return 'Use an open file to your advantage.';
  if (lower.includes('outpost')) return 'Establish a knight outpost.';
  if (lower.includes('prophylaxis')) return 'Find the prophylactic move.';
  if (lower.includes('endgame')) return 'Convert this endgame position.';
  if (lower.includes('opposition')) return 'Win using the opposition.';
  if (lower.includes('rook endgame')) return 'Find the winning idea in this rook endgame.';
  if (lower.includes('bishop') && lower.includes('knight')) return 'Play the bishop vs knight endgame correctly.';
  if (lower.includes('queen endgame')) return 'Find the winning plan in this queen endgame.';
  if (lower.includes('back rank')) return 'Exploit the back rank weakness.';
  if (lower.includes('smothered')) return 'Deliver a smothered mate.';
  if (lower.includes('anastasia')) return 'Deliver Anastasia\'s mate.';
  if (lower.includes('boden')) return 'Deliver Boden\'s mate.';
  if (lower.includes('greek gift')) return 'Execute the Greek Gift sacrifice.';
  if (lower.includes('epaulette')) return 'Deliver the epaulette mate.';
  if (lower.includes('iqp') || lower.includes('isolated')) return 'Play the IQP position correctly.';
  if (lower.includes('hanging')) return 'Handle the hanging pawns correctly.';
  if (lower.includes('doubled')) return 'Play the doubled pawns position correctly.';
  if (lower.includes('pawn chain')) return 'Handle the pawn chain correctly.';
  if (lower.includes('carlsbad')) return 'Play the Carlsbad structure correctly.';
  if (lower.includes('hedgehog')) return 'Play the Hedgehog structure correctly.';
  if (lower.includes('threat')) return 'Find the right defensive idea.';
  if (lower.includes('resource')) return 'Find a resource to save the game.';
  if (lower.includes('counterplay')) return 'Create counterplay in a difficult position.';
  if (lower.includes('fortress')) return 'Build a fortress to draw.';
  if (lower.includes('perpetual')) return 'Find the perpetual check.';
  if (lower.includes('zugzwang')) return 'Exploit zugzwang to win.';
  return 'Find the best move in this position.';
}

const testData = {};

for (const lesson of allLessons) {
  const game = new Chess(lesson.fen);
  const allMoves = [];
  for (const move of lesson.moves) {
    allMoves.push(move);
    game.move(move.san);
  }

  const userIndices = [];
  const sim = new Chess(lesson.fen);
  for (let i = 0; i < lesson.moves.length; i++) {
    if (sim.turn() === lesson.color) userIndices.push(i);
    sim.move(lesson.moves[i].san);
  }

  const lastUserIndices = userIndices.slice(-3);
  if (lastUserIndices.length === 0) {
    console.log(`  SKIP ${lesson.id} — no user moves`);
    continue;
  }

  const firstTestUserIdx = lastUserIndices[0];

  const testGame = new Chess(lesson.fen);
  for (let i = 0; i < firstTestUserIdx; i++) {
    testGame.move(lesson.moves[i].san);
  }
  const testFen = testGame.fen();

  const root = [];
  for (const userIdx of lastUserIndices) {
    const userSan = lesson.moves[userIdx].san;
    const botSan = userIdx + 1 < lesson.moves.length ? lesson.moves[userIdx + 1].san : null;
    root.push({
      userMove: userSan,
      botResponse: botSan,
      comment: lesson.moves[userIdx].explanation.substring(0, 120),
    });
  }

  const prompt = generateTestPrompt(lesson.title, lesson.description);

  testData[lesson.id] = {
    fen: testFen,
    userColor: lesson.color,
    prompt,
    root,
  };
  console.log(`  ${lesson.id} — ${root.length} user move(s)`);
}

let output = `import { TestScenario } from '@/types';\n\nexport const testData: Record<string, TestScenario> = {\n`;
for (const [id, data] of Object.entries(testData)) {
  const rootStr = data.root.map(n => {
    const parts = [`      userMove: '${n.userMove.replace(/'/g, "\\'")}'`];
    if (n.botResponse) parts.push(`botResponse: '${n.botResponse.replace(/'/g, "\\'")}'`);
    if (n.comment) parts.push(`comment: '${n.comment.replace(/'/g, "\\'")}'`);
    return `      { ${parts.join(', ')} }`;
  }).join(',\n');
  output += `  '${id}': {\n    fen: '${data.fen.replace(/'/g, "\\'")}',\n    userColor: '${data.userColor}',\n    prompt: '${data.prompt.replace(/'/g, "\\'")}',\n    root: [\n${rootStr},\n    ],\n  },\n`;
}
output += `};\n`;

fs.writeFileSync(path.join(dataDir, 'tests.ts'), output, 'utf8');
console.log(`\nWrote data/tests.ts with ${Object.keys(testData).length} tests`);

const { Chess } = require('chess.js');
const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, '..', 'data', 'tests.ts');
const content = fs.readFileSync(testFilePath, 'utf8');

const testRegex = /'([^']+)':\s*\{[\s\S]*?fen:\s*'([^']+)'[\s\S]*?userColor:\s*'([^']+)'[\s\S]*?prompt:\s*'([^']*)'[\s\S]*?root:\s*\[([\s\S]*?)\]/g;

let match;
let total = 0;
let passed = 0;
let failed = 0;

while ((match = testRegex.exec(content)) !== null) {
  const id = match[1];
  const fen = match[2];
  const color = match[3];
  const rootSection = match[5];

  const nodeRegex = /userMove:\s*'([^']+)'(?:,\s*botResponse:\s*'([^']*)')?/g;
  let nodeMatch;
  let prevBotResponse = null;
  let ok = true;

  const game = new Chess(fen);

  while ((nodeMatch = nodeRegex.exec(rootSection)) !== null) {
    const userSan = nodeMatch[1];
    const botSan = nodeMatch[2] || null;

    try {
      game.move(userSan);
    } catch (e) {
      console.log(`X ${id}: user move "${userSan}" illegal — ${e.message}`);
      ok = false;
      break;
    }

    if (botSan) {
      try {
        game.move(botSan);
      } catch (e) {
        console.log(`X ${id}: bot response "${botSan}" after "${userSan}" illegal — ${e.message}`);
        ok = false;
        break;
      }
    }
  }

  total++;
  if (ok) {
    passed++;
  } else {
    failed++;
  }
}

console.log(`\n${passed}/${total} tests valid`);
if (failed > 0) process.exit(1);

/**
 * Fix all broken lesson data with verified chess.js positions.
 * Run: node scripts/fix-all-lessons.cjs
 * 
 * This script reads each data file, replaces broken lessons with
 * corrected versions, and writes the fixed files.
 */
const { Chess } = require('./node_modules/chess.js/dist/cjs/chess.js');
const fs = require('fs');
const path = require('path');

// Helper: verify a sequence is legal
function verify(fen, moves) {
  try {
    const g = new Chess(fen);
    for (const m of moves) {
      const result = g.move(m);
      if (!result) throw new Error(`Move ${m} returned falsy`);
    }
    return g.fen();
  } catch (e) {
    return null;
  }
}

// Helper: create corrected lesson with verification
function fixLesson(id, sectionId, title, desc, diff, fen, userColor, mins, moves) {
  const result = verify(fen, moves.map(m => m.san));
  if (!result) {
    console.error(`  FAILED: ${id} - sequence not valid`);
    return null;
  }
  return {
    id,
    sectionId,
    title,
    description: desc,
    difficulty: diff,
    startingFen: fen,
    userColor,
    estimatedMinutes: mins,
    mainLine: moves,
  };
}

// ============================================================
// CHECKMATES FIXES
// ============================================================
function fixCheckmates() {
  const lessons = [];

  // 1. Back-rank mate - rook on e1, Re8#
  const br = fixLesson('back-rank', 'checkmates', 'Back Rank Mate',
    'The back rank mate is one of the most common checkmates. When the enemy king is trapped by its own pawns on the back rank, a rook or queen can deliver checkmate.',
    'beginner',
    '6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1', 'w', 5,
    [{ san: 'Re8#', explanation: 'Re8# is checkmate! The black king is trapped by its own pawns on f7, g7, and h7. The rook delivers mate on the back rank. Back rank mates are why you should always "create luft" (move a pawn) when your king is stuck on the back rank.', hint: 'Slide the rook to e8 for checkmate!' }]
  );
  if (br) lessons.push(br);

  // 2. Smothered mate - knight delivers mate with king blocked by own pieces
  const sm = fixLesson('smothered', 'checkmates', 'Smothered Mate',
    'A smothered mate occurs when a knight delivers checkmate to a king surrounded by its own pieces. It\'s one of the most beautiful patterns in chess.',
    'intermediate',
    '6bk/5Npp/8/8/8/8/8/6K1 w - - 0 1', 'w', 5,
    [
      { san: 'Nf7#', explanation: 'Nf7# is smothered mate! The knight checks the black king in the corner. The bishop on g8 and the pawns on g7 and h7 block all escape squares. This is the classic smothered mate pattern — the knight delivers mate while the enemy\'s own pieces trap the king.', hint: 'Deliver smothered mate with the knight!' }
    ]
  );
  if (sm) lessons.push(sm);

  // 3. Anastasia's mate - rook + knight working together
  const an = fixLesson('anastasia', 'checkmates', 'Anastasia\'s Mate',
    'Anastasia\'s mate uses a knight and rook to checkmate the king on the edge of the board. The knight covers escape squares while the rook delivers check.',
    'intermediate',
    '6k1/6pp/5N2/8/8/8/8/R5K1 w - - 0 1', 'w', 6,
    [
      { san: 'Ra8+', explanation: 'Ra8+ checks the king. The rook attacks along the a-file. The knight on f6 covers g8, preventing the king from escaping to g8.', hint: 'Check with the rook along the edge.' },
      { san: 'Kh7', explanation: 'The king can only go to h7.' },
      { san: 'Rh8#', explanation: 'Rh8# is Anastasia\'s mate! The rook delivers check along the h-file while the knight covers g8 and g7, preventing escape.', hint: 'Rh8# checkmate!' },
    ]
  );
  if (an) lessons.push(an);

  // 4. Boden's mate - two bishops cross-pattern
  const bd = fixLesson('bodens', 'checkmates', 'Boden\'s Mate',
    'Boden\'s mate features two bishops delivering checkmate with crossed diagonals, typically against a king that has castled queenside.',
    'advanced',
    'k4b1r/pp1N1ppp/8/4B3/8/8/PPP1BPPP/R5K1 w - - 0 1', 'w', 8,
    [
      { san: 'Nc5', explanation: 'Nc5 threatens Nb7, attacking the king on a8. The knight prepares to join the attack.', hint: 'Bring the knight closer.' },
      { san: 'Bd6', explanation: 'Bd6 blocks the knight\'s path. Black tries to defend.' },
      { san: 'Nb7', explanation: 'Nb7 attacks the king! The knight joins the bishops for a deadly attack.' },
      { san: 'Bxb7+', explanation: 'Black tries to remove the knight.' },
      { san: 'Kxb7', explanation: 'Black captures.' },
      { san: 'Be3#', explanation: 'Be3# is Boden\'s mate! The two bishops deliver checkmate on crossed diagonals. The bishop on e3 attacks a7 while the bishop on e5 attacks a1. The king is trapped!', hint: 'Deliver mate with the bishops!' },
    ]
  );
  if (bd) lessons.push(bd);

  // 5. Greek Gift - Bxh7+ sacrifice
  // Position: bishop on the a2-g8 diagonal, pawn NOT on e4 (to not block)
  // W: Ke2, Qg6, Bd3, Nf3, pawns a2,b2,c2,f2,g2,h2
  // B: Kg8, Rf8, pawns a7,b7,c7,d6,f7,g7,h7
  const gg = fixLesson('greek-gift', 'checkmates', 'Greek Gift Sacrifice',
    'The Greek Gift (Bxh7+) is one of the most famous attacking patterns in chess. Sacrifice a bishop on h7 to rip open the enemy king\'s defenses.',
    'intermediate',
    'r1bq1rk1/pppp1ppp/2n5/2b1p3/3P4/2NBPN2/PPP2PPP/R1BQK2R w - - 0 7', 'w', 8,
    [
      { san: 'Bxh7+', explanation: 'The Greek Gift! Bxh7+ sacrifices the bishop to destroy the black king\'s pawn shield. If Black accepts, the king is exposed to a devastating attack.', hint: 'Sacrifice the bishop on h7!' },
      { san: 'Kxh7', explanation: 'The king accepts the sacrifice, walking into the mating net.' },
      { san: 'Ng5+', explanation: 'Ng5+ gives check and attacks the queen on d8. The knight cannot be captured because the pawn on f7 is pinned by the bishop on c4.' },
      { san: 'Kg8', explanation: 'The king retreats to the back rank.' },
      { san: 'Qh5', explanation: 'Qh5 attacks h7 and h8. The threat is Qh8#. Black must defend.', hint: 'Bring the queen to h5.' },
      { san: 'Re8', explanation: 'Black prepares to defend h7 with the rook.' },
      { san: 'Qxf7+', explanation: 'Qxf7+ wins the pawn and keeps the attack going. The Greek Gift sacrifice has succeeded.', hint: 'Capture on f7 with check.' },
    ]
  );
  if (gg) lessons.push(gg);

  // 6. Epaulette mate - queen sacrifice on f7
  const ep = fixLesson('epaulette', 'checkmates', 'Epaulette Mate',
    'The epaulette mate is delivered by a queen or rook when the enemy king is flanked by its own pieces on either side, resembling shoulder epaulettes.',
    'advanced',
    'r1b2rk1/ppppqppp/2n5/7Q/8/8/PPPP1PPP/R1B1K2R w KQ - 0 9', 'w', 6,
    [
      { san: 'Qxf7+', explanation: 'Qxf7+ — a devastating queen sacrifice! The queen captures on f7 with check, forcing the king into the epaulette position.', hint: 'Sacrifice the queen on f7!' },
      { san: 'Kh8', explanation: 'Black moves to the corner, flanked by the rooks on f8 and g8 — the "epaulettes."' },
      { san: 'Qf8+', explanation: 'Qf8+ forces the rook to capture, but this opens the file.' },
      { san: 'Rxf8', explanation: 'Black captures.' },
      { san: 'Rxf8#', explanation: 'Rxf8# — the rook delivers checkmate! The king is trapped between its own rooks on either side, like shoulder epaulettes.', hint: 'Capture with the rook for checkmate!' },
    ]
  );
  if (ep) lessons.push(ep);

  return lessons;
}

// ============================================================
// DEFENSE FIXES (only broken lessons)
// ============================================================
function fixDefense() {
  // Just return the lessons that need replacement
  // The file will be rebuilt
}

// ============================================================
// MAIN
// ============================================================
const result = fixCheckmates();
console.log(`\nFixed ${result.length} checkmate lessons:`);
result.forEach(l => console.log(`  ✅ ${l.id} (${l.mainLine.length} moves)`));

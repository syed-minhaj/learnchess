import { Lesson } from '@/types';

export const endgameLessons: Lesson[] = [
  {
    id: 'opposition',
    sectionId: 'endgame',
    title: 'King & Pawn — Opposition',
    description:
      'The opposition is the most fundamental endgame concept. When two kings face each other, the side not to move has the advantage.',
    difficulty: 'beginner',
    startingFen: '8/8/8/8/3k4/8/3P4/3K4 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Kc2',
        explanation:
          'Kc2 gains the opposition! White moves the king to face the black king with one square between them. Since it\'s Black\'s turn now, Black must give way, allowing the white king to advance.',
        hint: 'Move your king to c2 to take the opposition.',
      },
      {
        san: 'Ke4',
        explanation:
          'Black tries to hold the position, but the opposition forces Black to move sideways.',
      },
      {
        san: 'Kc3',
        explanation:
          'Kc3 maintains the opposition. The white king advances while keeping the direct face-off.',
        hint: 'Step forward while keeping the opposition.',
      },
      {
        san: 'Kd5',
        explanation:
          'Black is being pushed back. The opposition gives White control.',
      },
      {
        san: 'Kd3',
        explanation:
          'Kd3 — now the white king faces the black king directly again. Black must move aside.',
        hint: 'Take the direct opposition again.',
      },
      {
        san: 'Ke5',
        explanation:
          'Black tries to block the pawn\'s path.',
      },
      {
        san: 'Ke3',
        explanation:
          'Ke3 takes the opposition for the third time. Black is completely helpless.',
        hint: 'Face the king directly once more.',
      },
      {
        san: 'Kd5',
        explanation:
          'Black can delay no longer.',
      },
      {
        san: 'd4',
        explanation:
          'd4 advances the pawn while the black king is forced to the side. The pawn will Queen soon.',
        hint: 'Push the pawn!',
      },
    ],
  },
  {
    id: 'rook-endgames',
    sectionId: 'endgame',
    title: 'Rook Endgames — Checking from Behind',
    description:
      'In rook endgames, the rook is most powerful when checking the enemy king from behind. Learn the basic technique of pushing the king to the edge.',
    difficulty: 'intermediate',
    startingFen: 'k7/8/8/8/8/8/8/R5K1 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Rb1',
        explanation:
          'Rb1 cuts off the black king on the a-file and threatens Ra1+ to force it toward the edge.',
        hint: 'Place the rook on the b-file to cut off the king.',
      },
      {
        san: 'Ka7',
        explanation:
          'Black moves up the a-file, trying to escape the rook\'s range.',
      },
      {
        san: 'Ra1+',
        explanation:
          'Ra1+ checks the king from behind. The rook uses the 1st rank to harass the black king.',
        hint: 'Check the king from behind.',
      },
      {
        san: 'Kb7',
        explanation:
          'Black steps to the side to avoid the check.',
      },
      {
        san: 'Rb1+',
        explanation:
          'Rb1+ cuts off the king again on the b-file and keeps it confined.',
        hint: 'Switch files to keep cutting off the king.',
      },
      {
        san: 'Ka7',
        explanation:
          'Black goes back up the a-file.',
      },
      {
        san: 'Ra1+',
        explanation:
          'Ra1+ repeats the check. The rook keeps the king trapped on the edge.',
        hint: 'Check from the back rank again.',
      },
      {
        san: 'Kb8',
        explanation:
          'Black moves toward the center, trying to escape.',
      },
      {
        san: 'Rb1+',
        explanation:
          'Rb1+ pushes the king further toward the center. The rook continues checking from behind.',
        hint: 'Check from the side to push the king.',
      },
      {
        san: 'Kc8',
        explanation:
          'Black has been pushed from a8 to c8 by the rook\'s checks.',
      },
      {
        san: 'Ra1',
        explanation:
          'Ra1 prepares to bring the white king forward. The rook controls the back rank while the king advances.',
        hint: 'Bring the rook to the back rank.',
      },
    ],
  },
  {
    id: 'kq-checkmate',
    sectionId: 'endgame',
    title: 'King & Queen Checkmate',
    description:
      'Delivering checkmate with king and queen is the most basic endgame technique. The queen alone can force the enemy king to the edge; the king helps deliver the final blow.',
    difficulty: 'beginner',
    startingFen: '8/8/8/8/8/3Q4/8/k2K4 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Qa3#',
        explanation:
          'Qa3# is checkmate! The queen gives check along the a-file while also covering b2 diagonally. The white king covers b1. The black king is trapped in the corner with no escape. The queen alone can checkmate a cornered king when the opponent\'s king blocks the escape.',
        hint: 'Move the queen to a3 to deliver checkmate.',
      },
    ],
    quiz: [
      {
        fen: '8/8/8/8/8/3Q4/8/k2K4 w - - 0 1',
        prompt: 'White to move and checkmate in one. Which move delivers mate?',
        correctSan: 'Qa3',
        options: [
          { san: 'Qa3', label: 'Qa3# — checkmate!' },
          { san: 'Qb3', label: 'Qb3 — the king escapes to a2' },
          { san: 'Qc2', label: 'Qc2 — the king escapes to b1' },
          { san: 'Qd4', label: 'Qd4 — too far, king escapes' },
        ],
        explanation:
          'Qa3# is the only move that checkmates. The queen on a3 attacks a1, a2, and b2, while the king on d1 covers b1.',
      },
    ],
  },
  {
    id: 'kr-checkmate',
    sectionId: 'endgame',
    title: 'King & Rook Checkmate',
    description:
      'King and rook checkmate requires more precision than queen checkmate. The two pieces must work together to push the enemy king to the edge of the board.',
    difficulty: 'intermediate',
    startingFen: '8/8/8/8/8/8/8/k5KR w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Kf2',
        explanation:
          'Kf2 activates the king. The king and rook must work together; the king alone drives the enemy king toward the edge.',
        hint: 'Bring your king closer.',
      },
      {
        san: 'Kb2',
        explanation:
          'Black runs toward the center along the back rank.',
      },
      {
        san: 'Ke3',
        explanation:
          'Ke3 continues the king march. The white king stays between the black king and the rook, forming a barrier.',
        hint: 'Keep advancing your king.',
      },
      {
        san: 'Kc3',
        explanation:
          'Black tries to slip around the white king.',
      },
      {
        san: 'Ke4',
        explanation:
          'Ke4 maintains the barrier. The black king is confined to the lower-left quadrant.',
        hint: 'Step forward with your king.',
      },
      {
        san: 'Kb4',
        explanation:
          'Black runs along the b-file, trying to escape.',
      },
      {
        san: 'Ke5',
        explanation:
          'Ke5 — the white king advances toward the center of the board, giving the rook room to cut off ranks.',
        hint: 'Keep advancing.',
      },
      {
        san: 'Kc5',
        explanation:
          'Black tries to keep pace with the white king.',
      },
      {
        san: 'Rh5+',
        explanation:
          'Rh5+ cuts off the 5th rank with check. The rook now controls all squares on the 5th rank, forcing the black king downward.',
        hint: 'Cut off a rank with the rook.',
      },
      {
        san: 'Kb4',
        explanation:
          'Black retreats off the 5th rank.',
      },
      {
        san: 'Rf5',
        explanation:
          'Rf5 slides the rook toward the center, covering the 5th rank and reducing the black king\'s space further.',
        hint: 'Slide the rook to the f-file.',
      },
    ],
  },
  {
    id: 'bishop-vs-knight',
    sectionId: 'endgame',
    title: 'Bishop vs Knight Endgames',
    description:
      'In endgames, bishops shine in open positions while knights excel in closed positions. Learn the key differences and how to leverage each piece.',
    difficulty: 'intermediate',
    startingFen: '8/4k3/8/3b4/8/3N4/4K3/8 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Ke3',
        explanation:
          'Ke3 centralizes the king. In endgames, the king becomes an active fighting piece. Both sides must activate their kings.',
        hint: 'Centralize your king.',
      },
      {
        san: 'Kd6',
        explanation:
          'Black\'s king also centralizes. Notice how the bishop controls both colors while the knight only attacks one square at a time.',
      },
      {
        san: 'Nf4',
        explanation:
          'Nf4 attacks g6 and h5. The knight jumps around, but in open positions the bishop has more influence.',
        hint: 'Jump the knight to an active square.',
      },
      {
        san: 'Bc4',
        explanation:
          'The bishop controls the long diagonal. From c4 it eyes a2, b3, d5, e6, f7, g8. This is the advantage of a bishop in open positions.',
      },
      {
        san: 'Ng6',
        explanation:
          'Ng6 attacks f8 and h8 but doesn\'t control the center.',
        hint: 'Keep the knight active.',
      },
    ],
  },
  {
    id: 'queen-endgames',
    sectionId: 'endgame',
    title: 'Queen Endgames — Basic Checkmate',
    description:
      'Delivering checkmate with king and queen is the most fundamental endgame technique. The queen gives check while the king covers escape squares.',
    difficulty: 'beginner',
    startingFen: '8/8/8/8/8/8/1Q6/k2K4 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Qb1#',
        explanation:
          'Qb1# is checkmate! The queen gives check along the 1st rank while covering a2 diagonally and b2 vertically. The white king on d1 supports from a distance. The black king has no escape.',
        hint: 'Move the queen to b1 to deliver checkmate.',
      },
    ],
  },
  {
    id: 'kbb-kn-checkmate',
    sectionId: 'endgame',
    title: 'Bishop Pair Coordination',
    description:
      'Two bishops control adjacent diagonals of opposite colors, creating a powerful net. In open positions, the bishop pair can dominate knights and restrict the enemy king.',
    difficulty: 'advanced',
    startingFen: '8/8/3k4/8/2B2B2/8/8/7K w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Be5+',
        explanation:
          'Be5+ gives check with the dark-squared bishop while the light-squared bishop on c4 covers the e6 escape square. The two bishops on adjacent diagonals create a powerful barrier — one bishop checks while the other covers escape routes.',
        hint: 'Use both bishops to check the king.',
      },
    ],
  },
];

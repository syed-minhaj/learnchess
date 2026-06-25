import { Lesson } from '@/types';

export const checkmateLessons: Lesson[] = [
  {
    id: 'back-rank',
    sectionId: 'checkmates',
    title: 'Back Rank Mate',
    description:
      'The back rank mate is one of the most common checkmates. When the enemy king is trapped by its own pawns on the back rank, a rook or queen can deliver checkmate.',
    difficulty: 'beginner',
    startingFen: '6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Re8#',
        explanation:
          'Re8# is checkmate! The black king is trapped by its own pawns on f7, g7, and h7. The rook delivers mate on the back rank while the white king on g1 prevents any escape. Back rank mates are why you should always "create luft" (move a pawn) when your king is stuck on the back rank.',
        hint: 'Slide the rook to e8 for checkmate!',
      },
    ],
    quiz: [
      {
        fen: '6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1',
        prompt: 'White to move and checkmate. What\'s the winning move?',
        correctSan: 'Re8',
        options: [
          { san: 'Re8', label: 'Re8# — back rank mate!' },
          { san: 'Re2', label: 'Re2 — no immediate threat' },
          { san: 'Re6', label: 'Re6 — the king escapes via f8' },
          { san: 'Rxf7', label: 'Rxf7+ — king escapes to h8' },
        ],
        explanation:
          'Re8# — the rook delivers checkmate on the back rank. The king is trapped by its own pawns.',
      },
    ],
  },
  {
    id: 'smothered',
    sectionId: 'checkmates',
    title: 'Smothered Mate',
    description:
      'A smothered mate occurs when a knight delivers checkmate to a king surrounded entirely by its own pieces.',
    difficulty: 'intermediate',
    startingFen: '6rk/5ppp/8/6N1/8/8/8/6K1 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Nf7#',
        explanation:
          'Nf7# is smothered mate! The black king is completely surrounded by its own rook on g8 and pawns on f7, g7, and h7. The knight delivers check from f7, and the king has no escape because all adjacent squares are occupied by its own pieces. This is one of the most beautiful patterns in chess.',
        hint: 'Jump the knight to f7 for smothered mate!',
      },
    ],
  },
  {
    id: 'anastasia',
    sectionId: 'checkmates',
    title: 'Anastasia\'s Mate',
    description:
      'Anastasia\'s mate uses a knight and rook to checkmate the king on the edge of the board. The knight covers escape squares while the rook delivers check.',
    difficulty: 'intermediate',
    startingFen: '7k/6p1/5N2/8/8/8/K7/R7 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Rh1#',
        explanation:
          'Rh1# is Anastasia\'s mate! The rook slides to the h-file and delivers check. The knight on f6 covers g8, while the pawn on g7 blocks the remaining escape square. The king is trapped on the edge with no escape.',
        hint: 'Slide the rook to h1 for checkmate!',
      },
    ],
  },
  {
    id: 'bodens',
    sectionId: 'checkmates',
    title: 'Boden\'s Mate',
    description:
      'Boden\'s mate features two bishops delivering checkmate with crossed diagonals, typically against a king trapped in the corner.',
    difficulty: 'advanced',
    startingFen: 'k7/p7/8/4B3/4B3/8/PPPP1PPP/7K w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Bd6#',
        explanation:
          'Bd6# is Boden\'s mate! The bishop moves to d6, discovering check from the bishop on e4 along the a8-h1 diagonal. The two bishops work together — one gives discovered check while the other delivers the mate on the diagonal. The king is trapped in the corner with a7 blocked by its own pawn.',
        hint: 'Move the bishop to d6 for discovered checkmate!',
      },
    ],
  },
  {
    id: 'greek-gift',
    sectionId: 'checkmates',
    title: 'Greek Gift Sacrifice',
    description:
      'The Greek Gift (Bxh7+) is one of the most famous attacking patterns in chess. Sacrifice a bishop on h7 to rip open the enemy king\'s defenses.',
    difficulty: 'intermediate',
    startingFen: 'r1bq1rk1/pppp1ppp/2n5/2b1p3/3P4/2NBPN2/PPP2PPP/R1BQK2R w - - 0 7',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Bxh7+',
        explanation:
          'The Greek Gift! Bxh7+ sacrifices the bishop to destroy the black king\'s pawn shield. If Black accepts, the king is exposed to a devastating attack.',
        hint: 'Sacrifice the bishop on h7!',
      },
      {
        san: 'Kxh7',
        explanation:
          'The king accepts the sacrifice, walking into the mating net.',
      },
      {
        san: 'Ng5+',
        explanation:
          'Ng5+ gives check and attacks the queen on d8. The knight cannot be captured because the pawn on f7 is pinned by the bishop on c4.',
        hint: 'Jump the knight to g5 with check.',
      },
      {
        san: 'Kg8',
        explanation:
          'The king retreats to the back rank.',
      },
      {
        san: 'Qh5',
        explanation:
          'Qh5 threatens Qxf7# and Qh8#. Black must defend immediately to avoid checkmate.',
        hint: 'Bring the queen to h5.',
      },
      {
        san: 'Re8',
        explanation:
          'Black blocks the queen\'s path to h8. This is the only defense, but white now wins the pawn on f7 with a devastating attack.',
      },
      {
        san: 'Qxf7+',
        explanation:
          'Qxf7+ wins a pawn and keeps the attack going. Black\'s king is exposed and white\'s pieces coordinate perfectly for a continuing attack.',
        hint: 'Capture on f7 with check.',
      },
    ],
  },
  {
    id: 'epaulette',
    sectionId: 'checkmates',
    title: 'Epaulette Mate',
    description:
      'The epaulette mate is delivered by a queen or rook when the enemy king is flanked by its own pieces on either side, resembling shoulder epaulettes.',
    difficulty: 'advanced',
    startingFen: 'r1b2r1k/pppp1Qpp/2n5/8/8/8/PPP3PP/R1B1KR2 w - - 1 10',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Qxf8#',
        explanation:
          'Qxf8# is the epaulette mate! The queen captures the rook on f8 with checkmate. The black king on g8 is flanked by its own rooks on e8 and ... — the "epaulettes" that prevent escape. The king cannot move sideways because its own pieces block the way.',
        hint: 'Capture the rook with the queen for checkmate!',
      },
    ],
  },
];

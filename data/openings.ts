import { Lesson } from '@/types';

export const openingLessons: Lesson[] = [
  {
    id: 'open-sicilian',
    sectionId: 'openings',
    title: 'Open Sicilian',
    description:
      'The Open Sicilian (1.e4 c5 2.Nf3) leads to the sharpest and most complex positions in chess. Learn the key ideas and typical plans for both sides.',
    difficulty: 'intermediate',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 15,
    mainLine: [
      {
        san: 'e4',
        explanation:
          '1.e4 is the most aggressive opening move. It controls the center and opens lines for the bishop and queen.',
        hint: 'Attack the center with your pawn.',
      },
      {
        san: 'c5',
        explanation:
          'The Sicilian Defense. Black immediately fights for the center from the flank, avoiding symmetrical positions.',
      },
      {
        san: 'Nf3',
        explanation:
          'Nf3 develops the knight to a natural square, supporting the d4 break and controlling key central squares.',
        hint: 'Develop your knight and prepare d4.',
      },
      {
        san: 'd6',
        explanation:
          'd6 prepares e5 or supports a future g6 setup. Black keeps options open while solidifying the center.',
      },
      {
        san: 'd4',
        explanation:
          'd4 strikes at the heart of the Sicilian. White opens the center while Black\'s king is still uncastled.',
        hint: 'Open the center with d4.',
      },
      {
        san: 'cxd4',
        explanation:
          'Black must capture or White will have an overwhelming pawn center. The exchange opens the c-file for Black\'s rook.',
      },
      {
        san: 'Nxd4',
        explanation:
          'Recapturing with the knight centralizes it on d4, where it eyes key squares like b5, c6, e6, and f5.',
        hint: 'Recapture with the knight.',
      },
      {
        san: 'Nf6',
        explanation:
          'Nf6 develops the knight with a tempo, attacking the e4 pawn and forcing White to defend it.',
      },
      {
        san: 'Nc3',
        explanation:
          'Nc3 develops the other knight, protecting e4 and completing a classical development setup.',
        hint: 'Develop your other knight to protect e4.',
      },
      {
        san: 'a6',
        explanation:
          'a6 — the Najdorf Variation. Black prevents Nb5 and prepares an aggressive setup with e5 or b5.',
      },
    ],
  },
  {
    id: 'italian-game',
    sectionId: 'openings',
    title: 'Italian Game',
    description:
      'The Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4) is one of the oldest openings. It focuses on rapid development and attacking the weak f7 square.',
    difficulty: 'beginner',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'e4',
        explanation:
          '1.e4 opens lines for the queen and bishop while claiming central space.',
        hint: 'Start with e4.',
      },
      {
        san: 'e5',
        explanation:
          'Black mirrors with e5, claiming their share of the center and preventing d4 from being played for free.',
      },
      {
        san: 'Nf3',
        explanation:
          'Nf3 develops a knight and attacks the e5 pawn. This is the most natural developing move.',
        hint: 'Develop your knight to f3.',
      },
      {
        san: 'Nc6',
        explanation:
          'Nc6 defends e5 and develops a knight to an active square.',
      },
      {
        san: 'Bc4',
        explanation:
          'Bc4 — the Italian Game. The bishop targets f7, the weakest square in Black\'s camp, and prepares castling.',
        hint: 'Develop your bishop to c4, targeting f7.',
      },
      {
        san: 'Nf6',
        explanation:
          'Nf6 develops with a tempo, attacking the e4 pawn. Black must be careful not to fall for the fried liver attack.',
      },
    ],
  },
  {
    id: 'ruy-lopez',
    sectionId: 'openings',
    title: 'Ruy Lopez (Spanish Game)',
    description:
      'The Ruy Lopez (1.e4 e5 2.Nf3 Nc6 3.Bb5) is a deeply strategic opening where White pressures Black\'s knight defending e5.',
    difficulty: 'intermediate',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 12,
    mainLine: [
      {
        san: 'e4',
        explanation:
          '1.e4 controls the center and opens lines. The Ruy Lopez is one of the most tested openings in chess history.',
        hint: 'Begin with e4.',
      },
      {
        san: 'e5',
        explanation:
          'Black establishes their own pawn in the center.',
      },
      {
        san: 'Nf3',
        explanation:
          'Developing the knight and attacking e5.',
        hint: 'Develop to f3.',
      },
      {
        san: 'Nc6',
        explanation:
          'Defending the e5 pawn with the knight.',
      },
      {
        san: 'Bb5',
        explanation:
          'The Ruy Lopez. The bishop pins the knight against the king, indirectly increasing pressure on e5. This leads to rich strategic play.',
        hint: 'Pin the knight with Bb5.',
      },
      {
        san: 'a6',
        explanation:
          'a6 immediately questions the bishop\'s intentions. Black asks whether White will exchange or retreat.',
      },
      {
        san: 'Ba4',
        explanation:
          'Ba4 — the main line. White maintains the pin while avoiding the exchange, keeping pressure on Black\'s position.',
        hint: 'Retreat the bishop to a4.',
      },
      {
        san: 'Nf6',
        explanation:
          'Nf6 develops and attacks e4, forcing White to decide how to defend it.',
      },
    ],
  },
  {
    id: 'french-defense',
    sectionId: 'openings',
    title: 'French Defense',
    description:
      'The French Defense (1.e4 e6) leads to solid but complex positions. Black fights for control of the center with pawn breaks.',
    difficulty: 'beginner',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'e4',
        explanation:
          '1.e4 starts the game actively. Against the French, White will build a big center.',
        hint: 'Play e4.',
      },
      {
        san: 'e6',
        explanation:
          'The French Defense. Black prepares d5 while solidifying the dark squares. The downside is that the c8 bishop is blocked.',
      },
      {
        san: 'd4',
        explanation:
          'd4 establishes a classical pawn center. White dominates central space.',
        hint: 'Take the center with d4.',
      },
      {
        san: 'd5',
        explanation:
          'd5 challenges White\'s center immediately. This is the defining move of the French Defense.',
      },
      {
        san: 'e5',
        explanation:
          'e5 — the Advance Variation. White gains space and locks the center, planning to attack on the kingside.',
        hint: 'Push e5 to gain space.',
      },
      {
        san: 'c5',
        explanation:
          'c5 is Black\'s key counterplay. Black attacks White\'s pawn chain at its base, preparing to open lines for the bishop.',
      },
    ],
  },
  {
    id: 'queens-gambit',
    sectionId: 'openings',
    title: "Queen's Gambit",
    description:
      "The Queen's Gambit (1.d4 d5 2.c4) is one of the most reliable openings. White offers a pawn to undermine Black's center and gain controlling squares.",
    difficulty: 'beginner',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'd4',
        explanation:
          '1.d4 is a solid opening move, controlling the center and beginning a positional game.',
        hint: 'Start with d4.',
      },
      {
        san: 'd5',
        explanation:
          'Black occupies the center with d5.',
      },
      {
        san: 'c4',
        explanation:
          'The Queen\'s Gambit. White offers a pawn to undermine Black\'s center and gain control of the dark squares.',
        hint: 'Play c4 to challenge Black\'s center.',
      },
      {
        san: 'e6',
        explanation:
          'The Queen\'s Gambit Declined. Black solidifies d5 with e6, declining the gambit. This leads to rich positional play.',
      },
      {
        san: 'Nc3',
        explanation:
          'Nc3 develops a knight and puts more pressure on d5.',
        hint: 'Develop the knight to c3.',
      },
      {
        san: 'Nf6',
        explanation:
          'Nf6 develops and defends d5 while preparing ...Be7 and castling.',
      },
      {
        san: 'Bg5',
        explanation:
          'Bg5 pins the knight on f6 against the queen, a classic idea in the Queen\'s Gambit Declined. This pressures Black\'s defense of d5.',
        hint: 'Pin the knight with Bg5.',
      },
    ],
  },
];

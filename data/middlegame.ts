import { Lesson } from '@/types';

export const middlegameLessons: Lesson[] = [
  {
    id: 'center-control',
    sectionId: 'middlegame',
    title: 'Center Control',
    description:
      'Control of the center is the most important strategic concept in chess. Pieces in the center have maximum mobility and influence both sides of the board.',
    difficulty: 'beginner',
    startingFen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
    userColor: 'b',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'e5',
        explanation:
          'Black stakes a claim in the center. The pawn on e5 fights for control of d4 and f4 while opening lines for the bishop and queen.',
        hint: 'Fight for the center with e5.',
      },
      {
        san: 'Nf3',
        explanation:
          'White develops a knight and attacks e5. This is a natural developing move.',
      },
      {
        san: 'Nc6',
        explanation:
          'Nc6 defends e5 and develops a knight toward the center. A knight on c6 eyes the key central squares d4 and e5.',
        hint: 'Develop your knight to c6.',
      },
      {
        san: 'Bb5',
        explanation:
          'The Ruy Lopez. White pressures the knight defending e5.',
      },
      {
        san: 'Nf6',
        explanation:
          'Nf6 develops the other knight and attacks e4. Black\'s knights control key central squares.',
        hint: 'Develop your second knight.',
      },
      {
        san: '0-0',
        explanation:
          'White castles, a solid developing move.',
      },
      {
        san: 'Bc5',
        explanation:
          'Bc5 develops the bishop to an active diagonal. Both sides have strong central control.',
        hint: 'Develop your bishop to c5.',
      },
    ],
  },
  {
    id: 'piece-activity',
    sectionId: 'middlegame',
    title: 'Piece Activity',
    description:
      'Active pieces are worth more than passive ones. A piece sitting on its starting square contributes nothing — always look for ways to improve your pieces.',
    difficulty: 'beginner',
    startingFen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 5 5',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Be3',
        explanation:
          'Be3 develops the bishop to an active square and prepares to trade off Black\'s active bishop on c5. Active pieces should be traded when possible.',
        hint: 'Develop your bishop actively.',
      },
      {
        san: 'Bxe3',
        explanation:
          'Black trades bishops.',
      },
      {
        san: 'fxe3',
        explanation:
          'fxe3 opens the f-file for the rook. The rook now has an active file to operate on.',
        hint: 'Recapture and activate your rook.',
      },
      {
        san: 'd6',
        explanation:
          'Black solidifies the center.',
      },
      {
        san: '0-0',
        explanation:
          '0-0 gets the king to safety and brings the rook to the f-file. Now the rook is active.',
        hint: 'Castle to activate the rook.',
      },
      {
        san: '0-0',
        explanation:
          'Black also castles.',
      },
      {
        san: 'Qd2',
        explanation:
          'Qd2 centralizes the queen and prepares to double rooks on the f-file.',
        hint: 'Centralize your queen.',
      },
    ],
  },
  {
    id: 'king-safety',
    sectionId: 'middlegame',
    title: 'King Safety',
    description:
      'King safety is paramount. A king caught in the center can be attacked from all sides. Castle early and don\'t weaken the pawns around your king.',
    difficulty: 'beginner',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'e4',
        explanation:
          '1.e4 opens lines and stakes a claim in the center. Before thinking about attacks, make sure your king will be safe.',
        hint: 'Open with e4.',
      },
      {
        san: 'e5',
        explanation:
          'Black mirrors.',
      },
      {
        san: 'Nf3',
        explanation:
          'Nf3 develops a knight. Development comes before the attack.',
        hint: 'Develop your knight.',
      },
      {
        san: 'Nc6',
        explanation:
          'Black develops.',
      },
      {
        san: 'Bc4',
        explanation:
          'Bc4 develops and eyes f7. But the real point is to prepare castling.',
        hint: 'Develop your bishop.',
      },
      {
        san: 'Nf6',
        explanation:
          'Black develops with a threat to e4.',
      },
      {
        san: 'Nc3',
        explanation:
          'Nc3 defends e4 and develops the last minor piece. Now White is ready to castle.',
        hint: 'Develop and prepare to castle.',
      },
      {
        san: 'Bc5',
        explanation:
          'Black develops the bishop.',
      },
      {
        san: '0-0',
        explanation:
          '0-0 gets the king to safety behind a pawn wall. A castled king is much safer than a king in the center. Always castle within the first 10 moves!',
        hint: 'Castle to safety!',
      },
    ],
  },
  {
    id: 'pawn-structure-basics',
    sectionId: 'middlegame',
    title: 'Pawn Structure Basics',
    description:
      'Pawns are the soul of chess. Your pawn structure determines your strengths and weaknesses — and where you should attack.',
    difficulty: 'beginner',
    startingFen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
    userColor: 'b',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'e6',
        explanation:
          'The French Defense. Black solidifies the kingside and prepares d5. This creates a solid pawn chain but locks in the c8 bishop.',
        hint: 'Play e6, preparing d5.',
      },
      {
        san: 'd4',
        explanation:
          'White builds a big center.',
      },
      {
        san: 'd5',
        explanation:
          'd5 challenges White\'s center. Black\'s pawns on e6 and d5 form a solid chain.',
        hint: 'Challenge the center with d5.',
      },
      {
        san: 'e5',
        explanation:
          'White pushes past, creating a space advantage.',
      },
      {
        san: 'c5',
        explanation:
          'c5 attacks the base of White\'s pawn chain. This is Black\'s key counterplay — attack the base of the chain!',
        hint: 'Counterattack in the center with c5.',
      },
      {
        san: 'c3',
        explanation:
          'White defends the d4 pawn.',
      },
      {
        san: 'Nc6',
        explanation:
          'Nc6 increases pressure on d4. Black\'s pawn structure (e6-d5-c5) is solid but the c8 bishop remains blocked.',
        hint: 'Develop and pressure d4.',
      },
    ],
  },
  {
    id: 'open-files',
    sectionId: 'middlegame',
    title: 'Open Files & Diagonals',
    description:
      'Rooks belong on open files. A rook that controls an open file can invade the enemy position and attack from the side.',
    difficulty: 'intermediate',
    startingFen: 'r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP4/PPP2PPP/R1BQ1RK1 w - - 0 7',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'a3',
        explanation:
          'a3 prevents ...Nb4 and prepares b4 to gain space on the queenside.',
        hint: 'Prepare queenside expansion.',
      },
      {
        san: 'a6',
        explanation:
          'Black prevents b4.',
      },
      {
        san: 'Be3',
        explanation:
          'Be3 trades off Black\'s active bishop and opens the f-file for the rook.',
        hint: 'Trade bishops to open a file.',
      },
      {
        san: 'Bxe3',
        explanation:
          'Black trades.',
      },
      {
        san: 'fxe3',
        explanation:
          'fxe3 opens the f-file. Now the rook on f1 has an open file. Rooks on open files are incredibly powerful.',
        hint: 'Recapture and open the f-file.',
      },
      {
        san: 'Nd4',
        explanation:
          'Black centralizes the knight, threatening to trade on c2.',
      },
      {
        san: 'Rxf6',
        explanation:
          'Rxf6 trades on the open f-file, removing Black\'s knight and clearing the path for the queen to join the attack.',
        hint: 'Trade on the open file.',
      },
    ],
  },
  {
    id: 'outposts',
    sectionId: 'middlegame',
    title: 'Outposts & Weak Squares',
    description:
      'An outpost is a square near the enemy position that cannot be attacked by enemy pawns. A knight on an outpost is often worth a rook.',
    difficulty: 'intermediate',
    startingFen: 'r1bq1rk1/pppp1ppp/2n5/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'd4',
        explanation:
          'd4 opens the center and creates a potential outpost on d5 or e5.',
        hint: 'Open the center.',
      },
      {
        san: 'exd4',
        explanation:
          'Black captures.',
      },
      {
        san: 'Nxd4',
        explanation:
          'Nxd4 centralizes the knight. From d4, the knight cannot be chased away by any black pawn — it\'s an outpost!',
        hint: 'Plant the knight on d4.',
      },
      {
        san: 'Nxd4',
        explanation:
          'Black trades knights, recognizing the power of the outpost.',
      },
      {
        san: 'Qxd4',
        explanation:
          'Qxd4 — the queen takes over the outpost. A centralized queen is also very powerful.',
        hint: 'Recapture with the queen.',
      },
      {
        san: 'd6',
        explanation:
          'Black tries to restrict the queen.',
      },
      {
        san: 'Qd3',
        explanation:
          'Qd3 maintains pressure while keeping the queen safe.',
        hint: 'Keep the queen active.',
      },
    ],
  },
  {
    id: 'prophylaxis',
    sectionId: 'middlegame',
    title: 'Prophylaxis',
    description:
      'Prophylaxis means preventing your opponent\'s plans before they start. Good players not only advance their own plans but also anticipate and block the opponent\'s ideas.',
    difficulty: 'advanced',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'e4',
        explanation:
          '1.e4 — the most active first move. White immediately prevents ...d5 from being played for free.',
        hint: 'Play e4.',
      },
      {
        san: 'c6',
        explanation:
          'The Caro-Kann. Black prepares d5 without blocking the bishop.',
      },
      {
        san: 'd4',
        explanation:
          'd4 establishes a strong center.',
        hint: 'Take the center.',
      },
      {
        san: 'd5',
        explanation:
          'd5 challenges White\'s center, as planned.',
      },
      {
        san: 'Nc3',
        explanation:
          'Nc3 develops and maintains the tension. White doesn\'t commit to exchanging yet.',
        hint: 'Develop and maintain tension.',
      },
      {
        san: 'dxe4',
        explanation:
          'Black captures, releasing the tension.',
      },
      {
        san: 'Nxe4',
        explanation:
          'Nxe4 recaptures. White\'s knight is active in the center.',
        hint: 'Recapture with the knight.',
      },
      {
        san: 'Bf5',
        explanation:
          'Black develops the bishop before playing ...e6. This is a prophylactic move — Black prevents White from playing g4 later.',
      },
      {
        san: 'g3',
        explanation:
          'g3 prevents ...Bg4 pinning the knight. Prophylaxis in action!',
        hint: 'Prevent Black from pinning your knight.',
      },
    ],
  },
];

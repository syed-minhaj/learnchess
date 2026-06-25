import { Lesson } from '@/types';

export const tacticLessons: Lesson[] = [
  {
    id: 'forks',
    sectionId: 'tactics',
    title: 'Forks',
    description:
      'A fork is a single piece attacking two or more enemy pieces at once. Knights are masters of the fork, but any piece can execute one.',
    difficulty: 'beginner',
    startingFen: 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4',
    userColor: 'b',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'Ne4',
        explanation:
          'The knight leaps to e4, forking the white bishop on c4 and the pawn on d3. Black attacks two undefended pieces at once — the hallmark of a fork!',
        hint: 'Move your knight to e4 to attack two pieces.',
      },
      {
        san: 'dxe4',
        explanation:
          'White captures the knight, but loses a tempo and the bishop pair. The fork succeeded in disorganizing White\'s position.',
      },
    ],
  },
  {
    id: 'pins',
    sectionId: 'tactics',
    title: 'Pins',
    description:
      'A pin occurs when a piece cannot move without exposing a more valuable piece behind it. Pins restrict the opponent and create tactical opportunities.',
    difficulty: 'beginner',
    startingFen: 'rnbqkb1r/pppp1ppp/4pn2/8/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 2 3',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'Bg5',
        explanation:
          'Bg5 pins the knight on f6 against the black queen! The knight cannot move without losing the queen. This is the classic pin in the Queen\'s Gambit Declined.',
        hint: 'Develop your bishop to g5 to pin the knight.',
      },
      {
        san: 'Be7',
        explanation:
          'Black breaks the pin by developing the bishop, preparing to castle. The pin was temporary but still gained time.',
      },
      {
        san: 'Bxf6',
        explanation:
          'Bxf6 trades bishop for knight, destroying Black\'s kingside pawn structure. Capturing pinned pieces is a key tactical theme.',
        hint: 'Capture the pinned knight to damage Black\'s structure.',
      },
      {
        san: 'Bxf6',
        explanation:
          'Black recaptures with the bishop. The pin was effective — White gained a structural advantage.',
      },
    ],
  },
  {
    id: 'skewers',
    sectionId: 'tactics',
    title: 'Skewers',
    description:
      'A skewer is like a pin in reverse — a valuable piece is attacked, and when it moves, a less valuable piece behind it is captured.',
    difficulty: 'intermediate',
    startingFen: 'r1bq1rk1/ppp2ppp/2np4/8/3P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 6',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Bxh7+',
        explanation:
          'Bxh7+ — a classic bishop sacrifice! The bishop captures on h7 with check, forcing the king to move and exposing the black king to further attack.',
        hint: 'Sacrifice the bishop on h7 to expose the king.',
      },
      {
        san: 'Kxh7',
        explanation:
          'The king must capture, leaving it exposed on the rim.',
      },
      {
        san: 'Ng5+',
        explanation:
          'Ng5+ forks the king and queen! After the king moves, the knight captures the queen on d8. The skewer was on the king\'s position relative to the queen.',
        hint: 'Play Ng5+ to fork king and queen.',
      },
    ],
  },
  {
    id: 'discovered-attacks',
    sectionId: 'tactics',
    title: 'Discovered Attacks',
    description:
      'A discovered attack happens when moving one piece uncovers an attack by another piece behind it. The moving piece often creates a second threat.',
    difficulty: 'intermediate',
    startingFen: 'r1bq1rk1/pppp1ppp/2n2n2/2b1P3/2B5/2NP4/PPP2PPP/R1BQ1RK1 w - - 0 6',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'exf6',
        explanation:
          'exf6 uncovers an attack from the bishop on c4 against f7! At the same time, the pawn captures the knight on f6. Black cannot defend both threats.',
        hint: 'Capture on f6 to uncover the bishop\'s attack.',
      },
      {
        san: 'gxf6',
        explanation:
          'Black recaptures with the pawn, but the damage is done.',
      },
      {
        san: 'Bxf7+',
        explanation:
          'Bxf7+ wins a pawn and forces the king to move, destroying Black\'s castling rights. The discovered attack was a success!',
        hint: 'Now capture on f7 with check.',
      },
    ],
  },
  {
    id: 'double-checks',
    sectionId: 'tactics',
    title: 'Double Checks',
    description:
      'A double check is a discovered attack where both the moving piece and the uncovered piece give check. The king MUST move — blocking or capturing is impossible.',
    difficulty: 'advanced',
    startingFen: '8/6k1/8/8/3N4/8/8/B6K w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Ne6+',
        explanation:
          'Ne6+ delivers check to the black king on g7. But look closer — the knight was blocking the bishop on a1\'s diagonal to g7! Moving the knight uncovers a discovered check from the bishop. Both pieces give check at once — DOUBLE CHECK! The king MUST move, it cannot be blocked or captured.',
        hint: 'Move the knight to e6 to create a double check.',
      },
      {
        san: 'Kf7',
        explanation:
          'Black\'s king flees to f7 — double check forces the king to move since neither piece can be captured nor the check blocked.',
      },
      {
        san: 'Nd8+',
        explanation:
          'Nd8+ keeps the pressure on. Double checks are devastating because they force the king to run, often into a mating net or loss of material.',
        hint: 'Keep attacking with Nd8+.',
      },
    ],
  },
];

import { Lesson } from '@/types';

export const defenseLessons: Lesson[] = [
  {
    id: 'threat-recognition',
    sectionId: 'defense',
    title: 'Threat Recognition',
    description:
      'The first step in defense is recognizing when your opponent has a threat. Train your eye to spot checks, captures, and attacks before they happen.',
    difficulty: 'beginner',
    startingFen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'd3',
        explanation:
          'd3 is safe and solid. White develops while recognizing that Bxf7+ would be premature (Nxe4!). Always check if your "attacking" move actually works before playing it.',
        hint: 'Develop solidly and watch for tactics.',
      },
      {
        san: 'Bc5',
        explanation:
          'Black develops the bishop to an active diagonal. Both sides are mobilizing.',
      },
      {
        san: '0-0',
        explanation:
          '0-0 gets the king to safety. Before castling, always check that all your opponent\'s threats are neutralized.',
        hint: 'Castle to safety.',
      },
    ],
  },
  {
    id: 'resourceful-defense',
    sectionId: 'defense',
    title: 'Resourceful Defense',
    description:
      'When under attack, look for defensive resources: counterattacks, desperado moves, and stalemate tricks can save apparently lost positions.',
    difficulty: 'intermediate',
    startingFen: 'r1b2rk1/pppp1ppp/2n2q2/2b1p3/2B1P1n1/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'h3',
        explanation:
          'h3 asks the knight what it wants. White deals with the immediate threat (Ng4 attacking f2) while staying flexible.',
        hint: 'Kick the knight away from your king.',
      },
      {
        san: 'Nh6',
        explanation:
          'The knight retreats but Black still has attacking chances.',
      },
      {
        san: 'Be3',
        explanation:
          'Be3 develops and prepares to trade off Black\'s active bishop. Trading pieces often relieves defensive pressure.',
        hint: 'Trade off active attackers.',
      },
      {
        san: 'Bxe3',
        explanation:
          'Black trades bishops but loses the initiative.',
      },
      {
        san: 'fxe3',
        explanation:
          'fxe3 opens the f-file for the rook, giving White counterplay. Defense is not just about surviving — look for counterattacks!',
        hint: 'Recapture and prepare counterplay.',
      },
    ],
  },
  {
    id: 'counterplay',
    sectionId: 'defense',
    title: 'Creating Counterplay',
    description:
      'The best defense is often a good counterattack. When your opponent attacks on one side, strike back on the other.',
    difficulty: 'intermediate',
    startingFen: 'r2q1rk1/ppp1bppp/2npp3/8/2BPP1n1/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'h3',
        explanation:
          'h3 deals with the immediate threat of Nxf2. Before counterattacking, make sure your opponent doesn\'t have a knockout blow.',
        hint: 'Defend against the immediate threat first.',
      },
      {
        san: 'Nh6',
        explanation:
          'The knight retreats, but Black still has pressure.',
      },
      {
        san: 'd5',
        explanation:
          'd5! Counterplay in the center! While Black was preparing a kingside attack, White strikes in the center. This is the classic defensive principle: counterattack in a different sector.',
        hint: 'Strike in the center to counter Black\'s flank attack.',
      },
      {
        san: 'exd5',
        explanation:
          'Black must respond to the central threat.',
      },
      {
        san: 'e5',
        explanation:
          'e5 opens lines and gives White the initiative. The tables have turned — White now has the attack!',
        hint: 'Push e5 to open lines.',
      },
    ],
  },
  {
    id: 'fortresses',
    sectionId: 'defense',
    title: 'Fortresses',
    description:
      'A fortress is a drawn position where the defending side cannot be forced to lose, even against a material advantage. Recognizing fortresses can save half a point.',
    difficulty: 'advanced',
    startingFen: '8/8/8/8/8/8/3B4/k1K5 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Kd1',
        explanation:
          'Kd1 brings the king to protect the bishop. In a fortress, the king and bishop work together to create an impenetrable barrier.',
        hint: 'Bring your king to defend.',
      },
      {
        san: 'Kb2',
        explanation:
          'Black tries to infiltrate.',
      },
      {
        san: 'Bc1+',
        explanation:
          'Bc1+ forces the king back. The bishop checks from a safe square while the king covers the escape.',
        hint: 'Use checks to keep the king away.',
      },
      {
        san: 'Ka2',
        explanation:
          'The king retreats.',
      },
      {
        san: 'Kc2',
        explanation:
          'Kc2 maintains the barrier. The king and bishop form a wall that Black cannot penetrate.',
        hint: 'Keep the wall intact.',
      },
      {
        san: 'Ka1',
        explanation:
          'Black is pushed back to the edge.',
      },
      {
        san: 'Kb3',
        explanation:
          'Kb3 completes the barrier. This fortress is solid — Black can never break through. The black king is confined to a1 and b1, shuffling forever.',
        hint: 'Seal the barrier.',
      },
    ],
  },
  {
    id: 'perpetual-check',
    sectionId: 'defense',
    title: 'Perpetual Check',
    description:
      'When you can\'t win, perpetual check can save the game. Force endless checks that the opponent cannot escape, and the game is drawn.',
    difficulty: 'intermediate',
    startingFen: '6k1/5ppp/5Q2/8/8/8/8/6K1 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 5,
    mainLine: [
      {
        san: 'Qg6+',
        explanation:
          'Qg6+ checks the king. The black king is exposed — the pawns on f7, g7, h7 block escape squares.',
        hint: 'Start checking.',
      },
      {
        san: 'Kf8',
        explanation:
          'The king runs toward the center.',
      },
      {
        san: 'Qf6+',
        explanation:
          'Qf6+ keeps the checks coming. The queen chases the king back and forth.',
        hint: 'Keep checking.',
      },
      {
        san: 'Kg8',
        explanation:
          'The king goes back.',
      },
      {
        san: 'Qg6+',
        explanation:
          'Qg6+ — and the king is forced back to f8. The checks will continue forever. Perpetual check! The queen chases the king between g8 and f8, and Black cannot escape.',
        hint: 'Continue the perpetual.',
      },
    ],
  },
  {
    id: 'zugzwang',
    sectionId: 'defense',
    title: 'Zugzwang',
    description:
      'Zugzwang is a situation where a player would prefer to pass because any move weakens their position. It\'s a powerful tool in endgames.',
    difficulty: 'advanced',
    startingFen: '8/8/8/8/8/8/8/k2K4 w - - 0 1',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Kc2',
        explanation:
          'Kc2 takes the opposition. The black king must move, and any move loses.',
        hint: 'Take the opposition.',
      },
      {
        san: 'Ka2',
        explanation:
          'Black is in zugzwang! Moving to a2 loses control of critical squares.',
      },
      {
        san: 'Kc1',
        explanation:
          'Kc1 maintains the zugzwang. Black must move again.',
        hint: 'Keep the pressure.',
      },
      {
        san: 'Ka3',
        explanation:
          'Each black move worsens the position.',
      },
      {
        san: 'Kb1',
        explanation:
          'Kb1 prepares to advance.',
        hint: 'Prepare to advance.',
      },
      {
        san: 'Kb3',
        explanation:
          'Black tries to block.',
      },
      {
        san: 'Ka1',
        explanation:
          'Ka1 — Black is forced to the edge.',
        hint: 'Force the king to the edge.',
      },
    ],
  },
];

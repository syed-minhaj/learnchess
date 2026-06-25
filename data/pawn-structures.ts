import { Lesson } from '@/types';

export const pawnStructureLessons: Lesson[] = [
  {
    id: 'iqp',
    sectionId: 'pawn-structures',
    title: 'The Isolated Queen\'s Pawn (IQP)',
    description:
      'An isolated d-pawn is a double-edged structure. It gives the side with the IQP space and attacking chances, but the pawn itself is a long-term weakness.',
    difficulty: 'intermediate',
    startingFen: 'r1bq1rk1/pppp1ppp/2n2n2/2bpp3/3PP3/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 6',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'exd5',
        explanation:
          'exd5 creates an isolated queen\'s pawn on d4. White gains space and piece activity, but the pawn on d4 has no neighbor pawns to defend it.',
        hint: 'Capture to create the IQP.',
      },
      {
        san: 'Nxd5',
        explanation:
          'Black recaptures with the knight, centralizing it.',
      },
      {
        san: 'Bc4',
        explanation:
          'Bc4 develops the bishop to an active square. The IQP gives White active piece play.',
        hint: 'Develop actively.',
      },
      {
        san: 'Nf6',
        explanation:
          'The knight retreats under pressure.',
      },
      {
        san: 'Re1',
        explanation:
          'Re1 controls the center and supports the IQP. White has active pieces but must be careful not to lose the pawn.',
        hint: 'Support the pawn with the rook.',
      },
      {
        san: 'Be7',
        explanation:
          'Black develops the bishop, reinforcing the kingside.',
      },
      {
        san: 'Bd3',
        explanation:
          'Bd3 — White\'s bishop retreats but keeps pressure. The IQP gives dynamic play as long as White stays active.',
        hint: 'Keep pressure while the pawn lives.',
      },
    ],
  },
  {
    id: 'hanging-pawns',
    sectionId: 'pawn-structures',
    title: 'Hanging Pawns',
    description:
      'Hanging pawns (two adjacent center pawns with no pawns beside them) are a complex structure. They control space and can advance, but are vulnerable to attack.',
    difficulty: 'intermediate',
    startingFen: 'r1bq1rk1/ppp2ppp/2np4/4p3/2PPn3/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'c5',
        explanation:
          'c5 advances one of the hanging pawns. They control important central squares d5 and e5, limiting Black\'s pieces.',
        hint: 'Advance the hanging pawn.',
      },
      {
        san: 'b6',
        explanation:
          'Black challenges the advanced pawn with ...b6, threatening to undermine the c5 pawn. Hanging pawns are vulnerable to this kind of lateral attack.',
      },
    ],
  },
  {
    id: 'doubled-pawns',
    sectionId: 'pawn-structures',
    title: 'Doubled Pawns',
    description:
      'Doubled pawns occur when two pawns of the same color are on the same file. They are usually weak because they cannot defend each other.',
    difficulty: 'intermediate',
    startingFen: 'r1bqkb1r/pppp1ppp/2n5/4n3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 4 4',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Nxe5',
        explanation:
          'Nxe5 wins a pawn. Black will recapture with the knight, doubling White\'s pawns but winning material.',
        hint: 'Capture the pawn on e5.',
      },
      {
        san: 'Nxe5',
        explanation:
          'Black recaptures with the knight.',
      },
      {
        san: 'Bxf7+',
        explanation:
          'Bxf7+ forks king and knight! This works because Black\'s king is in the center.',
        hint: 'Fork king and knight with Bxf7+!',
      },
      {
        san: 'Kxf7',
        explanation:
          'Black captures, accepting doubled pawns.',
      },
      {
        san: 'dxe5',
        explanation:
          'dxe5 — White has doubled pawns on e5 and e4, but Black traded a bishop for a knight. The doubled pawns are a weakness, but White is up material.',
        hint: 'Recapture, accepting doubled pawns.',
      },
      {
        san: 'd6',
        explanation:
          'Black attacks the doubled pawns. Doubled pawns are vulnerable because they can\'t defend each other.',
      },
      {
        san: 'Qd5',
        explanation:
          'Qd5 defends both pawns. White must work hard to protect the doubled pawns.',
        hint: 'Defend both pawns.',
      },
    ],
  },
  {
    id: 'pawn-chains',
    sectionId: 'pawn-structures',
    title: 'Pawn Chains',
    description:
      'A pawn chain is a diagonal line of pawns. The key rule: attack the BASE of the chain. The base is the pawn at the bottom, which supports all others.',
    difficulty: 'beginner',
    startingFen: 'rnbqkb1r/pppp1ppp/4pn2/8/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 3',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Bd3',
        explanation:
          'Bd3 develops the bishop. The pawns on d4 and e4 form a chain. d4 is the base — if it falls, the e4 pawn becomes weak.',
        hint: 'Develop the bishop.',
      },
      {
        san: 'c5',
        explanation:
          'c5 attacks the base of White\'s chain (d4). This is the correct way to attack a pawn chain — strike at the base!',
      },
      {
        san: 'c3',
        explanation:
          'c3 defends d4. White reinforces the base of the chain.',
        hint: 'Defend the base of your chain.',
      },
      {
        san: 'Nc6',
        explanation:
          'Black increases pressure on d4.',
      },
      {
        san: 'Ne2',
        explanation:
          'Ne2 develops and defends d4 again. The chain holds.',
        hint: 'Develop and defend the base.',
      },
      {
        san: 'Qc7',
        explanation:
          'Black continues pressuring d4. The battle of the chain is the central theme.',
      },
    ],
  },
  {
    id: 'carlsbad',
    sectionId: 'pawn-structures',
    title: 'The Carlsbad Structure',
    description:
      'The Carlsbad structure arises from the Queen\'s Gambit Exchange Variation. White has a pawn majority on the kingside and a minority attack on the queenside.',
    difficulty: 'advanced',
    startingFen: 'r1bq1rk1/ppp2ppp/2pp4/8/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'b4',
        explanation:
          'b4 starts the minority attack! White attacks Black\'s queenside pawns with fewer pawns. The goal is to create weaknesses in Black\'s structure.',
        hint: 'Start the minority attack with b4.',
      },
      {
        san: 'b6',
        explanation:
          'Black prepares to defend with ...Bb7.',
      },
      {
        san: 'a4',
        explanation:
          'a4 supports the b4 pawn and prepares a5.',
        hint: 'Support with a4.',
      },
      {
        san: 'a5',
        explanation:
          'Black tries to block the advance.',
      },
      {
        san: 'b5',
        explanation:
          'b5 pushes forward! White\'s minority attack creates an isolated pawn or other weaknesses in Black\'s structure.',
        hint: 'Push b5 to create weaknesses.',
      },
      {
        san: 'cxb5',
        explanation:
          'Black captures, but this creates an isolated pawn on c6.',
      },
      {
        san: 'axb5',
        explanation:
          'axb5 recaptures. Now Black has an isolated c-pawn, which White can attack.',
        hint: 'Recapture and target the isolated pawn.',
      },
      {
        san: 'Bb7',
        explanation:
          'Black develops.',
      },
    ],
  },
  {
    id: 'hedgehog',
    sectionId: 'pawn-structures',
    title: 'The Hedgehog System',
    description:
      'The Hedgehog is a flexible defense where Black places pawns on a6, b6, d6, and e6, forming a "spiny" structure. Black waits for White to overextend before counterattacking.',
    difficulty: 'advanced',
    startingFen: 'rn1qkb1r/1p3ppp/p2ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 7',
    userColor: 'w',
    estimatedMinutes: 8,
    mainLine: [
      {
        san: 'Be2',
        explanation:
          'Be2 develops the bishop. White has more space, but Black\'s position is solid. In the Hedgehog, Black waits in a compact formation.',
        hint: 'Develop patiently.',
      },
      {
        san: 'Be7',
        explanation:
          'Black develops the bishop behind the hedgehog.',
      },
      {
        san: '0-0',
        explanation:
          '0-0 — White castles.',
        hint: 'Castle.',
      },
      {
        san: '0-0',
        explanation:
          'Black castles too.',
      },
      {
        san: 'f4',
        explanation:
          'f4 gains space on the kingside. White must be careful not to overextend — the Hedgehog is designed to counterattack when White pushes too far.',
        hint: 'Gain space but watch for counterplay.',
      },
      {
        san: 'Qc7',
        explanation:
          'Black prepares ...b5, a typical Hedgehog counterattack.',
      },
      {
        san: 'a4',
        explanation:
          'a4 prevents ...b5. White controls the pace, but Black\'s position remains solid.',
        hint: 'Prevent Black\'s counterplay.',
      },
      {
        san: 'Rd8',
        explanation:
          'Black prepares ...c5, the central Hedgehog break.',
      },
    ],
  },
];

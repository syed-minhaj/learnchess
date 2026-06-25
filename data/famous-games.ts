import { Lesson } from '@/types';

export const famousGameLessons: Lesson[] = [
  {
    id: 'opera-game',
    sectionId: 'famous-games',
    title: 'The Opera Game — Morphy vs. Duke of Brunswick',
    description:
      'Paul Morphy\'s 1858 game is the most famous chess game ever played. It\'s a masterclass in development and never moving a piece twice in the opening.',
    difficulty: 'beginner',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'e4',
        explanation: '1.e4 — Morphy opens with the king\'s pawn, the most aggressive first move.',
        hint: 'Start with e4.',
      },
      {
        san: 'e5',
        explanation: 'Black mirrors.',
      },
      {
        san: 'Nf3',
        explanation: '2.Nf3 develops and attacks e5.',
        hint: 'Develop the knight.',
      },
      {
        san: 'd6',
        explanation: 'The Philidor Defense.',
      },
      {
        san: 'd4',
        explanation: '3.d4 opens the center.',
        hint: 'Open the center.',
      },
      {
        san: 'Bg4',
        explanation: 'Black pins the knight.',
      },
      {
        san: 'dxe5',
        explanation: '4.dxe5 captures the pawn.',
        hint: 'Capture on e5.',
      },
      {
        san: 'Bxf3',
        explanation: 'Black captures the knight.',
      },
      {
        san: 'Qxf3',
        explanation: '5.Qxf3 recaptures. Never move a piece twice in the opening — but recaptures don\'t count!',
        hint: 'Recapture with the queen.',
      },
      {
        san: 'dxe5',
        explanation: 'Black recaptures.',
      },
      {
        san: 'Bc4',
        explanation: '6.Bc4 develops the bishop to an active diagonal targeting f7.',
        hint: 'Develop the bishop.',
      },
      {
        san: 'Nf6',
        explanation: 'Black develops.',
      },
      {
        san: 'Qb3',
        explanation: '7.Qb3 attacks f7 and b7 simultaneously.',
        hint: 'Attack f7 and b7 with Qb3.',
      },
      {
        san: 'Qe7',
        explanation: 'Black defends f7.',
      },
      {
        san: 'Nc3',
        explanation: '8.Nc3 develops the last piece.',
        hint: 'Develop and prepare castling.',
      },
      {
        san: 'c6',
        explanation: 'Black prepares ...b5.',
      },
      {
        san: 'Bg5',
        explanation: '9.Bg5 pins the knight on f6.',
        hint: 'Pin the knight.',
      },
      {
        san: 'b5',
        explanation: 'Black drives the bishop away.',
      },
      {
        san: 'Nxb5',
        explanation: '10.Nxb5 sacrifices the knight! Morphy begins the combination.',
        hint: 'Sacrifice the knight!',
      },
      {
        san: 'cxb5',
        explanation: 'Black captures.',
      },
      {
        san: 'Bxb5+',
        explanation: '11.Bxb5+ gives check and uncovers the queen\'s attack.',
        hint: 'Check with the bishop.',
      },
      {
        san: 'Nbd7',
        explanation: 'Black blocks with the knight.',
      },
      {
        san: '0-0-0',
        explanation: '12.0-0-0 brings the rook into the attack. The king is safe on the other side.',
        hint: 'Castle queenside to join the attack.',
      },
      {
        san: 'Rd8',
        explanation: 'Black tries to defend.',
      },
      {
        san: 'Rxd7',
        explanation: '13.Rxd7 sacrifices the rook! The combination continues.',
        hint: 'Sacrifice the rook!',
      },
      {
        san: 'Rxd7',
        explanation: 'Black captures.',
      },
      {
        san: 'Rd1',
        explanation: '14.Rd1 brings the other rook to the attack.',
        hint: 'Double rooks on the d-file.',
      },
      {
        san: 'Qe6',
        explanation: 'Black tries to defend.',
      },
      {
        san: 'Bxd7+',
        explanation: '15.Bxd7+ — the bishop captures the rook with check.',
        hint: 'Capture with check.',
      },
      {
        san: 'Nxd7',
        explanation: 'Black captures.',
      },
      {
        san: 'Qb8+',
        explanation: '16.Qb8+ — the queen delivers check!',
        hint: 'Qb8+ check!',
      },
      {
        san: 'Nxb8',
        explanation: 'Black captures.',
      },
      {
        san: 'Rd8#',
        explanation: '17.Rd8# — checkmate! Morphy sacrifices almost everything to deliver a beautiful mate.',
        hint: 'Rd8# checkmate!',
      },
    ],
  },
  {
    id: 'immortal-game',
    sectionId: 'famous-games',
    title: 'The Immortal Game — Anderssen vs. Kieseritzky',
    description:
      'Played in 1851, this game features one of the most brilliant queen sacrifices in chess history. Anderssen sacrifices both rooks and the queen to deliver checkmate.',
    difficulty: 'advanced',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 12,
    mainLine: [
      {
        san: 'e4',
        explanation: '1.e4 — the opening move.',
        hint: 'Play e4.',
      },
      {
        san: 'e5',
        explanation: 'Black responds.',
      },
      {
        san: 'f4',
        explanation: '2.f4 — the King\'s Gambit.',
        hint: 'Play the King\'s Gambit.',
      },
      {
        san: 'exf4',
        explanation: 'Black accepts.',
      },
      {
        san: 'Bc4',
        explanation: '3.Bc4 develops the bishop.',
        hint: 'Develop.',
      },
      {
        san: 'Qh4+',
        explanation: 'Black checks.',
      },
      {
        san: 'Kf1',
        explanation: '4.Kf1 — the king moves. Not ideal, but it blocks the check.',
        hint: 'Move the king.',
      },
      {
        san: 'b5',
        explanation: 'A strange move from Black.',
      },
      {
        san: 'Bxb5',
        explanation: '5.Bxb5 captures the pawn.',
        hint: 'Capture.',
      },
      {
        san: 'Nf6',
        explanation: 'Black develops.',
      },
      {
        san: 'Nf3',
        explanation: '6.Nf3 develops and attacks the queen.',
        hint: 'Develop with tempo.',
      },
      {
        san: 'Qh6',
        explanation: 'The queen retreats.',
      },
      {
        san: 'd3',
        explanation: '7.d3 solidifies the center.',
        hint: 'Solidify.',
      },
      {
        san: 'Nh5',
        explanation: 'A mysterious knight move.',
      },
      {
        san: 'Bxf4',
        explanation: '8.Bxf4 recaptures the pawn.',
        hint: 'Recapture.',
      },
      {
        san: 'Qg6',
        explanation: 'Black attacks g2.',
      },
      {
        san: 'Nc3',
        explanation: '9.Nc3 develops.',
        hint: 'Develop.',
      },
      {
        san: 'c6',
        explanation: 'Black attacks the bishop.',
      },
      {
        san: 'Ba4',
        explanation: '10.Ba4 retreats.',
        hint: 'Retreat the bishop.',
      },
      {
        san: 'Qg7',
        explanation: 'A mysterious move.',
      },
      {
        san: '0-0',
        explanation: '11.0-0 finally castles.',
        hint: 'Castle.',
      },
      {
        san: 'Nf6',
        explanation: 'The knight retreats.',
      },
      {
        san: 'Rxf6',
        explanation: '12.Rxf6 sacrifices the first rook!',
        hint: 'Sacrifice the rook!',
      },
      {
        san: 'Qxf6',
        explanation: 'Black captures.',
      },
      {
        san: 'Rf1',
        explanation: '13.Rf1 attacks the queen.',
        hint: 'Attack the queen.',
      },
      {
        san: 'Qd8',
        explanation: 'Black retreats.',
      },
      {
        san: 'Bxg7',
        explanation: '14.Bxg7 — capturing the bishop.',
        hint: 'Capture.',
      },
      {
        san: 'Re8',
        explanation: 'Black blocks with the rook.',
      },
      {
        san: 'Qh5',
        explanation: '15.Qh5 prepares threats.',
        hint: 'Bring the queen out.',
      },
      {
        san: 'Qe7',
        explanation: 'Black defends.',
      },
      {
        san: 'Qxf7+',
        explanation: '16.Qxf7+ sacrifices the queen! The beginning of the immortal combination.',
        hint: 'Sacrifice the queen!',
      },
      {
        san: 'Kd8',
        explanation: 'Black avoids capture.',
      },
      {
        san: 'Qf8+',
        explanation: '17.Qf8+ — the queen keeps checking.',
        hint: 'Check!',
      },
      {
        san: 'Qxf8',
        explanation: 'Black captures.',
      },
      {
        san: 'Bf6#',
        explanation: '18.Bf6# — checkmate! The bishop delivers mate while the rook blocks the king\'s escape.',
        hint: 'Bf6# checkmate!',
      },
    ],
  },
  {
    id: 'game-of-the-century',
    sectionId: 'famous-games',
    title: 'The Game of the Century — Fischer vs. Byrne',
    description:
      'In 1956, 13-year-old Bobby Fischer played what became known as "The Game of the Century." His brilliant queen sacrifice is still studied today.',
    difficulty: 'advanced',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'b',
    estimatedMinutes: 12,
    mainLine: [
      {
        san: 'Nf3',
        explanation: '1.Nf3 — a flexible opening.',
      },
      {
        san: 'Nf6',
        explanation: '1...Nf6 — Fischer responds.',
        hint: 'Develop the knight.',
      },
      {
        san: 'c4',
        explanation: '2.c4 — the English Opening.',
      },
      {
        san: 'g6',
        explanation: '2...g6 — preparing the Grünfeld.',
        hint: 'Prepare fianchetto.',
      },
      {
        san: 'Nc3',
        explanation: '3.Nc3 develops.',
      },
      {
        san: 'Bg7',
        explanation: '3...Bg7 — fianchettoing the bishop.',
        hint: 'Fianchetto the bishop.',
      },
      {
        san: 'd4',
        explanation: '4.d4.',
      },
      {
        san: '0-0',
        explanation: '4...0-0 — Fischer castles.',
        hint: 'Castle.',
      },
      {
        san: 'Bf4',
        explanation: '5.Bf4.',
      },
      {
        san: 'd5',
        explanation: '5...d5 — Fischer strikes in the center.',
        hint: 'Fight for the center.',
      },
      {
        san: 'Qb3',
        explanation: '6.Qb3.',
      },
      {
        san: 'dxc4',
        explanation: '6...dxc4.',
        hint: 'Capture.',
      },
      {
        san: 'Qxc4',
        explanation: '7.Qxc4.',
      },
      {
        san: 'c6',
        explanation: '7...c6 — solidifying.',
        hint: 'Solidify.',
      },
      {
        san: 'e4',
        explanation: '8.e4.',
      },
      {
        san: 'Nbd7',
        explanation: '8...Nbd7',
        hint: 'Develop.',
      },
      {
        san: 'Rd1',
        explanation: '9.Rd1.',
      },
      {
        san: 'Nb6',
        explanation: '9...Nb6 — Fischer\'s knight chases the queen.',
        hint: 'Attack the queen.',
      },
      {
        san: 'Qc5',
        explanation: '10.Qc5.',
      },
      {
        san: 'Bg4',
        explanation: '10...Bg4 — pinning the knight.',
        hint: 'Pin the knight.',
      },
      {
        san: 'Bg5',
        explanation: '11.Bg5 — pinning Fischer\'s knight back.',
      },
      {
        san: 'Na4',
        explanation: '11...Na4 — Fischer attacks the queen!',
        hint: 'Attack the queen with your knight.',
      },
      {
        san: 'Qa3',
        explanation: '12.Qa3.',
      },
      {
        san: 'Nxc3',
        explanation: '12...Nxc3 — Fischer sacrifices the knight!',
        hint: 'Sacrifice the knight!',
      },
      {
        san: 'bxc3',
        explanation: '13.bxc3.',
      },
      {
        san: 'Nxe4',
        explanation: '13...Nxe4 — Fischer sacrifices another piece!',
        hint: 'Sacrifice again!',
      },
      {
        san: 'Bxe7',
        explanation: '14.Bxe7 — Byrne takes the bait.',
      },
      {
        san: 'Qb6',
        explanation: '14...Qb6 — Fischer attacks two pieces at once.',
        hint: 'Attack with the queen.',
      },
      {
        san: 'Bc4',
        explanation: '15.Bc4.',
      },
      {
        san: 'Nxe7',
        explanation: '15...Nxe7 — Fischer continues the combination.',
        hint: 'Continue the attack.',
      },
      {
        san: 'Bxf7+',
        explanation: '16.Bxf7+ — Byrne checks.',
      },
      {
        san: 'Rxf7',
        explanation: '16...Rxf7 — Fischer sacrifices the exchange!',
        hint: 'Sacrifice the exchange.',
      },
      {
        san: 'Qg3',
        explanation: '17.Qg3.',
      },
      {
        san: 'Rxf3',
        explanation: '17...Rxf3 — Fischer sacrifices the rook! The position is incredible.',
        hint: 'Sacrifice the rook!',
      },
      {
        san: 'gxf3',
        explanation: '18.gxf3.',
      },
      {
        san: 'Qd6',
        explanation: '18...Qd6 — Fischer\'s queen dominates.',
        hint: 'Centralize the queen.',
      },
      {
        san: 'Qxg6',
        explanation: '19.Qxg6 — Byrne takes a pawn.',
      },
      {
        san: 'Qf4',
        explanation: '19...Qf4 — Fischer threatens mate.',
        hint: 'Threaten mate!',
      },
      {
        san: 'Qe6+',
        explanation: '20.Qe6+ — Byrne checks.',
      },
      {
        san: 'Kh8',
        explanation: '20...Kh8 — Fischer\'s king is safe.',
        hint: 'Move the king.',
      },
      {
        san: 'Ne5',
        explanation: '21.Ne5 — Byrne attacks the queen.',
      },
      {
        san: 'Rf8',
        explanation: '21...Rf8 — Fischer\'s rook joins the attack.',
        hint: 'Bring the rook in.',
      },
      {
        san: 'Rg1',
        explanation: '22.Rg1 — Byrne tries to defend.',
      },
      {
        san: 'Qe4',
        explanation: '22...Qe4 — Fischer threatens checkmate.',
        hint: 'Threaten checkmate!',
      },
      {
        san: 'Rg4',
        explanation: '23.Rg4 — Byrne blocks.',
      },
      {
        san: 'Qh1#',
        explanation: '23...Qh1# — checkmate! Fischer\'s queen delivers mate on h1. The Game of the Century.',
        hint: 'Qh1# checkmate!',
      },
    ],
  },
  {
    id: 'deep-blue-kasparov',
    sectionId: 'famous-games',
    title: 'Deep Blue vs. Kasparov — Game 6',
    description:
      'The 1997 match between Garry Kasparov and IBM\'s Deep Blue marked the first time a computer defeated a world champion in a classical match. Game 6 is famous for Deep Blue\'s deep sacrifice.',
    difficulty: 'advanced',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'e4',
        explanation: '1.e4 — Deep Blue opens.',
        hint: 'Open with e4.',
      },
      {
        san: 'c5',
        explanation: 'The Sicilian Defense.',
      },
      {
        san: 'Nf3',
        explanation: '2.Nf3.',
        hint: 'Develop.',
      },
      {
        san: 'd6',
        explanation: '2...d6.',
      },
      {
        san: 'd4',
        explanation: '3.d4.',
        hint: 'Open the center.',
      },
      {
        san: 'cxd4',
        explanation: '3...cxd4.',
      },
      {
        san: 'Nxd4',
        explanation: '4.Nxd4.',
        hint: 'Recapture.',
      },
      {
        san: 'Nf6',
        explanation: '4...Nf6.',
      },
      {
        san: 'Nc3',
        explanation: '5.Nc3.',
        hint: 'Develop.',
      },
      {
        san: 'a6',
        explanation: '5...a6 — the Najdorf Variation.',
      },
      {
        san: 'Be3',
        explanation: '6.Be3.',
        hint: 'Develop.',
      },
      {
        san: 'e5',
        explanation: '6...e5 — Kasparov strikes in the center.',
      },
      {
        san: 'Nb3',
        explanation: '7.Nb3.',
        hint: 'Retreat the knight.',
      },
      {
        san: 'Be6',
        explanation: '7...Be6.',
      },
      {
        san: 'f3',
        explanation: '8.f3 — Deep Blue solidifies the center.',
        hint: 'Solidify e4.',
      },
      {
        san: 'Be7',
        explanation: '8...Be7.',
      },
      {
        san: 'Qd2',
        explanation: '9.Qd2.',
        hint: 'Prepare castling.',
      },
      {
        san: '0-0',
        explanation: '9...0-0 — Kasparov castles.',
      },
      {
        san: '0-0-0',
        explanation: '10.0-0-0 — Deep Blue castles queenside. Both sides are ready for a fight.',
        hint: 'Castle queenside.',
      },
      {
        san: 'Nbd7',
        explanation: '10...Nbd7.',
      },
      {
        san: 'Kb1',
        explanation: '11.Kb1 — Deep Blue moves the king to safety.',
        hint: 'King safety first.',
      },
      {
        san: 'b5',
        explanation: '11...b5 — Kasparov starts his queenside attack.',
      },
      {
        san: 'Nc5',
        explanation: '12.Nc5 — Deep Blue\'s knight jumps to an outpost.',
        hint: 'Plant a knight on c5.',
      },
      {
        san: 'Nxc5',
        explanation: 'Kasparov trades.',
      },
      {
        san: 'Bxc5',
        explanation: '13.Bxc5 recaptures.',
        hint: 'Recapture.',
      },
      {
        san: 'b4',
        explanation: '13...b4 — Kasparov pushes.',
      },
      {
        san: 'Ne2',
        explanation: '14.Ne2 — Deep Blue retreats the knight.',
        hint: 'Retreat.',
      },
      {
        san: 'Qa5',
        explanation: '14...Qa5 — Kasparov brings the queen out.',
      },
      {
        san: 'Nc1',
        explanation: '15.Nc1 — Deep Blue\'s unusual knight move.',
        hint: 'Reroute the knight.',
      },
      {
        san: 'Rfc8',
        explanation: '15...Rfc8.',
      },
      {
        san: 'Bd3',
        explanation: '16.Bd3 — Deep Blue develops.',
        hint: 'Develop.',
      },
      {
        san: 'Nd7',
        explanation: '16...Nd7 — Kasparov challenges the bishop.',
      },
      {
        san: 'Bb6',
        explanation: '17.Bb6 — Deep Blue retreats.',
        hint: 'Retreat the bishop.',
      },
      {
        san: 'Qb5',
        explanation: '17...Qb5 — Kasparov\'s queen is active.',
      },
      {
        san: 'Nd3',
        explanation: '18.Nd3 — Deep Blue\'s knight finds a great square.',
        hint: 'Centralize the knight.',
      },
      {
        san: 'Qa4',
        explanation: '18...Qa4.',
      },
      {
        san: 'Bd4',
        explanation: '19.Bd4 — Deep Blue centralizes the bishop.',
        hint: 'Centralize.',
      },
      {
        san: 'Bf8',
        explanation: '19...Bf8 — Kasparov retreats.',
      },
      {
        san: 'e5',
        explanation: '20.e5! — Deep Blue sacrifices a pawn! The computer sacrifices material for the attack.',
        hint: 'Sacrifice a pawn to open lines!',
      },
      {
        san: 'dxe5',
        explanation: 'Kasparov accepts.',
      },
      {
        san: 'Be4',
        explanation: '21.Be4 — Deep Blue\'s bishop dominates the diagonal.',
        hint: 'Activate the bishop.',
      },
      {
        san: 'Bh6',
        explanation: '21...Bh6 — Kasparov defends.',
      },
      {
        san: 'g4',
        explanation: '22.g4 — Deep Blue attacks on the kingside.',
        hint: 'Attack on the kingside.',
      },
      {
        san: 'Rd8',
        explanation: '22...Rd8.',
      },
      {
        san: 'Qf2',
        explanation: '23.Qf2 — Deep Blue centralizes the queen.',
        hint: 'Centralize the queen.',
      },
      {
        san: 'Qf8',
        explanation: '23...Qf8 — Kasparov defends.',
      },
      {
        san: 'Bxf6',
        explanation: '24.Bxf6 — Deep Blue sacrifices the bishop!',
        hint: 'Sacrifice the bishop!',
      },
      {
        san: 'Nxf6',
        explanation: 'Kasparov captures.',
      },
      {
        san: 'Qc5',
        explanation: '25.Qc5 — Deep Blue\'s queen targets f8.',
        hint: 'Attack the queen.',
      },
      {
        san: 'Qd6',
        explanation: '25...Qd6 — Kasparov blocks.',
      },
      {
        san: 'Qa3',
        explanation: '26.Qa3 — Deep Blue keeps the pressure.',
        hint: 'Keep attacking.',
      },
      {
        san: 'Ra7',
        explanation: '26...Ra7.',
      },
      {
        san: 'Rxd6',
        explanation: '27.Rxd6 — Deep Blue sacrifices the rook!',
        hint: 'Sacrifice the rook!',
      },
      {
        san: 'Rxd6',
        explanation: 'Kasparov captures.',
      },
      {
        san: 'Qxa6',
        explanation: '28.Qxa6 — Deep Blue wins material.',
        hint: 'Capture.',
      },
      {
        san: 'Rc8',
        explanation: '28...Rc8.',
      },
      {
        san: 'Qb5',
        explanation: '29.Qb5 — Deep Blue consolidates.',
        hint: 'Consolidate.',
      },
      {
        san: 'Ra8',
        explanation: '29...Ra8.',
      },
      {
        san: 'Ba6',
        explanation: '30.Ba6 — Deep Blue\'s bishop targets the rook.',
        hint: 'Attack.',
      },
      {
        san: 'Bc5',
        explanation: 'Kasparov defends.',
      },
      {
        san: 'Bxc8',
        explanation: '31.Bxc8 — Deep Blue wins the exchange.',
        hint: 'Capture.',
      },
      {
        san: 'Bxf2',
        explanation: 'Kasparov fights back.',
      },
      {
        san: 'Rc1',
        explanation: '32.Rc1 — Deep Blue wins. Kasparov resigned soon after.',
        hint: 'Win the endgame.',
      },
    ],
  },
  {
    id: 'evergreen-game',
    sectionId: 'famous-games',
    title: 'The Evergreen Game — Anderssen vs. Dufresne',
    description:
      'Adolf Anderssen\'s 1852 masterpiece features a stunning queen sacrifice and one of the most beautiful checkmates ever conceived.',
    difficulty: 'advanced',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'e4',
        explanation: '1.e4.',
        hint: 'Open with e4.',
      },
      {
        san: 'e5',
        explanation: 'Black responds.',
      },
      {
        san: 'Nf3',
        explanation: '2.Nf3.',
        hint: 'Develop.',
      },
      {
        san: 'Nc6',
        explanation: '2...Nc6.',
      },
      {
        san: 'Bc4',
        explanation: '3.Bc4.',
        hint: 'Develop.',
      },
      {
        san: 'Bc5',
        explanation: '3...Bc5.',
      },
      {
        san: 'b4',
        explanation: '4.b4 — the Evans Gambit!',
        hint: 'Sacrifice a pawn with b4!',
      },
      {
        san: 'Bxb4',
        explanation: 'Black accepts.',
      },
      {
        san: 'c3',
        explanation: '5.c3 attacks the bishop.',
        hint: 'Attack the bishop.',
      },
      {
        san: 'Ba5',
        explanation: 'The bishop retreats.',
      },
      {
        san: 'd4',
        explanation: '6.d4 opens the center.',
        hint: 'Open the center.',
      },
      {
        san: 'exd4',
        explanation: 'Black captures.',
      },
      {
        san: '0-0',
        explanation: '7.0-0 castles.',
        hint: 'Castle.',
      },
      {
        san: 'Nge7',
        explanation: 'A strange move from Black.',
      },
      {
        san: 'cxd4',
        explanation: '8.cxd4.',
        hint: 'Recapture.',
      },
      {
        san: 'd5',
        explanation: 'Black counterattacks.',
      },
      {
        san: 'exd5',
        explanation: '9.exd5.',
        hint: 'Capture.',
      },
      {
        san: 'Nxd5',
        explanation: 'Black recaptures.',
      },
      {
        san: 'Nc3',
        explanation: '10.Nc3 attacks the knight.',
        hint: 'Attack.',
      },
      {
        san: 'Nce7',
        explanation: 'Black retreats.',
      },
      {
        san: 'Bb3',
        explanation: '11.Bb3 — the bishop avoids exchange.',
        hint: 'Retreat the bishop.',
      },
      {
        san: '0-0',
        explanation: 'Black castles.',
      },
      {
        san: 'Qd3',
        explanation: '12.Qd3 — the queen eyes h7.',
        hint: 'Prepare the attack.',
      },
      {
        san: 'h6',
        explanation: 'Black prevents Ng5.',
      },
      {
        san: 'Bh7+',
        explanation: '13.Bh7+ — the Greek Gift sacrifice begins!',
        hint: 'Sacrifice the bishop on h7!',
      },
      {
        san: 'Kh8',
        explanation: 'The king moves to the corner.',
      },
      {
        san: 'Bc2',
        explanation: '14.Bc2 — the bishop retreats but eyes g6.',
        hint: 'Retreat the bishop.',
      },
      {
        san: 'Nf4',
        explanation: 'A mysterious knight move.',
      },
      {
        san: 'Qd2',
        explanation: '15.Qd2.',
        hint: 'Prepare.',
      },
      {
        san: 'Qf6',
        explanation: 'Black\'s queen becomes active.',
      },
      {
        san: 'Qg5',
        explanation: '16.Qg5! — Anderssen offers a queen trade, but it\'s a trap.',
        hint: 'Offer a queen trade.',
      },
      {
        san: 'Qxf3',
        explanation: 'Black takes the knight!',
      },
      {
        san: 'Bxf4',
        explanation: '17.Bxf4 — the bishop captures the knight.',
        hint: 'Capture.',
      },
      {
        san: 'Qxf4',
        explanation: 'Black captures the bishop.',
      },
      {
        san: 'Rd8+',
        explanation: '18.Rd8+ — THE MOVE! Anderssen sacrifices the rook!',
        hint: 'Rd8+ sacrifice!',
      },
      {
        san: 'Rxd8',
        explanation: 'Black captures.',
      },
      {
        san: 'Qxd8+',
        explanation: '19.Qxd8+ — the queen gives check!',
        hint: 'Qd8+ check!',
      },
      {
        san: 'Nxd8',
        explanation: 'Black captures.',
      },
      {
        san: 'Bxg6+',
        explanation: '20.Bxg6+ — the bishop gives check!',
        hint: 'Bxg6+ check!',
      },
      {
        san: 'Kg7',
        explanation: 'The king flees.',
      },
      {
        san: 'Bxf7+',
        explanation: '21.Bxf7+ — another check!',
        hint: 'Bxf7+ check!',
      },
      {
        san: 'Kxf7',
        explanation: 'The king captures.',
      },
      {
        san: 'Ne5+',
        explanation: '22.Ne5+ — discovered check from the bishop on b3!',
        hint: 'Ne5+ double check!',
      },
      {
        san: 'Ke7',
        explanation: 'The king moves.',
      },
      {
        san: 'Nxg6+',
        explanation: '23.Nxg6+ — the knight keeps checking!',
        hint: 'Keep checking!',
      },
      {
        san: 'Kd6',
        explanation: 'The king runs to the center.',
      },
    ],
  },
  {
    id: 'carlsen-karjakin',
    sectionId: 'famous-games',
    title: 'Carlsen vs. Karjakin — 2016 World Championship, Game 10',
    description:
      'In the 2016 World Championship match, Magnus Carlsen played this positional masterpiece against Sergey Karjakin. It shows how even at the highest level, grinding endgames win championships.',
    difficulty: 'intermediate',
    startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    estimatedMinutes: 10,
    mainLine: [
      {
        san: 'e4',
        explanation: '1.e4 — Carlsen opens.',
        hint: 'Play e4.',
      },
      {
        san: 'e5',
        explanation: 'Karjakin responds.',
      },
      {
        san: 'Nf3',
        explanation: '2.Nf3.',
        hint: 'Develop.',
      },
      {
        san: 'Nc6',
        explanation: '2...Nc6.',
      },
      {
        san: 'Bb5',
        explanation: '3.Bb5 — the Ruy Lopez.',
        hint: 'Play the Ruy Lopez.',
      },
      {
        san: 'Nf6',
        explanation: '3...Nf6.',
      },
      {
        san: '0-0',
        explanation: '4.0-0 — Carlsen castles quickly.',
        hint: 'Castle.',
      },
      {
        san: 'Nxe4',
        explanation: '4...Nxe4 — the Open Variation.',
      },
      {
        san: 'd4',
        explanation: '5.d4 — Carlsen opens the center.',
        hint: 'Open the center.',
      },
      {
        san: 'Nd6',
        explanation: '5...Nd6 — Karjakin retreats the knight.',
      },
      {
        san: 'Bxc6',
        explanation: '6.Bxc6 — Carlsen trades.',
        hint: 'Trade.',
      },
      {
        san: 'dxc6',
        explanation: '6...dxc6 — Karjakin recaptures.',
      },
      {
        san: 'dxe5',
        explanation: '7.dxe5 — Carlsen clears the center.',
        hint: 'Capture.',
      },
      {
        san: 'Nf5',
        explanation: '7...Nf5 — Karjakin\'s knight finds a good square.',
      },
      {
        san: 'Qxd8+',
        explanation: '8.Qxd8+ — Carlsen trades queens, heading to a favorable endgame.',
        hint: 'Trade queens into a favorable endgame.',
      },
      {
        san: 'Kxd8',
        explanation: '8...Kxd8 — Karjakin recaptures.',
      },
      {
        san: 'Rd1+',
        explanation: '9.Rd1+ — Carlsen gains a tempo by checking.',
        hint: 'Check with the rook.',
      },
      {
        san: 'Kc8',
        explanation: 'The king retreats.',
      },
      {
        san: 'Nc3',
        explanation: '10.Nc3 — Carlsen develops with tempo.',
        hint: 'Develop.',
      },
      {
        san: 'Bd7',
        explanation: 'Black develops.',
      },
      {
        san: 'Be3',
        explanation: '11.Be3 — Carlsen develops the last piece.',
        hint: 'Develop.',
      },
      {
        san: 'b6',
        explanation: 'Black solidifies.',
      },
      {
        san: 'Nd4',
        explanation: '12.Nd4 — Carlsen\'s knight finds an outpost.',
        hint: 'Centralize the knight.',
      },
      {
        san: 'Nxd4',
        explanation: 'Black trades.',
      },
      {
        san: 'Bxd4',
        explanation: '13.Bxd4 — Carlsen recaptures.',
        hint: 'Recapture.',
      },
      {
        san: 'Be8',
        explanation: 'Black retreats.',
      },
      {
        san: 'a4',
        explanation: '14.a4 — Carlsen begins queenside play.',
        hint: 'Start queenside expansion.',
      },
      {
        san: 'Bb7',
        explanation: 'Black\'s bishop finds a diagonal.',
      },
      {
        san: 'b4',
        explanation: '15.b4 — Carlsen gains space on the queenside.',
        hint: 'Gain space.',
      },
      {
        san: 'Kd7',
        explanation: 'Black centralizes the king.',
      },
      {
        san: 'f3',
        explanation: '16.f3 — Carlsen solidifies the center.',
        hint: 'Solidify.',
      },
      {
        san: 'c5',
        explanation: 'Black counterattacks.',
      },
      {
        san: 'bxc5',
        explanation: '17.bxc5 — Carlsen opens the b-file.',
        hint: 'Open a file.',
      },
      {
        san: 'bxc5',
        explanation: 'Black recaptures.',
      },
      {
        san: 'Bc3',
        explanation: '18.Bc3 — Carlsen\'s bishop retreats to a key diagonal.',
        hint: 'Reroute the bishop.',
      },
      {
        san: 'Bc6',
        explanation: 'Black defends.',
      },
      {
        san: 'Rd6',
        explanation: '19.Rd6 — Carlsen\'s rook invades.',
        hint: 'Invade with the rook.',
      },
      {
        san: 'Kc7',
        explanation: 'Black defends.',
      },
      {
        san: 'Rad1',
        explanation: '20.Rad1 — Carlsen doubles rooks.',
        hint: 'Double rooks on the d-file.',
      },
      {
        san: 'c4',
        explanation: 'Black counterattacks.',
      },
      {
        san: 'Bd2',
        explanation: '21.Bd2 — Carlsen prevents ...c3.',
        hint: 'Prevent Black\'s counterplay.',
      },
      {
        san: 'Kb8',
        explanation: 'Black\'s king retreats.',
      },
      {
        san: 'R1d4',
        explanation: '22.R1d4 — Carlsen prepares to shift the attack.',
        hint: 'Prepare the attack.',
      },
      {
        san: 'c5',
        explanation: 'Black pushes.',
      },
      {
        san: 'R4d5',
        explanation: '23.R4d5 — the rooks dominate the d-file.',
        hint: 'Dominate the open file.',
      },
      {
        san: 'Bb7',
        explanation: 'Black\'s bishop redeploys.',
      },
      {
        san: 'Bf4',
        explanation: '24.Bf4 — Carlsen\'s bishop joins the attack.',
        hint: 'Activate the bishop.',
      },
      {
        san: 'Bc6',
        explanation: 'Black defends.',
      },
      {
        san: 'R5d3',
        explanation: '25.R5d3 — Carlsen\'s patience grinds Black down.',
        hint: 'Keep the pressure.',
      },
    ],
  },
];

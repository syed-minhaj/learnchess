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
        explanation: '1.e4 — the King\'s Gambit begins.',
        hint: 'Open with e4.',
      },
      {
        san: 'e5',
        explanation: 'Black mirrors.',
      },
      {
        san: 'f4',
        explanation: '2.f4 — the King\'s Gambit! White sacrifices a pawn for rapid development.',
        hint: 'Play the King\'s Gambit.',
      },
      {
        san: 'exf4',
        explanation: 'Black accepts the gambit.',
      },
      {
        san: 'Bc4',
        explanation: '3.Bc4 — the Bishop\'s Gambit, developing with a threat to f7.',
        hint: 'Develop the bishop to c4.',
      },
      {
        san: 'Qh4+',
        explanation: '3...Qh4+ — Black checks immediately, preventing castling.',
      },
      {
        san: 'Kf1',
        explanation: '4.Kf1 — the king moves. The only way to block the check.',
        hint: 'Move the king to f1.',
      },
      {
        san: 'b5',
        explanation: '4...b5 — the Bryan Counter-Gambit, attacking the bishop.',
      },
      {
        san: 'Bxb5',
        explanation: '5.Bxb5 — Anderssen accepts the counter-sacrifice.',
        hint: 'Capture the pawn.',
      },
      {
        san: 'Nf6',
        explanation: '5...Nf6 — Black develops with a threat.',
      },
      {
        san: 'Nf3',
        explanation: '6.Nf3 — attacking the queen and developing.',
        hint: 'Develop the knight with tempo.',
      },
      {
        san: 'Qh6',
        explanation: '6...Qh6 — the queen retreats.',
      },
      {
        san: 'd3',
        explanation: '7.d3 — solidifying the center.',
        hint: 'Solidify the center.',
      },
      {
        san: 'Nh5',
        explanation: '7...Nh5 — a mysterious knight move, threatening Ng3+.',
      },
      {
        san: 'Nh4',
        explanation: '8.Nh4 — Anderssen prepares a tactical idea.',
        hint: 'Reroute the knight.',
      },
      {
        san: 'Qg5',
        explanation: '8...Qg5 — the queen attacks the knight.',
      },
      {
        san: 'Nf5',
        explanation: '9.Nf5 — the knight jumps forward, attacking g7.',
        hint: 'Centralize the knight.',
      },
      {
        san: 'c6',
        explanation: '9...c6 — Black attacks the bishop.',
      },
      {
        san: 'g4',
        explanation: '10.g4 — Anderssen kicks the knight back.',
        hint: 'Attack the knight.',
      },
      {
        san: 'Nf6',
        explanation: '10...Nf6 — the knight retreats.',
      },
      {
        san: 'Rg1',
        explanation: '11.Rg1 — Anderssen sacrifices the bishop!',
        hint: 'Sacrifice the bishop with Rg1.',
      },
      {
        san: 'cxb5',
        explanation: '11...cxb5 — Black captures.',
      },
      {
        san: 'h4',
        explanation: '12.h4 — attacking the queen with tempo.',
        hint: 'Attack the queen with h4.',
      },
      {
        san: 'Qg6',
        explanation: '12...Qg6 — the queen retreats.',
      },
      {
        san: 'h5',
        explanation: '13.h5 — pushing further.',
        hint: 'Push the pawn.',
      },
      {
        san: 'Qg5',
        explanation: '13...Qg5 — the queen stays active.',
      },
      {
        san: 'Qf3',
        explanation: '14.Qf3 — threatening the bishop and preparing an attack.',
        hint: 'Bring the queen into the attack.',
      },
      {
        san: 'Ng8',
        explanation: '14...Ng8 — Black retreats, a sign of trouble.',
      },
      {
        san: 'Bxf4',
        explanation: '15.Bxf4 — recapturing the pawn with the bishop.',
        hint: 'Recapture the pawn.',
      },
      {
        san: 'Qf6',
        explanation: '15...Qf6 — Black challenges.',
      },
      {
        san: 'Nc3',
        explanation: '16.Nc3 — developing the last piece.',
        hint: 'Develop the knight.',
      },
      {
        san: 'Bc5',
        explanation: '16...Bc5 — Black develops with a threat.',
      },
      {
        san: 'Nd5',
        explanation: '17.Nd5 — a beautiful centralization, attacking the queen.',
        hint: 'Centralize the knight with tempo.',
      },
      {
        san: 'Qxb2',
        explanation: '17...Qxb2 — Black grabs a pawn, but falls behind in development.',
      },
      {
        san: 'Bd6',
        explanation: '18.Bd6! — a brilliant move! The bishop blocks the king\'s escape and threatens Bxg1.',
        hint: 'Play Bd6! The beginning of the immortal combination.',
      },
      {
        san: 'Bxg1',
        explanation: '18...Bxg1 — Black accepts the rook sacrifice.',
      },
      {
        san: 'e5',
        explanation: '19.e5! — opening the diagonal for the bishop and threatening Qf6.',
        hint: 'Push e5 to open lines.',
      },
      {
        san: 'Qxa1+',
        explanation: '19...Qxa1+ — Black takes the other rook.',
      },
      {
        san: 'Ke2',
        explanation: '20.Ke2 — the king steps out of check.',
        hint: 'Move the king to e2.',
      },
      {
        san: 'Na6',
        explanation: '20...Na6 — a sad square for the knight.',
      },
      {
        san: 'Nxg7+',
        explanation: '21.Nxg7+ — sacrificing the knight to expose the king!',
        hint: 'Nxg7+ check!',
      },
      {
        san: 'Kd8',
        explanation: '21...Kd8 — the king flees.',
      },
      {
        san: 'Qf6+',
        explanation: '22.Qf6+!! — the queen sacrifice! Anderssen offers his queen to draw the knight away from e7.',
        hint: 'Qf6+!! Sacrifice the queen!',
      },
      {
        san: 'Nxf6',
        explanation: '22...Nxf6 — Black captures.',
      },
      {
        san: 'Be7#',
        explanation: '23.Be7# — checkmate! The bishop delivers mate with the king trapped by his own pieces.',
        hint: 'Be7# — checkmate!',
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
        explanation: '1.Nf3 — a flexible opening from Byrne.',
      },
      {
        san: 'Nf6',
        explanation: '1...Nf6 — Fischer responds symmetrically.',
        hint: 'Develop the knight.',
      },
      {
        san: 'c4',
        explanation: '2.c4 — the English Opening.',
      },
      {
        san: 'g6',
        explanation: '2...g6 — preparing the Grünfeld.',
        hint: 'Prepare the fianchetto.',
      },
      {
        san: 'Nc3',
        explanation: '3.Nc3 — developing.',
      },
      {
        san: 'Bg7',
        explanation: '3...Bg7 — fianchettoing the bishop.',
        hint: 'Fianchetto the bishop.',
      },
      {
        san: 'd4',
        explanation: '4.d4 — Byrne takes the center.',
      },
      {
        san: '0-0',
        explanation: '4...O-O — Fischer castles early.',
        hint: 'Castle for safety.',
      },
      {
        san: 'Bf4',
        explanation: '5.Bf4 — developing the bishop.',
      },
      {
        san: 'd5',
        explanation: '5...d5 — Fischer strikes in the Grünfeld style.',
        hint: 'Challenge the center with d5.',
      },
      {
        san: 'Qb3',
        explanation: '6.Qb3 — the Russian System, pressuring d5.',
      },
      {
        san: 'dxc4',
        explanation: '6...dxc4 — Fischer surrenders the center.',
        hint: 'Capture the pawn.',
      },
      {
        san: 'Qxc4',
        explanation: '7.Qxc4 — recapturing.',
      },
      {
        san: 'c6',
        explanation: '7...c6 — solidifying.',
        hint: 'Solidify with c6.',
      },
      {
        san: 'e4',
        explanation: '8.e4 — Byrne builds a strong center.',
      },
      {
        san: 'Nbd7',
        explanation: '8...Nbd7 — developing with a purpose.',
        hint: 'Develop the knight.',
      },
      {
        san: 'Rd1',
        explanation: '9.Rd1 — Byrne protects the queen.',
      },
      {
        san: 'Nb6',
        explanation: '9...Nb6 — Fischer attacks the queen with tempo.',
        hint: 'Attack the queen with Nb6.',
      },
      {
        san: 'Qc5',
        explanation: '10.Qc5 — the queen retreats but stays active.',
      },
      {
        san: 'Bg4',
        explanation: '10...Bg4 — pinning the knight.',
        hint: 'Pin the knight with Bg4.',
      },
      {
        san: 'Bg5',
        explanation: '11.Bg5 — Byrne pins Fischer\'s knight in return.',
      },
      {
        san: 'Na4!!',
        explanation: '11...Na4!! — Fischer sacrifices a knight! A brilliant concept.',
        hint: 'Sacrifice the knight with Na4!',
      },
      {
        san: 'Qa3',
        explanation: '12.Qa3 — Byrne declines the sacrifice.',
      },
      {
        san: 'Nxc3',
        explanation: '12...Nxc3 — Fischer sacrifices the knight anyway.',
        hint: 'Sacrifice with Nxc3.',
      },
      {
        san: 'bxc3',
        explanation: '13.bxc3 — recapturing.',
      },
      {
        san: 'Nxe4',
        explanation: '13...Nxe4 — Fischer sacrifices another piece!',
        hint: 'Sacrifice again with Nxe4!',
      },
      {
        san: 'Bxe7',
        explanation: '14.Bxe7 — Byrne takes the bait.',
      },
      {
        san: 'Qb6',
        explanation: '14...Qb6 — Fischer attacks two pieces at once.',
        hint: 'Attack with Qb6.',
      },
      {
        san: 'Bc4',
        explanation: '15.Bc4 — Byrne defends.',
      },
      {
        san: 'Nxc3!',
        explanation: '15...Nxc3! — Fischer continues the combination.',
        hint: 'Capture with Nxc3!',
      },
      {
        san: 'Bc5',
        explanation: '16.Bc5 — Byrne attacks the queen.',
      },
      {
        san: 'Rfe8+',
        explanation: '16...Rfe8+ — Fischer brings the rook into the attack with check.',
        hint: 'Check with Rfe8+!',
      },
      {
        san: 'Kf1',
        explanation: '17.Kf1 — the king flees.',
      },
      {
        san: 'Be6!!',
        explanation: '17...Be6!! — THE MOVE! Fischer sacrifices the queen!',
        hint: 'Be6!! — sacrifice the queen!',
      },
      {
        san: 'Bxb6',
        explanation: '18.Bxb6 — Byrne accepts the queen sacrifice.',
      },
      {
        san: 'Bxc4+',
        explanation: '18...Bxc4+ — discovered check!',
        hint: 'Check with Bxc4+!',
      },
      {
        san: 'Kg1',
        explanation: '19.Kg1 — the king moves.',
      },
      {
        san: 'Ne2+',
        explanation: '19...Ne2+ — knight fork check!',
        hint: 'Fork with Ne2+!',
      },
      {
        san: 'Kf1',
        explanation: '20.Kf1 — fleeing.',
      },
      {
        san: 'Nxd4+',
        explanation: '20...Nxd4+ — another discovered check!',
        hint: 'Discovered check with Nxd4+!',
      },
      {
        san: 'Kg1',
        explanation: '21.Kg1 — back to g1.',
      },
      {
        san: 'Ne2+',
        explanation: '21...Ne2+ — another fork!',
        hint: 'Fork again with Ne2+!',
      },
      {
        san: 'Kf1',
        explanation: '22.Kf1 — fleeing.',
      },
      {
        san: 'Nc3+',
        explanation: '22...Nc3+ — yet another check!',
        hint: 'Check with Nc3+!',
      },
      {
        san: 'Kg1',
        explanation: '23.Kg1 — the king is chased around.',
      },
      {
        san: 'axb6',
        explanation: '23...axb6 — Fischer finally takes the bishop.',
        hint: 'Recapture with axb6.',
      },
      {
        san: 'Qb4',
        explanation: '24.Qb4 — Byrne activates.',
      },
      {
        san: 'Ra4!',
        explanation: '24...Ra4! — Fischer traps the queen!',
        hint: 'Trap the queen with Ra4!',
      },
      {
        san: 'Qxb6',
        explanation: '25.Qxb6 — Byrne has no choice.',
      },
      {
        san: 'Nxd1',
        explanation: '25...Nxd1 — Fischer wins the exchange.',
        hint: 'Capture the rook with Nxd1.',
      },
      {
        san: 'h3',
        explanation: '26.h3 — a waiting move.',
      },
      {
        san: 'Rxa2',
        explanation: '26...Rxa2 — Fischer grabs a pawn.',
        hint: 'Capture the pawn with Rxa2.',
      },
      {
        san: 'Kh2',
        explanation: '27.Kh2 — the king tries to hide.',
      },
      {
        san: 'Nxf2',
        explanation: '27...Nxf2 — Fischer keeps winning material.',
        hint: 'Capture with Nxf2.',
      },
      {
        san: 'Re1',
        explanation: '28.Re1 — Byrne activates the rook.',
      },
      {
        san: 'Rxe1',
        explanation: '28...Rxe1 — Fischer trades.',
        hint: 'Trade rooks with Rxe1.',
      },
      {
        san: 'Qd8+',
        explanation: '29.Qd8+ — Byrne checks.',
      },
      {
        san: 'Bf8',
        explanation: '29...Bf8 — Fischer blocks.',
        hint: 'Block with Bf8.',
      },
      {
        san: 'Nxe1',
        explanation: '30.Nxe1 — recapturing.',
      },
      {
        san: 'Bd5',
        explanation: '30...Bd5 — Fischer centralizes the bishop.',
        hint: 'Centralize with Bd5.',
      },
      {
        san: 'Nf3',
        explanation: '31.Nf3 — developing.',
      },
      {
        san: 'Ne4',
        explanation: '31...Ne4 — Fischer\'s knight dominates.',
        hint: 'Centralize with Ne4.',
      },
      {
        san: 'Qb8',
        explanation: '32.Qb8 — Byrne attacks b5.',
      },
      {
        san: 'b5',
        explanation: '32...b5 — Fischer defends.',
        hint: 'Defend with b5.',
      },
      {
        san: 'h4',
        explanation: '33.h4 — Byrne tries to create counterplay.',
      },
      {
        san: 'h5',
        explanation: '33...h5 — Fischer responds on the kingside.',
        hint: 'Push h5.',
      },
      {
        san: 'Ne5',
        explanation: '34.Ne5 — Byrne activates.',
      },
      {
        san: 'Kg7',
        explanation: '34...Kg7 — Fischer\'s king joins the attack.',
        hint: 'Centralize the king.',
      },
      {
        san: 'Kg1',
        explanation: '35.Kg1 — Byrne tries to escape.',
      },
      {
        san: 'Bc5+',
        explanation: '35...Bc5+ — check! Fischer weaves a mating net.',
        hint: 'Check with Bc5+!',
      },
      {
        san: 'Kf1',
        explanation: '36.Kf1 — fleeing.',
      },
      {
        san: 'Ng3+',
        explanation: '36...Ng3+ — another check!',
        hint: 'Check with Ng3+!',
      },
      {
        san: 'Ke1',
        explanation: '37.Ke1 — the king runs.',
      },
      {
        san: 'Bb4+',
        explanation: '37...Bb4+ — check!',
        hint: 'Check with Bb4+!',
      },
      {
        san: 'Kd1',
        explanation: '38.Kd1 — more fleeing.',
      },
      {
        san: 'Bb3+',
        explanation: '38...Bb3+ — check!',
        hint: 'Check with Bb3+!',
      },
      {
        san: 'Kc1',
        explanation: '39.Kc1 — almost trapped.',
      },
      {
        san: 'Ne2+',
        explanation: '39...Ne2+ — check!',
        hint: 'Check with Ne2+!',
      },
      {
        san: 'Kb1',
        explanation: '40.Kb1 — one more square.',
      },
      {
        san: 'Nc3+',
        explanation: '40...Nc3+ — check!',
        hint: 'Check with Nc3+!',
      },
      {
        san: 'Kc1',
        explanation: '41.Kc1 — back to c1.',
      },
      {
        san: 'Rc2#',
        explanation: '41...Rc2# — checkmate! Fischer delivers mate with the rook.',
        hint: 'Rc2# — checkmate!',
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
        san: 'c6',
        explanation: '1...c6 — Kasparov chooses the solid Caro-Kann Defense.',
      },
      {
        san: 'd4',
        explanation: '2.d4 — Deep Blue takes the center.',
        hint: 'Push d4.',
      },
      {
        san: 'd5',
        explanation: '2...d5 — Black challenges.',
      },
      {
        san: 'Nc3',
        explanation: '3.Nc3 — developing with pressure.',
        hint: 'Develop the knight.',
      },
      {
        san: 'dxe4',
        explanation: '3...dxe4 — Black exchanges.',
      },
      {
        san: 'Nxe4',
        explanation: '4.Nxe4 — recapturing.',
        hint: 'Recapture.',
      },
      {
        san: 'Nd7',
        explanation: '4...Nd7 — Karjakin develops.',
      },
      {
        san: 'Ng5',
        explanation: '5.Ng5 — Deep Blue breaks the opening principle of not moving pieces twice. Attacks f7.',
        hint: 'Jump to g5, attacking f7.',
      },
      {
        san: 'Ngf6',
        explanation: '5...Ngf6 — Black defends.',
      },
      {
        san: 'Bd3',
        explanation: '6.Bd3 — developing the bishop.',
        hint: 'Develop the bishop.',
      },
      {
        san: 'e6',
        explanation: '6...e6 — solidifying.',
      },
      {
        san: 'N1f3',
        explanation: '7.N1f3 — bringing the other knight to bear.',
        hint: 'Develop the knight.',
      },
      {
        san: 'h6',
        explanation: '7...h6? — Kasparov plays a dubious move. He may have mixed up the move order.',
      },
      {
        san: 'Nxe6',
        explanation: '8.Nxe6!! — Deep Blue sacrifices a knight! A stunning computer sacrifice.',
        hint: 'Nxe6!! Sacrifice the knight!',
      },
      {
        san: 'Qe7',
        explanation: '8...Qe7 — Black pins the knight to avoid immediate capture.',
      },
      {
        san: 'O-O',
        explanation: '9.O-O — Deep Blue castles. If 9...Qxe6, 10.Re1 pins and wins the queen.',
        hint: 'Castle to activate the rook.',
      },
      {
        san: 'fxe6',
        explanation: '9...fxe6 — Kasparov finally captures.',
      },
      {
        san: 'Bg6',
        explanation: '10.Bg6+ — Deep Blue checks and forces the king to move.',
        hint: 'Bg6+ check!',
      },
      {
        san: 'Kd8',
        explanation: '10...Kd8 — the king flees to the center.',
      },
      {
        san: 'Bf4',
        explanation: '11.Bf4 — Deep Blue develops with a powerful pin.',
        hint: 'Develop the bishop to f4.',
      },
      {
        san: 'b5',
        explanation: '11...b5 — Kasparov tries to create counterplay.',
      },
      {
        san: 'a4',
        explanation: '12.a4 — Deep Blue attacks the queenside.',
        hint: 'Attack with a4.',
      },
      {
        san: 'Bb7',
        explanation: '12...Bb7 — Black develops.',
      },
      {
        san: 'Re1',
        explanation: '13.Re1 — Deep Blue activates the rook with pressure.',
        hint: 'Activate the rook on e1.',
      },
      {
        san: 'Nd5',
        explanation: '13...Nd5 — Karjakin blocks.',
      },
      {
        san: 'Bg3',
        explanation: '14.Bg3 — Deep Blue retreats the bishop to safety.',
        hint: 'Retreat the bishop.',
      },
      {
        san: 'Kc8',
        explanation: '14...Kc8 — the king continues fleeing.',
      },
      {
        san: 'axb5',
        explanation: '15.axb5 — Deep Blue opens the queenside.',
        hint: 'Capture with axb5.',
      },
      {
        san: 'cxb5',
        explanation: '15...cxb5 — Black recaptures.',
      },
      {
        san: 'Qd3',
        explanation: '16.Qd3 — Deep Blue centralizes the queen, eyeing the kingside.',
        hint: 'Centralize the queen.',
      },
      {
        san: 'Bc6',
        explanation: '16...Bc6 — Black defends.',
      },
      {
        san: 'Bf5',
        explanation: '17.Bf5! — Deep Blue sacrifices the bishop! The final blow.',
        hint: 'Bf5! Sacrifice the bishop!',
      },
      {
        san: 'exf5',
        explanation: '17...exf5 — Black captures.',
      },
      {
        san: 'Rxe7',
        explanation: '18.Rxe7 — Deep Blue wins the queen for a rook and bishop.',
        hint: 'Capture the queen with Rxe7.',
      },
      {
        san: 'Bxe7',
        explanation: '18...Bxe7 — Black recaptures.',
      },
      {
        san: 'c4',
        explanation: '19.c4! — Deep Blue threatens Qb5+ and Re1. Kasparov resigns.',
        hint: 'c4! — the winning move. Black resigns.',
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
        explanation: '1.e4 — Anderssen opens with the king\'s pawn.',
        hint: 'Open with e4.',
      },
      {
        san: 'e5',
        explanation: '1...e5 — Black responds.',
      },
      {
        san: 'Nf3',
        explanation: '2.Nf3 — developing the knight.',
        hint: 'Develop the knight.',
      },
      {
        san: 'Nc6',
        explanation: '2...Nc6 — Black develops.',
      },
      {
        san: 'Bc4',
        explanation: '3.Bc4 — Italian Game, targeting f7.',
        hint: 'Develop the bishop to c4.',
      },
      {
        san: 'Bc5',
        explanation: '3...Bc5 — Black develops symmetrically.',
      },
      {
        san: 'b4',
        explanation: '4.b4 — the Evans Gambit! Anderssen sacrifices a pawn for rapid development.',
        hint: 'b4! — the Evans Gambit!',
      },
      {
        san: 'Bxb4',
        explanation: '4...Bxb4 — Black accepts.',
      },
      {
        san: 'c3',
        explanation: '5.c3 — attacking the bishop with tempo.',
        hint: 'Attack the bishop with c3.',
      },
      {
        san: 'Ba5',
        explanation: '5...Ba5 — the bishop retreats.',
      },
      {
        san: 'd4',
        explanation: '6.d4 — opening the center.',
        hint: 'Push d4.',
      },
      {
        san: 'exd4',
        explanation: '6...exd4 — Black captures.',
      },
      {
        san: 'O-O',
        explanation: '7.O-O — castling, bringing the rook into play.',
        hint: 'Castle for safety.',
      },
      {
        san: 'd3',
        explanation: '7...d3 — Black gives back the pawn but blocks White\'s development.',
      },
      {
        san: 'Qb3',
        explanation: '8.Qb3 — attacking f7 and developing the queen.',
        hint: 'Develop the queen to b3.',
      },
      {
        san: 'Qf6',
        explanation: '8...Qf6 — Black defends f7 and attacks the bishop.',
      },
      {
        san: 'e5',
        explanation: '9.e5 — Anderssen attacks the queen with tempo.',
        hint: 'Push e5, attacking the queen.',
      },
      {
        san: 'Qg6',
        explanation: '9...Qg6 — the queen retreats.',
      },
      {
        san: 'Re1',
        explanation: '10.Re1 — bringing the rook to the center.',
        hint: 'Activate the rook on e1.',
      },
      {
        san: 'Nge7',
        explanation: '10...Nge7 — Black develops.',
      },
      {
        san: 'Ba3',
        explanation: '11.Ba3 — Anderssen\'s bishop finds a powerful diagonal.',
        hint: 'Develop the bishop to a3.',
      },
      {
        san: 'b5',
        explanation: '11...b5 — a counter-sacrifice from Black.',
      },
      {
        san: 'Qxb5',
        explanation: '12.Qxb5 — Anderssen accepts.',
        hint: 'Capture with Qxb5.',
      },
      {
        san: 'Rb8',
        explanation: '12...Rb8 — Black attacks the queen.',
      },
      {
        san: 'Qa4',
        explanation: '13.Qa4 — the queen retreats.',
        hint: 'Retreat the queen to a4.',
      },
      {
        san: 'Bb6',
        explanation: '13...Bb6 — Black consolidates.',
      },
      {
        san: 'Nbd2',
        explanation: '14.Nbd2 — developing the knight.',
        hint: 'Develop the knight.',
      },
      {
        san: 'Bb7',
        explanation: '14...Bb7 — Black develops the last piece.',
      },
      {
        san: 'Ne4',
        explanation: '15.Ne4 — centralizing the knight with a threat.',
        hint: 'Centralize with Ne4.',
      },
      {
        san: 'Qf5',
        explanation: '15...Qf5 — Black defends.',
      },
      {
        san: 'Bxd3',
        explanation: '16.Bxd3 — Anderssen captures the pawn and opens lines.',
        hint: 'Capture the pawn with Bxd3.',
      },
      {
        san: 'Qh5',
        explanation: '16...Qh5 — Black\'s queen retreats.',
      },
      {
        san: 'Nf6+',
        explanation: '17.Nf6+!! — a stunning knight sacrifice! The start of the immortal combination.',
        hint: 'Nf6+!! Sacrifice the knight!',
      },
      {
        san: 'gxf6',
        explanation: '17...gxf6 — Black captures.',
      },
      {
        san: 'exf6',
        explanation: '18.exf6 — opening the g-file and threatening the rook.',
        hint: 'Recapture with exf6.',
      },
      {
        san: 'Rg8',
        explanation: '18...Rg8 — Black defends, attacking the queen.',
      },
      {
        san: 'Rad1',
        explanation: '19.Rad1!! — Anderssen brings the rook into the attack, ignoring the threatened queen.',
        hint: 'Rad1!! Ignore the queen sacrifice!',
      },
      {
        san: 'Qxf3',
        explanation: '19...Qxf3 — Black captures the queen.',
      },
      {
        san: 'Rxe7+',
        explanation: '20.Rxe7+! — sacrifice the rook, not the queen!',
        hint: 'Rxe7+! Check!',
      },
      {
        san: 'Nxe7',
        explanation: '20...Nxe7 — Black captures.',
      },
      {
        san: 'Qxd7+',
        explanation: '21.Qxd7+!! — the queen sacrifice! Anderssen gives up his queen for checkmate.',
        hint: 'Qxd7+!! Sacrifice the queen!',
      },
      {
        san: 'Kxd7',
        explanation: '21...Kxd7 — the king captures.',
      },
      {
        san: 'Bf5+',
        explanation: '22.Bf5+ — double check! The king must move.',
        hint: 'Bf5+ double check!',
      },
      {
        san: 'Ke8',
        explanation: '22...Ke8 — the king retreats.',
      },
      {
        san: 'Bd7+',
        explanation: '23.Bd7+ — another check!',
        hint: 'Bd7+ check!',
      },
      {
        san: 'Kf8',
        explanation: '23...Kf8 — the king flees to the corner.',
      },
      {
        san: 'Bxe7#',
        explanation: '24.Bxe7# — checkmate! A lone bishop delivers mate. One of the most beautiful mates in chess history.',
        hint: 'Bxe7# — checkmate!',
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
        explanation: '1.e4 — Carlsen opens with the king\'s pawn.',
        hint: 'Open with e4.',
      },
      {
        san: 'e5',
        explanation: '1...e5 — Karjakin responds.',
      },
      {
        san: 'Nf3',
        explanation: '2.Nf3 — developing the knight.',
        hint: 'Develop the knight.',
      },
      {
        san: 'Nc6',
        explanation: '2...Nc6 — Black develops.',
      },
      {
        san: 'Bb5',
        explanation: '3.Bb5 — the Ruy Lopez, Carlsen\'s specialty.',
        hint: 'Bb5 — the Ruy Lopez.',
      },
      {
        san: 'Nf6',
        explanation: '3...Nf6 — the Berlin Defense.',
      },
      {
        san: 'd3',
        explanation: '4.d3 — the Anti-Berlin, avoiding the Berlin Endgame.',
        hint: 'd3 — a quiet but flexible move.',
      },
      {
        san: 'Bc5',
        explanation: '4...Bc5 — Karjakin develops actively.',
      },
      {
        san: 'c3',
        explanation: '5.c3 — preparing d4 and supporting the center.',
        hint: 'c3 — strengthen the center.',
      },
      {
        san: 'O-O',
        explanation: '5...O-O — Black castles.',
      },
      {
        san: 'Bg5',
        explanation: '6.Bg5 — pinning the knight.',
        hint: 'Bg5 — pin the knight.',
      },
      {
        san: 'h6',
        explanation: '6...h6 — Black asks what the bishop intends.',
      },
      {
        san: 'Bh4',
        explanation: '7.Bh4 — maintaining the pin.',
        hint: 'Bh4 — keep the pin.',
      },
      {
        san: 'Be7',
        explanation: '7...Be7 — Black breaks the pin.',
      },
      {
        san: 'O-O',
        explanation: '8.O-O — Carlsen castles.',
        hint: 'Castle.',
      },
      {
        san: 'd6',
        explanation: '8...d6 — solidifying.',
      },
      {
        san: 'Nbd2',
        explanation: '9.Nbd2 — developing the knight.',
        hint: 'Develop the knight.',
      },
      {
        san: 'Nh5',
        explanation: '9...Nh5 — Karjakin eyes f4.',
      },
      {
        san: 'Bxe7',
        explanation: '10.Bxe7 — Carlsen trades bishops.',
        hint: 'Trade bishops.',
      },
      {
        san: 'Qxe7',
        explanation: '10...Qxe7 — Black recaptures.',
      },
      {
        san: 'Nc4',
        explanation: '11.Nc4 — centralizing the knight.',
        hint: 'Centralize the knight.',
      },
      {
        san: 'Nf4',
        explanation: '11...Nf4 — Karjakin\'s knight jumps to an outpost.',
      },
      {
        san: 'Ne3',
        explanation: '12.Ne3 — rerouting to cover more squares.',
        hint: 'Reroute the knight.',
      },
      {
        san: 'Qf6',
        explanation: '12...Qf6 — Black targets the kingside.',
      },
      {
        san: 'g3',
        explanation: '13.g3 — Carlsen kicks the knight.',
        hint: 'g3 — kick the knight.',
      },
      {
        san: 'Nh3+',
        explanation: '13...Nh3+ — a temporary check.',
      },
      {
        san: 'Kh1',
        explanation: '14.Kh1 — the king moves.',
        hint: 'Kh1.',
      },
      {
        san: 'Ne7',
        explanation: '14...Ne7 — the knight retreats to a better square.',
      },
      {
        san: 'Bc4',
        explanation: '15.Bc4 — activating the bishop.',
        hint: 'Activate the bishop.',
      },
      {
        san: 'c6',
        explanation: '15...c6 — solidifying.',
      },
      {
        san: 'Bb3',
        explanation: '16.Bb3 — the bishop finds a safer square.',
        hint: 'Retreat the bishop.',
      },
      {
        san: 'Ng6',
        explanation: '16...Ng6 — Karjakin reroutes.',
      },
      {
        san: 'Qe2',
        explanation: '17.Qe2 — connecting the rooks.',
        hint: 'Connect the rooks.',
      },
      {
        san: 'a5',
        explanation: '17...a5 — Black starts queenside play.',
      },
      {
        san: 'a4',
        explanation: '18.a4 — Carlsen stops ...a4.',
        hint: 'a4 — stop Black\'s expansion.',
      },
      {
        san: 'Be6',
        explanation: '18...Be6 — Black develops.',
      },
      {
        san: 'Bxe6',
        explanation: '19.Bxe6 — Carlsen trades to open lines.',
        hint: 'Trade bishops.',
      },
      {
        san: 'fxe6',
        explanation: '19...fxe6 — Black recaptures away from the center.',
      },
      {
        san: 'Nd2',
        explanation: '20.Nd2 — rerouting.',
        hint: 'Reroute the knight.',
      },
      {
        san: 'd5',
        explanation: '20...d5 — Karjakin takes the center.',
      },
      {
        san: 'Qh5',
        explanation: '21.Qh5 — Carlsen switches to the kingside.',
        hint: 'Switch to the kingside.',
      },
      {
        san: 'Ng5',
        explanation: '21...Ng5 — Black attacks the queen.',
      },
      {
        san: 'h4',
        explanation: '22.h4 — kicking the knight.',
        hint: 'h4 — kick the knight.',
      },
      {
        san: 'Nf3',
        explanation: '22...Nf3 — Black sacrifices the knight!',
      },
      {
        san: 'Nxf3',
        explanation: '23.Nxf3 — Carlsen accepts.',
        hint: 'Capture the knight.',
      },
      {
        san: 'Qxf3+',
        explanation: '23...Qxf3+ — Black checks.',
      },
      {
        san: 'Qxf3',
        explanation: '24.Qxf3 — trading queens into a favorable endgame.',
        hint: 'Trade queens.',
      },
      {
        san: 'Rxf3',
        explanation: '24...Rxf3 — Black recaptures.',
      },
      {
        san: 'Kg2',
        explanation: '25.Kg2 — Carlsen attacks the rook.',
        hint: 'Attack the rook with Kg2.',
      },
      {
        san: 'Rf7',
        explanation: '25...Rf7 — the rook retreats.',
      },
      {
        san: 'Rfe1',
        explanation: '26.Rfe1 — activating the rook.',
        hint: 'Activate the rook.',
      },
      {
        san: 'h5',
        explanation: '26...h5 — Black prevents g4.',
      },
      {
        san: 'Nf1',
        explanation: '27.Nf1 — the knight reroutes to the kingside.',
        hint: 'Reroute the knight.',
      },
      {
        san: 'Kf8',
        explanation: '27...Kf8 — Black centralizes the king.',
      },
      {
        san: 'Nd2',
        explanation: '28.Nd2 — the knight finds a new path.',
        hint: 'Reroute the knight.',
      },
      {
        san: 'Ke7',
        explanation: '28...Ke7 — the king advances.',
      },
      {
        san: 'Re2',
        explanation: '29.Re2 — Carlsen prepares doubling.',
        hint: 'Prepare to double rooks.',
      },
      {
        san: 'Kd6',
        explanation: '29...Kd6 — the king comes to the center.',
      },
      {
        san: 'Nf3',
        explanation: '30.Nf3 — the knight finds an outpost.',
        hint: 'Centralize the knight.',
      },
      {
        san: 'Raf8',
        explanation: '30...Raf8 — Black doubles.',
      },
      {
        san: 'Ng5',
        explanation: '31.Ng5 — attacking the rook.',
        hint: 'Attack the rook with Ng5.',
      },
      {
        san: 'Re7',
        explanation: '31...Re7 — Black defends.',
      },
      {
        san: 'Rae1',
        explanation: '32.Rae1 — Carlsen doubles on the e-file.',
        hint: 'Double rooks.',
      },
      {
        san: 'Rfe8',
        explanation: '32...Rfe8 — Black holds.',
      },
      {
        san: 'Nf3',
        explanation: '33.Nf3 — the knight reroutes again.',
        hint: 'Reroute.',
      },
      {
        san: 'Nh8',
        explanation: '33...Nh8 — the knight retreats to the rim.',
      },
      {
        san: 'd4',
        explanation: '34.d4 — Carlsen opens the center!',
        hint: 'd4! — open the center.',
      },
      {
        san: 'exd4',
        explanation: '34...exd4 — Black accepts.',
      },
      {
        san: 'Nxd4',
        explanation: '35.Nxd4 — recapturing.',
        hint: 'Recapture.',
      },
      {
        san: 'g6',
        explanation: '35...g6 — Karjakin prepares to challenge.',
      },
      {
        san: 'Re3',
        explanation: '36.Re3 — Carlsen strengthens.',
        hint: 'Strengthen the position.',
      },
      {
        san: 'Nf7',
        explanation: '36...Nf7 — the knight comes back.',
      },
      {
        san: 'e5+',
        explanation: '37.e5+ — Carlsen pushes with check!',
        hint: 'e5+ check!',
      },
      {
        san: 'Kd7',
        explanation: '37...Kd7 — the king retreats.',
      },
      {
        san: 'Rf3',
        explanation: '38.Rf3 — switching to the f-file.',
        hint: 'Switch to the f-file.',
      },
      {
        san: 'Nh6',
        explanation: '38...Nh6 — the knight goes to the rim.',
      },
      {
        san: 'Rf6',
        explanation: '39.Rf6 — Carlsen invades!',
        hint: 'Invade with Rf6!',
      },
      {
        san: 'Rg7',
        explanation: '39...Rg7 — Black defends.',
      },
      {
        san: 'b4',
        explanation: '40.b4 — Carlsen starts queenside expansion.',
        hint: 'b4 — expand on the queenside.',
      },
      {
        san: 'axb4',
        explanation: '40...axb4 — Black captures.',
      },
      {
        san: 'cxb4',
        explanation: '41.cxb4 — Carlsen recaptures.',
        hint: 'Recapture.',
      },
      {
        san: 'Ng8',
        explanation: '41...Ng8 — Black retreats.',
      },
      {
        san: 'Rf3',
        explanation: '42.Rf3 — the rook retreats to avoid ...Nf6.',
        hint: 'Retreat the rook.',
      },
      {
        san: 'Nh6',
        explanation: '42...Nh6 — the knight returns.',
      },
      {
        san: 'a5',
        explanation: '43.a5 — Carlsen gains more space.',
        hint: 'a5 — gain space.',
      },
      {
        san: 'Nf5',
        explanation: '43...Nf5 — Karjakin centralizes.',
      },
      {
        san: 'Nb3',
        explanation: '44.Nb3 — rerouting to the queenside.',
        hint: 'Reroute the knight.',
      },
      {
        san: 'Kc7',
        explanation: '44...Kc7 — Black defends.',
      },
      {
        san: 'Nc5',
        explanation: '45.Nc5 — Carlsen\'s knight finds a beautiful outpost.',
        hint: 'Plant the knight on c5.',
      },
      {
        san: 'Kb8',
        explanation: '45...Kb8 — the king retreats.',
      },
      {
        san: 'Rb1',
        explanation: '46.Rb1 — Carlsen targets the b-file.',
        hint: 'Target the b-file.',
      },
      {
        san: 'Ka7',
        explanation: '46...Ka7 — the king hides on a7.',
      },
      {
        san: 'Rd3',
        explanation: '47.Rd3 — threatening the d5 pawn.',
        hint: 'Pressure the d-pawn.',
      },
      {
        san: 'Rc7',
        explanation: '47...Rc7 — Black defends.',
      },
      {
        san: 'Ra3',
        explanation: '48.Ra3 — Carlsen shifts the attack.',
        hint: 'Shift the attack.',
      },
      {
        san: 'Nd4',
        explanation: '48...Nd4 — Black centralizes.',
      },
      {
        san: 'Rd1',
        explanation: '49.Rd1 — attacking the knight.',
        hint: 'Attack the knight.',
      },
      {
        san: 'Nf5',
        explanation: '49...Nf5 — Black retreats.',
      },
      {
        san: 'Kh3',
        explanation: '50.Kh3 — Carlsen improves the king.',
        hint: 'Improve the king.',
      },
      {
        san: 'Nh6',
        explanation: '50...Nh6 — the knight goes back.',
      },
    ],
  },
];

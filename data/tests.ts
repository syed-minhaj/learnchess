import { TestScenario } from '@/types';

export const testData: Record<string, TestScenario> = {
  'back-rank': {
    fen: '6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Re8#', comment: 'Re8# is checkmate! The black king is trapped by its own pawns on f7, g7, and h7. The rook delivers mate on the back rank' },
    ],
  },
  'smothered': {
    fen: '6rk/5ppp/8/6N1/8/8/8/6K1 w - - 0 1',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Nf7#', comment: 'Nf7# is smothered mate! The black king is completely surrounded by its own rook on g8 and pawns on f7, g7, and h7. The k' },
    ],
  },
  'anastasia': {
    fen: '7k/6p1/5N2/8/8/8/K7/R7 w - - 0 1',
    userColor: 'w',
    prompt: 'Deliver Anastasia\'s mate.',
    root: [
      {       userMove: 'Rh1#', comment: 'Rh1# is Anastasia\'s mate! The rook slides to the h-file and delivers check. The knight on f6 covers g8, while the pawn o' },
    ],
  },
  'bodens': {
    fen: 'k7/p7/8/4B3/4B3/8/PPPP1PPP/7K w - - 0 1',
    userColor: 'w',
    prompt: 'Deliver Boden\'s mate.',
    root: [
      {       userMove: 'Bd6#', comment: 'Bd6# is Boden\'s mate! The bishop moves to d6, discovering check from the bishop on e4 along the a8-h1 diagonal. The two ' },
    ],
  },
  'greek-gift': {
    fen: 'r1bq1r2/pppp1ppk/2n5/2b1p3/3P4/2N1PN2/PPP2PPP/R1BQK2R w - - 0 8',
    userColor: 'w',
    prompt: 'Execute the Greek Gift sacrifice.',
    root: [
      {       userMove: 'Ng5+', botResponse: 'Kg8', comment: 'Ng5+ gives check and attacks the queen on d8. The knight cannot be captured because the pawn on f7 is pinned by the bish' },
      {       userMove: 'Qh5', botResponse: 'Re8', comment: 'Qh5 threatens Qxf7# and Qh8#. Black must defend immediately to avoid checkmate.' },
      {       userMove: 'Qxf7+', comment: 'Qxf7+ wins a pawn and keeps the attack going. Black\'s king is exposed and white\'s pieces coordinate perfectly for a cont' },
    ],
  },
  'epaulette': {
    fen: 'r1b2r1k/pppp1Qpp/2n5/8/8/8/PPP3PP/R1B1KR2 w - - 1 10',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Qxf8#', comment: 'Qxf8# is the epaulette mate! The queen captures the rook on f8 with checkmate. The black king on g8 is flanked by its ow' },
    ],
  },
  'threat-recognition': {
    fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
    userColor: 'w',
    prompt: 'Find the right defensive idea.',
    root: [
      {       userMove: 'd3', botResponse: 'Bc5', comment: 'd3 is safe and solid. White develops while recognizing that Bxf7+ would be premature (Nxe4!). Always check if your "atta' },
      {       userMove: '0-0', comment: '0-0 gets the king to safety. Before castling, always check that all your opponent\'s threats are neutralized.' },
    ],
  },
  'resourceful-defense': {
    fen: 'r1b2rk1/pppp1ppp/2n2q2/2b1p3/2B1P1n1/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'h3', botResponse: 'Nh6', comment: 'h3 asks the knight what it wants. White deals with the immediate threat (Ng4 attacking f2) while staying flexible.' },
      {       userMove: 'Be3', botResponse: 'Bxe3', comment: 'Be3 develops and prepares to trade off Black\'s active bishop. Trading pieces often relieves defensive pressure.' },
      {       userMove: 'fxe3', comment: 'fxe3 opens the f-file for the rook, giving White counterplay. Defense is not just about surviving — look for counteratta' },
    ],
  },
  'counterplay': {
    fen: 'r2q1rk1/ppp1bppp/2npp3/8/2BPP1n1/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    prompt: 'Create counterplay in a difficult position.',
    root: [
      {       userMove: 'h3', botResponse: 'Nh6', comment: 'h3 deals with the immediate threat of Nxf2. Before counterattacking, make sure your opponent doesn\'t have a knockout blo' },
      {       userMove: 'd5', botResponse: 'exd5', comment: 'd5! Counterplay in the center! While Black was preparing a kingside attack, White strikes in the center. This is the cla' },
      {       userMove: 'e5', comment: 'e5 opens lines and gives White the initiative. The tables have turned — White now has the attack!' },
    ],
  },
  'fortresses': {
    fen: '8/8/8/8/8/8/1k1B4/3K4 w - - 2 2',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Bc1+', botResponse: 'Ka2', comment: 'Bc1+ forces the king back. The bishop checks from a safe square while the king covers the escape.' },
      {       userMove: 'Kc2', botResponse: 'Ka1', comment: 'Kc2 maintains the barrier. The king and bishop form a wall that Black cannot penetrate.' },
      {       userMove: 'Kb3', comment: 'Kb3 completes the barrier. This fortress is solid — Black can never break through. The black king is confined to a1 and ' },
    ],
  },
  'perpetual-check': {
    fen: '6k1/5ppp/5Q2/8/8/8/8/6K1 w - - 0 1',
    userColor: 'w',
    prompt: 'Find the perpetual check.',
    root: [
      {       userMove: 'Qg6+', botResponse: 'Kf8', comment: 'Qg6+ checks the king. The black king is exposed — the pawns on f7, g7, h7 block escape squares.' },
      {       userMove: 'Qf6+', botResponse: 'Kg8', comment: 'Qf6+ keeps the checks coming. The queen chases the king back and forth.' },
      {       userMove: 'Qg6+', comment: 'Qg6+ — and the king is forced back to f8. The checks will continue forever. Perpetual check! The queen chases the king b' },
    ],
  },
  'zugzwang': {
    fen: '8/8/8/8/8/8/k1K5/8 w - - 2 2',
    userColor: 'w',
    prompt: 'Exploit zugzwang to win.',
    root: [
      {       userMove: 'Kc1', botResponse: 'Ka3', comment: 'Kc1 maintains the zugzwang. Black must move again.' },
      {       userMove: 'Kb1', botResponse: 'Kb3', comment: 'Kb1 prepares to advance.' },
      {       userMove: 'Ka1', comment: 'Ka1 — Black is forced to the edge.' },
    ],
  },
  'opposition': {
    fen: '8/8/8/3k4/8/2K5/3P4/8 w - - 4 3',
    userColor: 'w',
    prompt: 'Convert this endgame position.',
    root: [
      {       userMove: 'Kd3', botResponse: 'Ke5', comment: 'Kd3 — now the white king faces the black king directly again. Black must move aside.' },
      {       userMove: 'Ke3', botResponse: 'Kd5', comment: 'Ke3 takes the opposition for the third time. Black is completely helpless.' },
      {       userMove: 'd4', comment: 'd4 advances the pawn while the black king is forced to the side. The pawn will Queen soon.' },
    ],
  },
  'rook-endgames': {
    fen: '8/k7/8/8/8/8/8/1R4K1 w - - 6 4',
    userColor: 'w',
    prompt: 'Convert this endgame position.',
    root: [
      {       userMove: 'Ra1+', botResponse: 'Kb8', comment: 'Ra1+ repeats the check. The rook keeps the king trapped on the edge.' },
      {       userMove: 'Rb1+', botResponse: 'Kc8', comment: 'Rb1+ pushes the king further toward the center. The rook continues checking from behind.' },
      {       userMove: 'Ra1', comment: 'Ra1 prepares to bring the white king forward. The rook controls the back rank while the king advances.' },
    ],
  },
  'kq-checkmate': {
    fen: '8/8/8/8/8/3Q4/8/k2K4 w - - 0 1',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Qa3#', comment: 'Qa3# is checkmate! The queen gives check along the a-file while also covering b2 diagonally. The white king covers b1. T' },
    ],
  },
  'kr-checkmate': {
    fen: '8/8/8/8/1k2K3/8/8/7R w - - 6 4',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Ke5', botResponse: 'Kc5', comment: 'Ke5 — the white king advances toward the center of the board, giving the rook room to cut off ranks.' },
      {       userMove: 'Rh5+', botResponse: 'Kb4', comment: 'Rh5+ cuts off the 5th rank with check. The rook now controls all squares on the 5th rank, forcing the black king downwar' },
      {       userMove: 'Rf5', comment: 'Rf5 slides the rook toward the center, covering the 5th rank and reducing the black king\'s space further.' },
    ],
  },
  'bishop-vs-knight': {
    fen: '8/4k3/8/3b4/8/3N4/4K3/8 w - - 0 1',
    userColor: 'w',
    prompt: 'Convert this endgame position.',
    root: [
      {       userMove: 'Ke3', botResponse: 'Kd6', comment: 'Ke3 centralizes the king. In endgames, the king becomes an active fighting piece. Both sides must activate their kings.' },
      {       userMove: 'Nf4', botResponse: 'Bc4', comment: 'Nf4 attacks g6 and h5. The knight jumps around, but in open positions the bishop has more influence.' },
      {       userMove: 'Ng6', comment: 'Ng6 attacks f8 and h8 but doesn\'t control the center.' },
    ],
  },
  'queen-endgames': {
    fen: '8/8/8/8/8/8/1Q6/k2K4 w - - 0 1',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Qb1#', comment: 'Qb1# is checkmate! The queen gives check along the 1st rank while covering a2 diagonally and b2 vertically. The white ki' },
    ],
  },
  'kbb-kn-checkmate': {
    fen: '8/8/3k4/8/2B2B2/8/8/7K w - - 0 1',
    userColor: 'w',
    prompt: 'Play the bishop vs knight endgame correctly.',
    root: [
      {       userMove: 'Be5+', comment: 'Be5+ gives check with the dark-squared bishop while the light-squared bishop on c4 covers the e6 escape square. The two ' },
    ],
  },
  'opera-game': {
    fen: '4kb1r/p2r1ppp/4qn2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 2 15',
    userColor: 'w',
    prompt: 'Find the best move in this position.',
    root: [
      {       userMove: 'Bxd7+', botResponse: 'Nxd7', comment: '15.Bxd7+ — the bishop captures the rook with check.' },
      {       userMove: 'Qb8+', botResponse: 'Nxb8', comment: '16.Qb8+ — the queen delivers check!' },
      {       userMove: 'Rd8#', comment: '17.Rd8# — checkmate! Morphy sacrifices almost everything to deliver a beautiful mate.' },
    ],
  },
  'immortal-game': {
    fen: 'r1b1k1nr/p2p1ppp/n2B4/1p1NPN1P/6P1/3P1Q2/P1P1K3/q5b1 w kq - 2 21',
    userColor: 'w',
    prompt: 'Deliver checkmate from this position.',
    root: [
      {       userMove: 'Nxg7+', botResponse: 'Kd8', comment: '21.Nxg7+ — sacrificing the knight to expose the king!' },
      {       userMove: 'Qf6+', botResponse: 'Nxf6', comment: '22.Qf6+!! — the queen sacrifice! Anderssen offers his queen to draw the knight away from e7.' },
      {       userMove: 'Be7#', comment: '23.Be7# — checkmate! The bishop delivers mate with the king trapped by his own pieces.' },
    ],
  },
  'game-of-the-century': {
    fen: '1Q6/5pk1/2p3p1/1p2N2p/1b5P/1b4n1/r5P1/3K4 w - - 10 39',
    userColor: 'b',
    prompt: 'Find the best move in this position.',
    root: [
      {       userMove: 'Kc1', botResponse: 'Ne2+', comment: '39.Kc1 — almost trapped.' },
      {       userMove: 'Kb1', botResponse: 'Nc3+', comment: '40.Kb1 — one more square.' },
      {       userMove: 'Kc1', botResponse: 'Rc2#', comment: '41.Kc1 — back to c1.' },
    ],
  },
  'deep-blue-kasparov': {
    fen: 'r1k2b1r/p2nq1p1/2b1p1Bp/1p1n4/3P4/3Q1NB1/1PP2PPP/R3R1K1 w - - 2 17',
    userColor: 'w',
    prompt: 'Find the best move in this position.',
    root: [
      {       userMove: 'Bf5', botResponse: 'exf5', comment: '17.Bf5! — Deep Blue sacrifices the bishop! The final blow.' },
      {       userMove: 'Rxe7', botResponse: 'Bxe7', comment: '18.Rxe7 — Deep Blue wins the queen for a rook and bishop.' },
      {       userMove: 'c4', comment: '19.c4! — Deep Blue threatens Qb5+ and Re1. Kasparov resigns.' },
    ],
  },
  'evergreen-game': {
    fen: '1r4r1/pbpknp1p/1b3P2/8/8/B1PB1q2/P4PPP/3R2K1 w - - 0 22',
    userColor: 'w',
    prompt: 'Find the best move in this position.',
    root: [
      {       userMove: 'Bf5+', botResponse: 'Ke8', comment: '22.Bf5+ — double check! The king must move.' },
      {       userMove: 'Bd7+', botResponse: 'Kf8', comment: '23.Bd7+ — another check!' },
      {       userMove: 'Bxe7#', comment: '24.Bxe7# — checkmate! A lone bishop delivers mate. One of the most beautiful mates in chess history.' },
    ],
  },
  'carlsen-karjakin': {
    fen: '4r3/kpr5/2p1p1p1/P1NpPn1p/1P5P/3R2P1/5PK1/1R6 w - - 9 48',
    userColor: 'w',
    prompt: 'Convert this endgame position.',
    root: [
      {       userMove: 'Ra3', botResponse: 'Nd4', comment: '48.Ra3 — Carlsen shifts the attack.' },
      {       userMove: 'Rd1', botResponse: 'Nf5', comment: '49.Rd1 — attacking the knight.' },
      {       userMove: 'Kh3', botResponse: 'Nh6', comment: '50.Kh3 — Carlsen improves the king.' },
    ],
  },
  'center-control': {
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
    userColor: 'b',
    prompt: 'Fight for control of the center.',
    root: [
      {       userMove: 'Nc6', botResponse: 'Bb5', comment: 'Nc6 defends e5 and develops a knight toward the center. A knight on c6 eyes the key central squares d4 and e5.' },
      {       userMove: 'Nf6', botResponse: '0-0', comment: 'Nf6 develops the other knight and attacks e4. Black\'s knights control key central squares.' },
      {       userMove: 'Bc5', comment: 'Bc5 develops the bishop to an active diagonal. Both sides have strong central control.' },
    ],
  },
  'piece-activity': {
    fen: 'r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/2NPbN2/PPP2PPP/R2QK2R w KQkq - 0 6',
    userColor: 'w',
    prompt: 'Improve your piece activity.',
    root: [
      {       userMove: 'fxe3', botResponse: 'd6', comment: 'fxe3 opens the f-file for the rook. The rook now has an active file to operate on.' },
      {       userMove: '0-0', botResponse: '0-0', comment: '0-0 gets the king to safety and brings the rook to the f-file. Now the rook is active.' },
      {       userMove: 'Qd2', comment: 'Qd2 centralizes the queen and prepares to double rooks on the f-file.' },
    ],
  },
  'king-safety': {
    fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
    userColor: 'w',
    prompt: 'Fight for control of the center.',
    root: [
      {       userMove: 'Bc4', botResponse: 'Nf6', comment: 'Bc4 develops and eyes f7. But the real point is to prepare castling.' },
      {       userMove: 'Nc3', botResponse: 'Bc5', comment: 'Nc3 defends e4 and develops the last minor piece. Now White is ready to castle.' },
      {       userMove: '0-0', comment: '0-0 gets the king to safety behind a pawn wall. A castled king is much safer than a king in the center. Always castle wi' },
    ],
  },
  'pawn-structure-basics': {
    fen: 'rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2',
    userColor: 'b',
    prompt: 'Handle the pawn structure correctly.',
    root: [
      {       userMove: 'd5', botResponse: 'e5', comment: 'd5 challenges White\'s center. Black\'s pawns on e6 and d5 form a solid chain.' },
      {       userMove: 'c5', botResponse: 'c3', comment: 'c5 attacks the base of White\'s pawn chain. This is Black\'s key counterplay — attack the base of the chain!' },
      {       userMove: 'Nc6', comment: 'Nc6 increases pressure on d4. Black\'s pawn structure (e6-d5-c5) is solid but the c8 bishop remains blocked.' },
    ],
  },
  'open-files': {
    fen: 'r1bq1rk1/1ppp1ppp/p1n2n2/2b1p3/2B1P3/P1NP4/1PP2PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    prompt: 'Use an open file to your advantage.',
    root: [
      {       userMove: 'Be3', botResponse: 'Bxe3', comment: 'Be3 trades off Black\'s active bishop and opens the f-file for the rook.' },
      {       userMove: 'fxe3', botResponse: 'Nd4', comment: 'fxe3 opens the f-file. Now the rook on f1 has an open file. Rooks on open files are incredibly powerful.' },
      {       userMove: 'Rxf6', comment: 'Rxf6 trades on the open f-file, removing Black\'s knight and clearing the path for the queen to join the attack.' },
    ],
  },
  'outposts': {
    fen: 'r1bq1rk1/pppp1ppp/2n5/8/2BpP3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    prompt: 'Establish a knight outpost.',
    root: [
      {       userMove: 'Nxd4', botResponse: 'Nxd4', comment: 'Nxd4 centralizes the knight. From d4, the knight cannot be chased away by any black pawn — it\'s an outpost!' },
      {       userMove: 'Qxd4', botResponse: 'd6', comment: 'Qxd4 — the queen takes over the outpost. A centralized queen is also very powerful.' },
      {       userMove: 'Qd3', comment: 'Qd3 maintains pressure while keeping the queen safe.' },
    ],
  },
  'prophylaxis': {
    fen: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
    userColor: 'w',
    prompt: 'Find the prophylactic move.',
    root: [
      {       userMove: 'Nc3', botResponse: 'dxe4', comment: 'Nc3 develops and maintains the tension. White doesn\'t commit to exchanging yet.' },
      {       userMove: 'Nxe4', botResponse: 'Bf5', comment: 'Nxe4 recaptures. White\'s knight is active in the center.' },
      {       userMove: 'g3', comment: 'g3 prevents ...Bg4 pinning the knight. Prophylaxis in action!' },
    ],
  },
  'open-sicilian': {
    fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3',
    userColor: 'w',
    prompt: 'Play the correct moves in the Open Sicilian.',
    root: [
      {       userMove: 'd4', botResponse: 'cxd4', comment: 'd4 strikes at the heart of the Sicilian. White opens the center while Black\'s king is still uncastled.' },
      {       userMove: 'Nxd4', botResponse: 'Nf6', comment: 'Recapturing with the knight centralizes it on d4, where it eyes key squares like b5, c6, e6, and f5.' },
      {       userMove: 'Nc3', botResponse: 'a6', comment: 'Nc3 develops the other knight, protecting e4 and completing a classical development setup.' },
    ],
  },
  'italian-game': {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    prompt: 'Play the Italian Game correctly.',
    root: [
      {       userMove: 'e4', botResponse: 'e5', comment: '1.e4 opens lines for the queen and bishop while claiming central space.' },
      {       userMove: 'Nf3', botResponse: 'Nc6', comment: 'Nf3 develops a knight and attacks the e5 pawn. This is the most natural developing move.' },
      {       userMove: 'Bc4', botResponse: 'Nf6', comment: 'Bc4 — the Italian Game. The bishop targets f7, the weakest square in Black\'s camp, and prepares castling.' },
    ],
  },
  'ruy-lopez': {
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    userColor: 'w',
    prompt: 'Play the Ruy Lopez correctly.',
    root: [
      {       userMove: 'Nf3', botResponse: 'Nc6', comment: 'Developing the knight and attacking e5.' },
      {       userMove: 'Bb5', botResponse: 'a6', comment: 'The Ruy Lopez. The bishop pins the knight against the king, indirectly increasing pressure on e5. This leads to rich str' },
      {       userMove: 'Ba4', botResponse: 'Nf6', comment: 'Ba4 — the main line. White maintains the pin while avoiding the exchange, keeping pressure on Black\'s position.' },
    ],
  },
  'french-defense': {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    userColor: 'w',
    prompt: 'Play the French Defense correctly.',
    root: [
      {       userMove: 'e4', botResponse: 'e6', comment: '1.e4 starts the game actively. Against the French, White will build a big center.' },
      {       userMove: 'd4', botResponse: 'd5', comment: 'd4 establishes a classical pawn center. White dominates central space.' },
      {       userMove: 'e5', botResponse: 'c5', comment: 'e5 — the Advance Variation. White gains space and locks the center, planning to attack on the kingside.' },
    ],
  },
  'queens-gambit': {
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
    userColor: 'w',
    prompt: 'Play the Queen\'s Gambit correctly.',
    root: [
      {       userMove: 'c4', botResponse: 'e6', comment: 'The Queen\'s Gambit. White offers a pawn to undermine Black\'s center and gain control of the dark squares.' },
      {       userMove: 'Nc3', botResponse: 'Nf6', comment: 'Nc3 develops a knight and puts more pressure on d5.' },
      {       userMove: 'Bg5', comment: 'Bg5 pins the knight on f6 against the queen, a classic idea in the Queen\'s Gambit Declined. This pressures Black\'s defen' },
    ],
  },
  'iqp': {
    fen: 'r1bq1rk1/pppp1ppp/2n5/2bnp3/3P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 7',
    userColor: 'w',
    prompt: 'Handle the pawn structure correctly.',
    root: [
      {       userMove: 'Bc4', botResponse: 'Nf6', comment: 'Bc4 develops the bishop to an active square. The IQP gives White active piece play.' },
      {       userMove: 'Re1', botResponse: 'Be7', comment: 'Re1 controls the center and supports the IQP. White has active pieces but must be careful not to lose the pawn.' },
      {       userMove: 'Bd3', comment: 'Bd3 — White\'s bishop retreats but keeps pressure. The IQP gives dynamic play as long as White stays active.' },
    ],
  },
  'hanging-pawns': {
    fen: 'r1bq1rk1/ppp2ppp/2np4/4p3/2PPn3/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 8',
    userColor: 'w',
    prompt: 'Fight for control of the center.',
    root: [
      {       userMove: 'c5', botResponse: 'b6', comment: 'c5 advances one of the hanging pawns. They control important central squares d5 and e5, limiting Black\'s pieces.' },
    ],
  },
  'doubled-pawns': {
    fen: 'r1bqkb1r/pppp1ppp/8/4n3/2BPP3/8/PPP2PPP/RNBQK2R w KQkq - 0 5',
    userColor: 'w',
    prompt: 'Play the doubled pawns position correctly.',
    root: [
      {       userMove: 'Bxf7+', botResponse: 'Kxf7', comment: 'Bxf7+ forks king and knight! This works because Black\'s king is in the center.' },
      {       userMove: 'dxe5', botResponse: 'd6', comment: 'dxe5 — White has doubled pawns on e5 and e4, but Black traded a bishop for a knight. The doubled pawns are a weakness, b' },
      {       userMove: 'Qd5', comment: 'Qd5 defends both pawns. White must work hard to protect the doubled pawns.' },
    ],
  },
  'pawn-chains': {
    fen: 'rnbqkb1r/pppp1ppp/4pn2/8/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 3',
    userColor: 'w',
    prompt: 'Handle the pawn chain correctly.',
    root: [
      {       userMove: 'Bd3', botResponse: 'c5', comment: 'Bd3 develops the bishop. The pawns on d4 and e4 form a chain. d4 is the base — if it falls, the e4 pawn becomes weak.' },
      {       userMove: 'c3', botResponse: 'Nc6', comment: 'c3 defends d4. White reinforces the base of the chain.' },
      {       userMove: 'Ne2', botResponse: 'Qc7', comment: 'Ne2 develops and defends d4 again. The chain holds.' },
    ],
  },
  'carlsbad': {
    fen: 'r1bq1rk1/p1p2ppp/1ppp4/8/1P1PP3/2N2N2/P1P2PPP/R1BQ1RK1 w - - 0 9',
    userColor: 'w',
    prompt: 'Play the Carlsbad structure correctly.',
    root: [
      {       userMove: 'a4', botResponse: 'a5', comment: 'a4 supports the b4 pawn and prepares a5.' },
      {       userMove: 'b5', botResponse: 'cxb5', comment: 'b5 pushes forward! White\'s minority attack creates an isolated pawn or other weaknesses in Black\'s structure.' },
      {       userMove: 'axb5', botResponse: 'Bb7', comment: 'axb5 recaptures. Now Black has an isolated c-pawn, which White can attack.' },
    ],
  },
  'hedgehog': {
    fen: 'rn1qk2r/1p2bppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq - 2 8',
    userColor: 'w',
    prompt: 'Create a pin to restrict the opponent\'s pieces.',
    root: [
      {       userMove: '0-0', botResponse: '0-0', comment: '0-0 — White castles.' },
      {       userMove: 'f4', botResponse: 'Qc7', comment: 'f4 gains space on the kingside. White must be careful not to overextend — the Hedgehog is designed to counterattack when' },
      {       userMove: 'a4', botResponse: 'Rd8', comment: 'a4 prevents ...b5. White controls the pace, but Black\'s position remains solid.' },
    ],
  },
  'forks': {
    fen: 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4',
    userColor: 'b',
    prompt: 'Find the fork to win material.',
    root: [
      {       userMove: 'Ne4', botResponse: 'dxe4', comment: 'The knight leaps to e4, forking the white bishop on c4 and the pawn on d3. Black attacks two undefended pieces at once —' },
    ],
  },
  'pins': {
    fen: 'rnbqkb1r/pppp1ppp/4pn2/8/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 2 3',
    userColor: 'w',
    prompt: 'Create a pin to restrict the opponent\'s pieces.',
    root: [
      {       userMove: 'Bg5', botResponse: 'Be7', comment: 'Bg5 pins the knight on f6 against the black queen! The knight cannot move without losing the queen. This is the classic ' },
      {       userMove: 'Bxf6', botResponse: 'Bxf6', comment: 'Bxf6 trades bishop for knight, destroying Black\'s kingside pawn structure. Capturing pinned pieces is a key tactical the' },
    ],
  },
  'skewers': {
    fen: 'r1bq1rk1/ppp2ppp/2np4/8/3P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 6',
    userColor: 'w',
    prompt: 'Create a pin to restrict the opponent\'s pieces.',
    root: [
      {       userMove: 'Bxh7+', botResponse: 'Kxh7', comment: 'Bxh7+ — a classic bishop sacrifice! The bishop captures on h7 with check, forcing the king to move and exposing the blac' },
      {       userMove: 'Ng5+', comment: 'Ng5+ forks the king and queen! After the king moves, the knight captures the queen on d8. The skewer was on the king\'s p' },
    ],
  },
  'discovered-attacks': {
    fen: 'r1bq1rk1/pppp1ppp/2n2n2/2b1P3/2B5/2NP4/PPP2PPP/R1BQ1RK1 w - - 0 6',
    userColor: 'w',
    prompt: 'Unleash a discovered attack.',
    root: [
      {       userMove: 'exf6', botResponse: 'gxf6', comment: 'exf6 uncovers an attack from the bishop on c4 against f7! At the same time, the pawn captures the knight on f6. Black ca' },
      {       userMove: 'Bxf7+', comment: 'Bxf7+ wins a pawn and forces the king to move, destroying Black\'s castling rights. The discovered attack was a success!' },
    ],
  },
  'double-checks': {
    fen: '8/6k1/8/8/3N4/8/8/B6K w - - 0 1',
    userColor: 'w',
    prompt: 'Unleash a discovered attack.',
    root: [
      {       userMove: 'Ne6+', botResponse: 'Kf7', comment: 'Ne6+ delivers check to the black king on g7. But look closer — the knight was blocking the bishop on a1\'s diagonal to g7' },
      {       userMove: 'Nd8+', comment: 'Nd8+ keeps the pressure on. Double checks are devastating because they force the king to run, often into a mating net or' },
    ],
  },
};

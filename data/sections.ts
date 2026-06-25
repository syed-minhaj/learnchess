import { Section } from '@/types';

export const sections: Section[] = [
  {
    id: 'openings',
    title: 'Chess Openings',
    description: 'Master the most important chess openings and understand the strategic ideas behind each move.',
    icon: '♟',
    lessonIds: ['open-sicilian', 'italian-game', 'ruy-lopez', 'french-defense', 'queens-gambit'],
  },
  {
    id: 'tactics',
    title: 'Tactical Patterns',
    description: 'Learn the essential tactical motifs that win games: forks, pins, skewers, and more.',
    icon: '⚡',
    lessonIds: ['forks', 'pins', 'skewers', 'discovered-attacks', 'double-checks'],
  },
  {
    id: 'middlegame',
    title: 'Middlegame Strategy',
    description: 'Strategic concepts that separate masters from amateurs: center control, piece activity, king safety, and more.',
    icon: '🏛️',
    lessonIds: [
      'center-control', 'piece-activity', 'king-safety', 'pawn-structure-basics',
      'open-files', 'outposts', 'prophylaxis',
    ],
  },
  {
    id: 'endgame',
    title: 'Endgame Fundamentals',
    description: 'Convert winning positions and save draws with essential endgame techniques.',
    icon: '👑',
    lessonIds: [
      'opposition', 'rook-endgames', 'bishop-vs-knight', 'queen-endgames',
      'kq-checkmate', 'kr-checkmate', 'kbb-kn-checkmate',
    ],
  },
  {
    id: 'checkmates',
    title: 'Checkmate Patterns',
    description: 'Recognize and deliver the most common checkmate patterns that end games decisively.',
    icon: '⚔️',
    lessonIds: ['back-rank', 'smothered', 'anastasia', 'bodens', 'greek-gift', 'epaulette'],
  },
  {
    id: 'famous-games',
    title: 'Famous Games',
    description: 'Study the greatest chess games ever played and learn from the masters.',
    icon: '📜',
    lessonIds: [
      'opera-game', 'immortal-game', 'evergreen-game',
      'game-of-the-century', 'deep-blue-kasparov', 'carlsen-karjakin',
    ],
  },
  {
    id: 'pawn-structures',
    title: 'Pawn Structures',
    description: 'Understand how pawn formations dictate the flow of the game and guide your planning.',
    icon: '🧱',
    lessonIds: [
      'iqp', 'hanging-pawns', 'doubled-pawns',
      'pawn-chains', 'carlsbad', 'hedgehog',
    ],
  },
  {
    id: 'defense',
    title: 'Defense & Counterplay',
    description: 'Learn to defend difficult positions, create counterplay, and turn the tables.',
    icon: '🛡️',
    lessonIds: [
      'threat-recognition', 'resourceful-defense', 'counterplay',
      'fortresses', 'perpetual-check', 'zugzwang',
    ],
  },
];

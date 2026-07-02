import { describe, it, expect } from 'vitest';
import { Chess } from 'chess.js';
import { TestNode } from '@/types';

/**
 * Core test engine logic (same as test page).
 * These tests verify move matching, tree traversal, pass/fail conditions.
 */

function findMatch(currentNodes: TestNode[], game: Chess, from: string, to: string): TestNode | null {
  const testGame = new Chess(game.fen());
  try {
    testGame.move({ from, to, promotion: 'q' });
  } catch {
    return null;
  }
  const playedFen = testGame.fen();

  for (const node of currentNodes) {
    try {
      const expected = new Chess(game.fen());
      expected.move(node.userMove);
      if (expected.fen() === playedFen) {
        return node;
      }
    } catch {
      continue;
    }
  }
  return null;
}

function getDepth(node: TestNode): number {
  if (!node.children || node.children.length === 0) return 1;
  return 1 + Math.max(...node.children.map(getDepth));
}

describe('findMatch', () => {
  it('matches a correct user move', () => {
    const fen = 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4';
    const nodes: TestNode[] = [
      { userMove: 'Ne4', botResponse: 'dxe4' },
    ];
    const game = new Chess(fen);
    const match = findMatch(nodes, game, 'f6', 'e4');
    expect(match).not.toBeNull();
    expect(match!.userMove).toBe('Ne4');
  });

  it('rejects a wrong move', () => {
    const fen = 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4';
    const nodes: TestNode[] = [
      { userMove: 'Ne4', botResponse: 'dxe4' },
    ];
    const game = new Chess(fen);
    const match = findMatch(nodes, game, 'g8', 'f6');
    expect(match).toBeNull();
  });

  it('selects correct branch from multiple options', () => {
    const fen = 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5';
    const nodes: TestNode[] = [
      { userMove: '0-0', botResponse: 'Be7' },
      { userMove: 'd3', botResponse: 'Be7' },
    ];
    const game = new Chess(fen);
    const match = findMatch(nodes, game, 'd2', 'd3');
    expect(match).not.toBeNull();
    expect(match!.userMove).toBe('d3');
  });

  it('handles promotion moves', () => {
    const fen = '8/2P5/8/8/8/8/8/k1K5 w - - 0 1';
    const nodes: TestNode[] = [
      { userMove: 'c8=Q' },
    ];
    const game = new Chess(fen);
    const match = findMatch(nodes, game, 'c7', 'c8');
    expect(match).not.toBeNull();
  });

  it('rejects moves from wrong square', () => {
    const fen = 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4';
    const nodes: TestNode[] = [
      { userMove: 'Ne4', botResponse: 'dxe4' },
    ];
    const game = new Chess(fen);
    const match = findMatch(nodes, game, 'b8', 'c6');
    expect(match).toBeNull();
  });
});

describe('tree traversal', () => {
  it('passes after reaching a leaf node', () => {
    const leaf: TestNode = { userMove: 'Qxf7#', botResponse: undefined };
    expect(leaf.children).toBeUndefined();
    expect(getDepth(leaf)).toBe(1);
  });

  it('computes depth of linear chain', () => {
    const chain: TestNode = {
      userMove: 'Ne4',
      botResponse: 'dxe4',
      children: [
        {
          userMove: 'Qh4+',
          botResponse: 'g3',
        },
      ],
    };
    expect(getDepth(chain)).toBe(2);
  });

  it('computes depth of branching tree', () => {
    const tree: TestNode = {
      userMove: 'Nf3',
      botResponse: 'Nf6',
      children: [
        { userMove: 'Ng5', botResponse: 'd5' },
        { userMove: 'd4', botResponse: 'exd4' },
      ],
    };
    expect(getDepth(tree)).toBe(2);
  });

  it('a node with empty children array is not a leaf', () => {
    const node: TestNode = {
      userMove: 'e4',
      botResponse: 'c5',
      children: [],
    };
    expect(node.children!.length).toBe(0);
    expect(getDepth(node)).toBe(1);
  });
});

describe('pass/fail conditions', () => {
  it('correct move sequence passes', () => {
    const fen = 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4';
    const root: TestNode[] = [
      {
        userMove: 'Ne4',
        botResponse: 'dxe4',
        children: [
          { userMove: 'Qh4+', botResponse: 'g3' },
        ],
      },
    ];

    const game = new Chess(fen);

    // Step 1: user plays Ne4
    const match1 = findMatch(root, game, 'f6', 'e4');
    expect(match1).not.toBeNull();
    game.move('Ne4');
    game.move('dxe4');
    expect(game.turn()).toBe('b');

    // Step 2: user plays Qh4+
    const children = match1!.children!;
    const match2 = findMatch(children, game, 'd8', 'h4');
    expect(match2).not.toBeNull();
    expect(match2!.children).toBeUndefined();

    // Pass condition: no children → pass
    const isLeaf = !match2!.children || match2!.children.length === 0;
    expect(isLeaf).toBe(true);
  });

  it('wrong move at any step fails', () => {
    const fen = 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4';
    const root: TestNode[] = [
      {
        userMove: 'Ne4',
        botResponse: 'dxe4',
      },
    ];

    const game = new Chess(fen);
    const match = findMatch(root, game, 'f6', 'g4');
    expect(match).toBeNull();
  });

  it('any valid branch in root can be chosen', () => {
    const root: TestNode[] = [
      { userMove: 'e4', botResponse: 'c5' },
      { userMove: 'd4', botResponse: 'Nf6' },
      { userMove: 'Nf3', botResponse: 'd5' },
    ];

    const game = createGame();
    const match = findMatch(root, game, 'e2', 'e4');
    expect(match).not.toBeNull();
    expect(match!.userMove).toBe('e4');
  });
});

function createGame(): Chess {
  return new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
}

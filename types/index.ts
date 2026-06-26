export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type PieceColor = 'w' | 'b';

export interface LessonMove {
  san: string;
  explanation: string;
  hint?: string;
}

export interface AlternativeLine {
  moves: LessonMove[];
  label: string;
}

export interface QuizQuestion {
  fen: string;
  prompt: string;
  correctSan: string;
  options: { san: string; label: string }[];
  explanation: string;
}

export interface TestNode {
  userMove: string;
  botResponse?: string;
  comment?: string;
  children?: TestNode[];
}

export interface TestScenario {
  fen: string;
  userColor: PieceColor;
  prompt: string;
  root: TestNode[];
}

export interface Lesson {
  id: string;
  sectionId: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  startingFen: string;
  userColor: PieceColor;
  mainLine: LessonMove[];
  alternatives?: AlternativeLine[];
  estimatedMinutes: number;
  quiz?: QuizQuestion[];
  test?: TestScenario;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessonIds: string[];
}

export interface UserProgress {
  completedLessons: string[];
  currentLessonId: string | null;
  lessonMovesPlayed: Record<string, number>;
  quizScores: Record<string, number>;
  passedTests: string[];
}

export interface MoveRecord {
  san: string;
  isBot: boolean;
  explanation?: string;
}

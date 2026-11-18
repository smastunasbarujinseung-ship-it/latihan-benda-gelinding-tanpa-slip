export type QuestionKind = 'pg' | 'pg_complex' | 'true_false' | 'numeric';

export interface StudentIdentity {
  fullName: string;
  className: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  text: string;
}

export interface TrueFalseStatement {
  id: string;
  text: string;
}

export interface NumericTutorial {
  rules: string[];
  neutralExample: string;
}

export interface QuestionDataRow {
  label: string;
  value: string;
}

export interface PhysicsQuestion {
  id: number;
  kind: QuestionKind;
  kindLabel: string;
  topic: string;
  maxScore: number;
  stimulusTitle: string;
  stimulusText: string;
  dataTable?: QuestionDataRow[];
  prompt: string;
  options?: QuestionOption[];
  statements?: TrueFalseStatement[];
  unit?: string;
  inputPlaceholder?: string;
  tutorial?: NumericTutorial;
  speechSummary: string;
}

export type StudentAnswerValue =
  | string // 'pg': option id ('A'..'E'), or 'numeric': raw string
  | string[] // 'pg_complex': selected option ids
  | Record<string, boolean | null>; // 'true_false': statement id -> true | false | null

export type StudentAnswersMap = Record<number, StudentAnswerValue>;

export type QuestionStatus = 'unanswered' | 'current' | 'answered';

export interface QuizSessionState {
  student: StudentIdentity;
  answers: StudentAnswersMap;
  currentQuestionIndex: number;
  startedAt: string;
  lastSavedAt: string;
  submittedAt: string | null;
  status: 'Sedang Mengerjakan' | 'Selesai Mengerjakan';
}

export interface NumericAnswerKey {
  kind: 'numeric';
  expected: number;
  absTolerance: number;
  relTolerance: number;
  displayKey: string;
}

export interface PgAnswerKey {
  kind: 'pg';
  correctOptionId: string;
  displayKey: string;
}

export interface PgComplexAnswerKey {
  kind: 'pg_complex';
  correctOptionIds: string[];
  displayKey: string;
}

export interface TrueFalseAnswerKey {
  kind: 'true_false';
  correctMap: Record<string, boolean>;
  displayKey: string;
}

export type AnswerKey =
  | PgAnswerKey
  | PgComplexAnswerKey
  | TrueFalseAnswerKey
  | NumericAnswerKey;

export interface ExplanationSections {
  identifikasiMasalah: string[];
  diketahui: string[];
  ditanyakan: string;
  landasanTeori: string[];
  fbdTitle: string;
  fbdCaption: string;
  penyelesaianMatematis: string[];
  interpretasiHasil: string;
  kesimpulan: string;
  kesalahanUmum: string[];
}

export interface QuestionResultBreakdown {
  questionId: number;
  kind: QuestionKind;
  topic: string;
  isAnswered: boolean;
  isCorrect: boolean;
  rawScore: number;
  maxScore: number;
  studentAnswerDisplay: string;
  correctAnswerDisplay: string;
  errorNote: string | null;
  trueFalseDetails?: Array<{
    statementId: string;
    studentChoice: boolean | null;
    correctChoice: boolean;
    points: number;
  }>;
}

export interface QuizGradingSummary {
  totalRawScore: number;
  normalizedFinalScore: number;
  answeredCount: number;
  unansweredCount: number;
  breakdown: QuestionResultBreakdown[];
  durationFormatted: string;
  durationSeconds: number;
  errorAnalysis: string[];
}

export type NumericValidationState =
  | { state: 'empty'; message: null }
  | { state: 'valid'; value: number; message: null }
  | { state: 'invalid'; message: string };

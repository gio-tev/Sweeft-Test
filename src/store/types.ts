type QuestionsState = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[];

export type TestState = {
  questions: QuestionsState;
  currentQuestionIndex: number;
  testScore: number;
  userAnswers: boolean[];
  setQeustions: (by: QuestionsState) => void;
  updateState: (updates: {
    currentQuestionIndex: number;
    testScore: number;
  }) => void;
  resetState: (updates: {
    currentQuestionIndex: number;
    testScore: number;
    questions?: never[];
  }) => void;
};

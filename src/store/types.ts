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
  setQeustions: (by: QuestionsState) => void;
  updateState: (by?: boolean) => void;
};

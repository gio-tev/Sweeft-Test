import {create} from 'zustand';

// const t = {
//   category: 'Entertainment: Film',
//   type: 'multiple',
//   difficulty: 'easy',
//   question:
//     'Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?',
//   correct_answer: 'Michael Keaton',
//   incorrect_answers: ['George Clooney', 'Val Kilmer', 'Adam West'],
// };

// const tt = {
//   category: 'Entertainment: Film',
//   type: 'boolean',
//   difficulty: 'easy',
//   question:
//     'Han Solo&#039;s co-pilot and best friend, &quot;Chewbacca&quot;, is an Ewok.',
//   correct_answer: 'False',
//   incorrect_answers: ['True'],
// };

type QuestionsState = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[];

type TestState = {
  questions: QuestionsState;
  currentQuestionIndex: number;
  currentTestScore: number;
  setQeustions: (by: QuestionsState) => void;
};

const useTestStore = create<TestState>(set => ({
  questions: [],
  currentQuestionIndex: 0,
  currentTestScore: 0,

  setQeustions: questions => {
    set({questions});
  },
}));

export default useTestStore;

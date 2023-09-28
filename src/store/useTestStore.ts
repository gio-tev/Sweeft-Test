import {create} from 'zustand';
import {TestState} from './types';

const useTestStore = create<TestState>(set => ({
  questions: [],
  currentQuestionIndex: 0,
  testScore: 0,

  setQeustions: questions => {
    set({questions});
  },

  updateState: (correctAnswer = false) => {
    console.log('updateState called with value', correctAnswer);

    set(state => ({
      ...state,
      currentQuestionIndex:
        state.questions.length - 1 > state.currentQuestionIndex
          ? state.currentQuestionIndex + 1
          : state.currentQuestionIndex,
      testScore: correctAnswer ? state.testScore + 1 : state.testScore,
    }));
  },
}));

export default useTestStore;

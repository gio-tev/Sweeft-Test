import {create} from 'zustand';
import {TestState} from './types';

const useTestStore = create<TestState>(set => ({
  questions: [],
  currentQuestionIndex: 0,
  testScore: 0,
  userAnswers: [],

  setQeustions: questions => {
    set({questions});
  },

  updateState: updates => {
    set(state => ({
      ...state,
      ...updates,
    }));
  },

  resetState: defaults => {
    set(state => ({
      ...state,
      ...defaults,
    }));
  },
}));

export default useTestStore;

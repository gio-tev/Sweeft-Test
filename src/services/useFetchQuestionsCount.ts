import {useState, useCallback} from 'react';
import {
  QUESTION_COUNT_URL,
  CATEGORY_QUESTIONS_COUNT_MAP,
} from './utils/constants';
import {QuestionsCountTypes} from './types';

const useFetchQuestionsCount = () => {
  const [questionsCountRes, setQuestionsCountRes] = useState(0);
  const [countLoading, setCountLoading] = useState(false);
  const [countError, setCountError] = useState('');

  const fetchQuestionsCount = useCallback(
    async ({categoryId, difficulty}: QuestionsCountTypes) => {
      try {
        setCountLoading(true);

        const res = await fetch(`${QUESTION_COUNT_URL}${categoryId}`);
        const data = await res.json();

        if (!data.category_id) {
          throw new Error('Fetching category question count failed.');
        }

        const questionsCount =
          data.category_question_count[
            CATEGORY_QUESTIONS_COUNT_MAP[difficulty]
          ];

        setQuestionsCountRes(questionsCount);
      } catch (err) {
        console.error(err, '---------error----------');
        if (err instanceof Error) {
          setCountError(err.message);
        }
      } finally {
        setCountLoading(false);
      }
    },
    [],
  );

  return {questionsCountRes, countLoading, countError, fetchQuestionsCount};
};

export default useFetchQuestionsCount;

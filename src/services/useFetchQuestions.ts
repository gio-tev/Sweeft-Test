import {useState, useCallback} from 'react';
import {
  fetchQuestionsCount,
  getQuestionUrl,
  fetchToken,
  handleResponseError,
} from './utils/helpers';
import {QueryTypes} from './types';

const useFetchQuestions = () => {
  const [questionsRes, setQuestionsRes] = useState([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [questionsError, setQuestionsError] = useState(false);

  const fetchQuestions = useCallback(async (queries: QueryTypes) => {
    try {
      setQuestionsLoading(true);

      const {category, difficulty} = queries;

      const questionsCount = await fetchQuestionsCount(category, difficulty);
      const token = await fetchToken();
      const amount = questionsCount < 10 ? questionsCount : 10;
      const allQueries = {category, difficulty, amount, token};

      const res = await fetch(getQuestionUrl(allQueries));
      const data = await res.json();

      handleResponseError(data, 'Fetching questions failed.');

      setQuestionsRes(data.results);
    } catch (err) {
      console.error(err, '---------error----------');
      if (err instanceof Error) {
        setQuestionsError(true);
      }
    } finally {
      setQuestionsLoading(false);
      setQuestionsRes([]);
    }
  }, []);

  return {questionsRes, questionsLoading, questionsError, fetchQuestions};
};

export default useFetchQuestions;

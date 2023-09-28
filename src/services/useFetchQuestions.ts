import {useState, useCallback} from 'react';
import {
  fetchQuestionsCount,
  getQuestionUrl,
  fetchNewToken,
  handleResponseError,
} from './utils/helpers';
import {QueryTypes} from './types';

const useFetchQuestions = () => {
  const [questionsRes, setQuestionsRes] = useState([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [questionsError, setQuestionsError] = useState('');

  const fetchQuestions = useCallback(async (queries: QueryTypes) => {
    try {
      setQuestionsLoading(true);

      const {category, difficulty} = queries;
      const questionsCount = await fetchQuestionsCount(category, difficulty);
      const amount = questionsCount < 10 ? questionsCount : 10;
      const quesriesWithAmount = {amount, ...queries};

      let res = await fetch(getQuestionUrl(quesriesWithAmount));
      let data = await res.json();

      if (data.response_code === 3 || data.response_code === 4) {
        const newToken = await fetchNewToken();
        const queriesWithNewToken = {...quesriesWithAmount, token: newToken};

        res = await fetch(getQuestionUrl(queriesWithNewToken));
        data = await res.json();
      }

      handleResponseError(data, 'Fetching questions failed.');

      setQuestionsRes(data.results);
    } catch (err) {
      console.error(err, '---------error----------');
      if (err instanceof Error) {
        setQuestionsError(err.message);
      }
    } finally {
      setQuestionsLoading(false);
      setQuestionsRes([]);
    }
  }, []);

  return {questionsRes, questionsLoading, questionsError, fetchQuestions};
};

export default useFetchQuestions;

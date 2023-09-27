import {useState, useCallback} from 'react';
import {
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

      let res = await fetch(getQuestionUrl(queries));
      let data = await res.json();

      if (data.response_code === 3 || data.response_code === 4) {
        const newToken = await fetchNewToken();
        const queriesWithNewToken = {...queries, token: newToken};

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
    }
  }, []);

  return {questionsRes, questionsLoading, questionsError, fetchQuestions};
};

export default useFetchQuestions;

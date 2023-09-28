import {
  BASE_URL,
  NEW_TOKEN_URL,
  QUESTION_COUNT_URL,
  CATEGORY_QUESTIONS_COUNT_MAP,
} from './constants';
import {QuesriesWithAmountTypes} from '../types';

export const getQuestionUrl = ({
  amount,
  category,
  difficulty,
  token,
}: QuesriesWithAmountTypes) => {
  return `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}&token=${token}`;
};

export const handleResponseError = (data: any, errorMessage: string) => {
  if (data.response_code !== 0) {
    throw new Error(errorMessage);
  }
};

export const fetchNewToken = async () => {
  const res = await fetch(NEW_TOKEN_URL);
  const data = await res.json();

  handleResponseError(data, 'retrieving new token failed.');

  return data.token;
};

export const fetchQuestionsCount = async (
  category: number,
  difficulty: string,
) => {
  const res = await fetch(`${QUESTION_COUNT_URL}${category}`);
  const data = await res.json();

  if (!data.category_id) {
    throw new Error('Fetching category question count failed.');
  }

  const questionsCount =
    data.category_question_count[CATEGORY_QUESTIONS_COUNT_MAP[difficulty]];

  return questionsCount;
};

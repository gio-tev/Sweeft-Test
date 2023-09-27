import {BASE_URL, NEW_TOKEN_URL} from './constants';
import {QueryTypes} from '../types';

export const getQuestionUrl = ({
  amount,
  category,
  difficulty,
  token,
}: QueryTypes) => {
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

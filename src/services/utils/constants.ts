export const BASE_URL = 'https://opentdb.com/api.php';
export const CATEGORIES_URL = 'https://opentdb.com/api_category.php';
export const QUESTION_COUNT_URL = 'https://opentdb.com/api_count.php?category=';
export const NEW_TOKEN_URL =
  'https://opentdb.com/api_token.php?command=request';

export const CATEGORY_QUESTIONS_COUNT_MAP: Record<string, string> = {
  easy: 'total_easy_question_count',
  medium: 'total_medium_question_count',
  hard: 'total_hard_question_count',
};

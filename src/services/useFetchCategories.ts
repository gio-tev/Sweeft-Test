import {useState, useEffect} from 'react';
import {CATEGORIES_URL} from './utils/constants';

const useFetchCategories = () => {
  const [categoriesRes, setCategoriesRes] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setCategoriesLoading(true);

        const res = await fetch(CATEGORIES_URL);
        const data = await res.json();

        if (!data.trivia_categories.length) {
          throw new Error('fetching all categories failed.');
        }

        setCategoriesRes(data.trivia_categories);
      } catch (err) {
        console.error(err, '---------error----------');
        if (err instanceof Error) {
          setCategoriesError(err.message);
        }
      } finally {
        setCategoriesLoading(false);
      }
    })();
  }, []);

  return {categoriesRes, categoriesLoading, categoriesError};
};

export default useFetchCategories;

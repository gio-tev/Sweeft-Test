import {useState} from 'react';
import {List} from 'react-native-paper';
import useFetchCategories from '../../../services/useFetchCategories';
import Error from '../../Error';
import {ActivityIndicator} from 'react-native-paper';
import AccordionList from './AccordionList';
import CategoryItemsList from './CategoryItemsList';
import DifficultyItemsList from './DifficultyItemsList';
import {AccordionPropsTypes} from './types';

const Accordion = ({
  onCategoryIdChange,
  onDifficultyChange,
}: AccordionPropsTypes) => {
  const {categoriesRes, categoriesLoading, categoriesError} =
    useFetchCategories();

  const [expandedCategory, setExpandedCategory] = useState(false);
  const [expandedDifficulty, setExpandedDifficulty] = useState(false);

  const [categoryTitle, setCategoryTitle] = useState<string>('Select Category');
  const [difficultyTitle, setDifficultyTitle] =
    useState<string>('Select Difficulty');

  const handleCategoryPress = () => {
    setExpandedCategory(prevState => !prevState);
  };
  const handleCategoryItemPress = (name: string, id: number) => {
    setCategoryTitle(name);
    onCategoryIdChange(id);
    setExpandedCategory(prevState => !prevState);
  };

  const handleDifficultyPress = () => {
    setExpandedDifficulty(prevState => !prevState);
  };
  const handleDifficultyItemPress = (item: string) => {
    setDifficultyTitle(item);
    onDifficultyChange(item[0].toLowerCase() + item.slice(1));
    setExpandedDifficulty(prevState => !prevState);
  };

  if (categoriesLoading) return <ActivityIndicator />;

  if (categoriesError) return <Error />;

  return (
    <List.Section style={{gap: 20, width: '80%'}}>
      <AccordionList
        title={categoryTitle}
        expanded={expandedCategory}
        onPress={handleCategoryPress}>
        <CategoryItemsList
          handleCategoryItemPress={handleCategoryItemPress}
          categoriesRes={categoriesRes}
        />
      </AccordionList>

      <AccordionList
        title={difficultyTitle}
        expanded={expandedDifficulty}
        onPress={handleDifficultyPress}>
        <DifficultyItemsList
          handleDifficultyItemPress={handleDifficultyItemPress}
        />
      </AccordionList>
    </List.Section>
  );
};

export default Accordion;

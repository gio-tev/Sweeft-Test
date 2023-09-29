import {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native-paper';
import useFetchQuestions from '../../services/useFetchQuestions';
import useFetchCategories from '../../services/useFetchCategories';
import useTestStore from '../../store/useTestStore';
import Error from '../../components/error/Error';
import Accordion from './accordion/Accordion';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import {getHomeStyles} from './Home.styles';

const Home = () => {
  const {categoriesRes, categoriesLoading, categoriesError} =
    useFetchCategories();
  const {questionsRes, questionsLoading, questionsError, fetchQuestions} =
    useFetchQuestions();

  const [categoryId, setCategoryId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');

  const {setQeustions} = useTestStore(state => state);

  const navigation = useNavigation<StackNavigationProp<any>>();

  const styles = getHomeStyles();

  useEffect(() => {
    if (questionsRes.length) {
      setQeustions(questionsRes);

      navigation.navigate('Question');
    }
  }, [questionsRes, setQeustions, navigation]);

  const onCategoryIdChange = (val: number) => {
    setCategoryId(val);
  };
  const onDifficultyChange = (val: string) => {
    setDifficulty(val);
  };

  const handleStartTestPress = () => {
    const category = categoryId;
    fetchQuestions({category, difficulty});
  };

  if (categoriesLoading) return <ActivityIndicator style={styles.container} />;

  if (categoriesError || questionsError) return <Error />;

  return (
    <View style={styles.container}>
      <Title title="Sweeft Test" />

      <Accordion
        categoriesRes={categoriesRes}
        onCategoryIdChange={onCategoryIdChange}
        onDifficultyChange={onDifficultyChange}
      />

      <Button
        title="Start Test"
        disabled={!categoryId || !difficulty}
        handlePress={handleStartTestPress}
        loading={questionsLoading}
      />
    </View>
  );
};

export default Home;

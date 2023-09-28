import {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import useFetchQuestions from '../services/useFetchQuestions';
import {TOKEN} from '../services/utils/constants';
import useTestStore from '../store/useTestStore';
import Error from '../components/Error';
import Accordion from '../components/home/accordion/Accordion';
import Title from '../components/home/title/Title';
import Button from '../components/button/Button';

const Home = () => {
  const {questionsRes, questionsLoading, questionsError, fetchQuestions} =
    useFetchQuestions();

  const [categoryId, setCategoryId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');

  const {setQeustions} = useTestStore(state => state);

  const navigation = useNavigation<StackNavigationProp<any>>();

  const styles = getStyles();

  console.log('categoryId', categoryId, 'difficulty', difficulty);

  useEffect(() => {
    if (questionsRes.length) {
      setQeustions(questionsRes);

      // setCategoryId(0);
      // setDifficulty('');

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
    const token = TOKEN;

    fetchQuestions({category, difficulty, token});
  };

  if (questionsError) return <Error />;

  return (
    <View style={styles.container}>
      <Title />

      <Accordion
        onCategoryIdChange={onCategoryIdChange}
        onDifficultyChange={onDifficultyChange}
      />

      <Button
        loading={questionsLoading}
        title="Start Test"
        disabled={!categoryId || !difficulty}
        handleStartTestPress={handleStartTestPress}
      />
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      gap: 70,
      backgroundColor: 'white',
    },
  });
};

export default Home;

import {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import useFetchQuestions from '../services/useFetchQuestions';
import {TOKEN} from '../services/utils/constants';
import useTestStore from '../store/useTestStore';
import Error from '../components/Error';
import Accordion from '../components/home/accordion/Accordion';
import Title from '../components/title/Title';
import Button from '../components/button/Button';

const Home = () => {
  const {questionsRes, questionsLoading, questionsError, fetchQuestions} =
    useFetchQuestions();

  const [categoryId, setCategoryId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');

  const {setQeustions} = useTestStore(state => state);

  const navigation = useNavigation<StackNavigationProp<any>>();

  const styles = getStyles();

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
    const token = TOKEN;

    fetchQuestions({category, difficulty, token});
  };

  if (questionsError) return <Error />;

  return (
    <View style={styles.container}>
      <Title title="Sweeft Test" />

      <Accordion
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

import {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native-paper';
import useFetchQuestionsCount from '../services/useFetchQuestionsCount';
import useFetchQuestions from '../services/useFetchQuestions';
import useTestStore from '../store/useTestStore';
import Error from '../components/Error';
import Accordion from '../components/home/accordion/Accordion';
import {TOKEN} from '../services/utils/constants';
import Title from '../components/home/title/Title';
import Button from '../components/home/homeButton/HomeButton';

const Home = () => {
  const {questionsCountRes, countLoading, countError, fetchQuestionsCount} =
    useFetchQuestionsCount();
  const {questionsRes, questionsLoading, questionsError, fetchQuestions} =
    useFetchQuestions();

  const [categoryId, setCategoryId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');

  const {setQeustions} = useTestStore(state => state);

  const navigation = useNavigation<StackNavigationProp<any>>();

  console.log('categoryId', categoryId, 'difficulty', difficulty);

  useEffect(() => {
    if (questionsCountRes && categoryId && difficulty) {
      const amount = questionsCountRes < 10 ? questionsCountRes : 10;
      const category = categoryId;
      const token = TOKEN;

      fetchQuestions({amount, category, difficulty, token});
    }
  }, [questionsCountRes, categoryId, difficulty, fetchQuestions]);

  useEffect(() => {
    if (questionsRes.length) {
      setQeustions(questionsRes);

      setCategoryId(0);
      setDifficulty('');

      navigation.navigate('Question', {currentQuestionIndex: 0});
    }
  }, [questionsRes, setQeustions, navigation]);

  const onCategoryIdChange = (val: number) => {
    setCategoryId(val);
  };
  const onDifficultyChange = (val: string) => {
    setDifficulty(val);
  };

  const handleStartTestPress = () => {
    fetchQuestionsCount({categoryId, difficulty});
  };

  if (countLoading || questionsLoading) return <ActivityIndicator />;

  if (countError || questionsError) {
    console.log(countError);
    console.log(questionsError);

    return <Error />;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        gap: 70,
        backgroundColor: 'white',
      }}>
      <Title />

      <Accordion {...{onCategoryIdChange, onDifficultyChange}} />

      <Button
        disabled={!categoryId || !difficulty}
        handleStartTestPress={handleStartTestPress}
      />
    </View>
  );
};

export default Home;

// const ListView

// const ListItem = ({
//   handler,
//   name,
//   id,
// }: {
//   handler: (name: string, id: number) => void;
//   // handler: (val: any) => void;
//   name: string;
//   id?: number;
// }) => {
//   return (
//     <List.Item
//       key={id ? id : name}
//       title={name}
//       onPress={() => handler(id ? id : name)}
//       style={{backgroundColor: 'grey'}}
//     />
//   );
// };

// <List.Item
//   key={id}
//   title={name}
//   onPress={() => handleCategoryItemPress(id)}
//   style={{backgroundColor: 'grey'}}
// />

// <List.Item
//   key={name}
//   title={name}
//   onPress={() => handleDifficultyItemPress(name)}
//   style={{backgroundColor: 'grey'}}
// />

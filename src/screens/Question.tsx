import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import useTestStore from '../store/useTestStore';
import Title from '../components/title/Title';
import he from 'he';
import Answers from '../components/question/Answers';
import {useTheme} from 'react-native-paper';
import Button from '../components/button/Button';

const Question = () => {
  const {questions, currentQuestionIndex, updateState} = useTestStore(
    state => state,
  );

  const [value, setValue] = useState<string>('');

  const navigation = useNavigation<StackNavigationProp<any>>();

  const {
    colors: {
      elevation: {level5},
    },
  } = useTheme();

  const styles = getStyles(level5);

  const {
    correct_answer,
    incorrect_answers,
    question: encodedQuestion,
  } = questions[currentQuestionIndex];

  const questionTitle = `Question ${currentQuestionIndex + 1}`;
  const question = he.decode(encodedQuestion);
  const answers = [...incorrect_answers, correct_answer];

  const onAnswerChange = (answer: string) => {
    setValue(answer);
  };

  const handleNextQuestionPress = () => {
    if (value === correct_answer) updateState(true);
    else updateState();

    if (currentQuestionIndex < questions.length - 1) {
      navigation.push('Question');
    } else {
      navigation.navigate('Results');
    }
  };

  return (
    <View style={styles.container}>
      <Title title={questionTitle} />

      <Text style={styles.question}>{question}</Text>

      <Answers
        answers={answers}
        value={value}
        onAnswerChange={onAnswerChange}
      />

      <Button
        title="Next Question"
        disabled={!value}
        handlePress={handleNextQuestionPress}
      />
    </View>
  );
};

const getStyles = (borderBottomColor: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      gap: 40,
    },
    question: {
      fontSize: 18,
      color: 'black',
      width: '80%',
      // paddingHorizontal: 30,
      textAlign: 'center',
      borderBottomWidth: 1,
      borderBottomColor,
      paddingBottom: 10,
    },
  });
};

export default Question;

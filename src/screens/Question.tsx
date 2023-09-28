import {useState} from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTheme, ProgressBar} from 'react-native-paper';
import useTestStore from '../store/useTestStore';
import Title from '../components/title/Title';
import he from 'he';
import Answers from '../components/question/Answers';
import Button from '../components/button/Button';
import QuestionText from '../components/question/QuestionText';

const Question = () => {
  const {questions, currentQuestionIndex, testScore, updateState} =
    useTestStore(state => state);

  const navigation = useNavigation<StackNavigationProp<any>>();

  const {width} = useWindowDimensions();

  const [value, setValue] = useState<string>('');

  const {
    colors: {primary},
  } = useTheme();

  const styles = getStyles();

  const {
    correct_answer: encodedCorectAnswer,
    incorrect_answers: encodedIncorectAnswers,
    question: encodedQuestion,
  } = questions[currentQuestionIndex];

  const questionTitle = `Question ${currentQuestionIndex + 1}`;
  const correctAnswer = he.decode(encodedCorectAnswer);
  const incorrectAnswers = encodedIncorectAnswers.map(ans => he.decode(ans));
  const question = he.decode(encodedQuestion);
  const answers = [...incorrectAnswers, correctAnswer];

  const progress = (currentQuestionIndex + 1) / questions.length;

  const onAnswerChange = (answer: string) => {
    setValue(answer);
  };

  const handleNextQuestionPress = () => {
    const isValueCorrect = value === correctAnswer;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const updates = {
      currentQuestionIndex: isLastQuestion
        ? currentQuestionIndex
        : currentQuestionIndex + 1,
      testScore: isValueCorrect ? testScore + 1 : testScore,
    };

    updateState(updates);

    if (isLastQuestion) navigation.navigate('Results');
    else navigation.push('Question');
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} color={primary} style={{width: width}} />

      <View style={styles.innerContainer}>
        <Title title={questionTitle} />

        <QuestionText question={question} />

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
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    innerContainer: {
      alignItems: 'center',
      gap: 40,
    },
  });
};

export default Question;

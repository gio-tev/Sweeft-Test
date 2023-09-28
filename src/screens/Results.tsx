import {View, StyleSheet} from 'react-native';
import useTestStore from '../store/useTestStore';
import Title from '../components/title/Title';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import ResultButtons from '../components/results/ResultButtons';

const Results = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const {questions, testScore, resetState} = useTestStore(state => state);

  const styles = getStyles();

  const title = `Your score is ${testScore} out of ${questions.length}`;

  const handleTestButtonsPress = (routeName: string, additionalState = {}) => {
    const defaultState = {
      currentQuestionIndex: 0,
      testScore: 0,
      ...additionalState,
    };

    resetState(defaultState);

    navigation.reset({
      index: 0,
      routes: [{name: routeName}],
    });
  };

  const handleRetakeTestPress = () => {
    handleTestButtonsPress('Question');
  };

  const handleNewTestPress = () => {
    handleTestButtonsPress('Home', {questions: []});
  };

  return (
    <View style={styles.container}>
      <Title title={title} darkColor={true} />

      <ResultButtons
        handleRetakeTestPress={handleRetakeTestPress}
        handleNewTestPress={handleNewTestPress}
      />
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      gap: 80,
      backgroundColor: 'white',
    },
  });
};

export default Results;

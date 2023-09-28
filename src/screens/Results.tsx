import {View, StyleSheet, Button} from 'react-native';
import useTestStore from '../store/useTestStore';
import Title from '../components/title/Title';
// import Button from '../components/button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const Results = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const {questions, testScore, resetState} = useTestStore(state => state);

  const styles = getStyles();

  const title = `Your score is ${testScore} out of ${questions.length}`;

  const handleStartOvePress = () => {
    const defaultState = {
      currentQuestionIndex: 0,
      testScore: 0,
    };

    resetState(defaultState);

    navigation.reset({
      index: 0,
      routes: [{name: 'Question'}],
    });
  };

  const handleGoHomePress = () => {
    const defaultState = {
      currentQuestionIndex: 0,
      testScore: 0,
      questions: [],
    };

    resetState(defaultState);

    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <View style={styles.container}>
      <Title title={title} />

      <Button
        onPress={handleStartOvePress}
        title="start over"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={handleGoHomePress}
        title="Lgo home"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      {/* <Button /> */}
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      gap: 40,
      backgroundColor: 'white',
    },
  });
};

export default Results;

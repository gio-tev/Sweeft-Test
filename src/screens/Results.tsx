import {View, StyleSheet} from 'react-native';
import useTestStore from '../store/useTestStore';
import Title from '../components/title/Title';
// import Button from '../components/button/Button';

const Results = () => {
  const {questions, testScore} = useTestStore(state => state);

  const styles = getStyles();

  const title = `Your score is ${testScore} out of ${questions.length}`;

  return (
    <View style={styles.container}>
      <Title title={title} />

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

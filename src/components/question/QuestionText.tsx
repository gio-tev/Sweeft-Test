import {Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const QuestionText = ({question}: {question: string}) => {
  const {
    colors: {
      elevation: {level5},
    },
  } = useTheme();

  const styles = getStyles(level5);

  return <Text style={styles.question}>{question}</Text>;
};

const getStyles = (borderBottomColor: string) => {
  return StyleSheet.create({
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

export default QuestionText;

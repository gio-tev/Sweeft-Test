import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {AnswersPropTypes} from './Answers.types';
import {getAnswersStyles} from './Answers.styles';

const Answers = ({answers, value, onAnswerChange}: AnswersPropTypes) => {
  const styles = getAnswersStyles();

  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(newValue: string) => onAnswerChange(newValue)}
        value={value}>
        {answers.map(ans => {
          return (
            <View key={ans} style={styles.answer}>
              <RadioButton value={ans} />
              <Text style={styles.label}>{ans}</Text>
            </View>
          );
        })}
      </RadioButton.Group>
    </View>
  );
};

export default Answers;

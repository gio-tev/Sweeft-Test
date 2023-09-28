import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

const Answers = ({
  answers,
  value,
  onAnswerChange,
}: {
  answers: string[];
  value: string;
  onAnswerChange: (val: string) => void;
}) => {
  const styles = getStyles();

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

const getStyles = () => {
  return StyleSheet.create({
    container: {
      width: '80%',
      gap: 20,
    },
    answer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      marginTop: 10,
    },
    label: {
      color: 'black',
    },
  });
};

export default Answers;

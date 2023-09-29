import {View} from 'react-native';
import Button from '../../../components/button/Button';
import {QuestionButtonsPropTypes} from './QuestionButtons.types';
import {getQuestionButtonsStyles} from './QuestionButtons.styles';

const QuestionButtons = ({
  isFirstQuestion,
  value,
  handlePreviousQuestionPress,
  handleNextQuestionPress,
}: QuestionButtonsPropTypes) => {
  const styles = getQuestionButtonsStyles();

  return (
    <View style={styles.container}>
      <Button
        title="Go Back"
        disabled={isFirstQuestion}
        handlePress={handlePreviousQuestionPress}
        contentStyle={styles.button}
      />

      <Button
        title="Next Question"
        disabled={!value}
        handlePress={handleNextQuestionPress}
        contentStyle={styles.button}
      />
    </View>
  );
};

export default QuestionButtons;

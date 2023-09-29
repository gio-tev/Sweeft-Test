import {Text} from 'react-native';
import {useThemeColors} from '../../../theme/theme';
import {getStyles} from './QuestionText.styles';

const QuestionText = ({question}: {question: string}) => {
  const {secondary, level5} = useThemeColors();

  const styles = getStyles(level5, secondary);

  return <Text style={styles.question}>{question}</Text>;
};

export default QuestionText;

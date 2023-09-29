import {View} from 'react-native';
import Button from '../../../components/button/Button';
import {ResultButtonsPropTypes} from './ResultButtons.types';
import {getResultButtonsStyles} from './ResultButtons.styles';

const ResultButtons = ({
  handleRetakeTestPress,
  handleNewTestPress,
}: ResultButtonsPropTypes) => {
  const styles = getResultButtonsStyles();

  return (
    <View style={styles.buttonsContainer}>
      <Button
        title="Retake Test"
        handlePress={handleRetakeTestPress}
        mode="outlined"
      />

      <Button
        title="Start Fresh"
        handlePress={handleNewTestPress}
        mode="contained"
      />
    </View>
  );
};

export default ResultButtons;

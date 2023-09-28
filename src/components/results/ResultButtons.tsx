import {View, StyleSheet} from 'react-native';
import Button from '../button/Button';

const ResultButtons = ({
  handleRetakeTestPress,
  handleNewTestPress,
}: {
  handleRetakeTestPress: () => void;
  handleNewTestPress: () => void;
}) => {
  const styles = getStyles();

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

const getStyles = () => {
  return StyleSheet.create({
    buttonsContainer: {
      gap: 40,
    },
  });
};

export default ResultButtons;

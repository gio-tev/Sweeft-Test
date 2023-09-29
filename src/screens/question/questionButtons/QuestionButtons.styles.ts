import {StyleSheet} from 'react-native';

export const getQuestionButtonsStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 10,
      marginTop: 20,
    },
    button: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      width: 150,
    },
  });
};

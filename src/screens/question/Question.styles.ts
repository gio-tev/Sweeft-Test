import {StyleSheet} from 'react-native';

export const getQuestionStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    innerContainer: {
      alignItems: 'center',
      gap: 40,
    },
  });
};

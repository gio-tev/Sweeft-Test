import {StyleSheet} from 'react-native';

export const getQuestionStyles = (borderBottomColor: string, color: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    innerContainer: {
      alignItems: 'center',
      gap: 40,
    },
    question: {
      fontSize: 18,
      width: '80%',
      textAlign: 'center',
      color,
      borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 15,
    },
  });
};

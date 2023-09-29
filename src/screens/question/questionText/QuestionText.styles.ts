import {StyleSheet} from 'react-native';

export const getStyles = (borderBottomColor: string, color: string) => {
  return StyleSheet.create({
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

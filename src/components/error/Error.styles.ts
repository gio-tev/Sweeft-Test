import {StyleSheet} from 'react-native';

export const getErrorStyles = (color: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      gap: 30,
      backgroundColor: 'white',
    },
    text: {
      color,
      fontSize: 18,
      marginTop: '45%',
    },
  });
};

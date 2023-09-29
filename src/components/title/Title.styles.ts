import {StyleSheet} from 'react-native';

export const getTitleStyles = (color: string) => {
  return StyleSheet.create({
    title: {
      color,
      fontSize: 40,
      fontWeight: '700',
      marginTop: '30%',
      marginHorizontal: 30,
      textAlign: 'center',
    },
  });
};

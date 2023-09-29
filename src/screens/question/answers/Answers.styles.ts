import {StyleSheet} from 'react-native';

export const getAnswersStyles = () => {
  return StyleSheet.create({
    container: {
      width: '80%',
    },
    answer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      marginLeft: 10,
    },
    label: {
      color: 'black',
      width: '75%',
    },
  });
};

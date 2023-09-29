import {StyleSheet} from 'react-native';

export const getAccordionListStyles = (borderBottomColor: string) => {
  return StyleSheet.create({
    list: {
      borderBottomColor,
      borderBottomWidth: 0.5,
    },
  });
};

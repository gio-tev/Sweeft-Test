import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {AccordionListPropsTypes} from './types';
import {useTheme} from 'react-native-paper';

const AccordionList = ({
  children,
  title,
  expanded,
  onPress,
}: AccordionListPropsTypes) => {
  const {
    colors: {
      elevation: {level5},
    },
  } = useTheme();

  const styles = getStyles(level5);

  return (
    <List.Accordion
      style={styles.list}
      title={title}
      expanded={expanded}
      onPress={onPress}>
      {children}
    </List.Accordion>
  );
};

const getStyles = (borderBottomColor: string) => {
  return StyleSheet.create({
    list: {
      borderBottomColor,
      borderBottomWidth: 0.5,
    },
  });
};

export default AccordionList;

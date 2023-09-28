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
      primary,
      elevation: {level5},
    },
  } = useTheme();

  return (
    <List.Accordion
      titleStyle={{color: primary}}
      style={{
        borderBottomColor: level5,
        borderBottomWidth: 0.5,
      }}
      title={title}
      expanded={expanded}
      onPress={onPress}>
      {children}
    </List.Accordion>
  );
};

export default AccordionList;

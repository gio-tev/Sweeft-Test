import {List} from 'react-native-paper';
import {AccordionListPropsTypes} from './types';

const AccordionList = ({
  children,
  title,
  expanded,
  onPress,
}: AccordionListPropsTypes) => {
  return (
    <List.Accordion
      titleStyle={{color: 'red'}}
      style={{
        backgroundColor: 'white',
        borderBottomColor: 'lightgrey',
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

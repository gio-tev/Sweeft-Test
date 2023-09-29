import {List} from 'react-native-paper';
import {AccordionListPropsTypes} from './Accordion.types';
import {useThemeColors} from '../../../theme/theme';
import {getAccordionListStyles} from './AccordionList.styles';

const AccordionList = ({
  children,
  title,
  expanded,
  onPress,
}: AccordionListPropsTypes) => {
  const {level5} = useThemeColors();

  const styles = getAccordionListStyles(level5);

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

export default AccordionList;

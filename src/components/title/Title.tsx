import {Text} from 'react-native';
import {useThemeColors} from '../../theme/theme';
import {TitlePropTypes} from './Title.types';
import {getTitleStyles} from './Title.styles';

const Title = ({title, darkColor}: TitlePropTypes) => {
  const {primary, secondary} = useThemeColors();

  const styles = getTitleStyles(darkColor ? secondary : primary);

  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

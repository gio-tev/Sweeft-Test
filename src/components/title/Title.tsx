import {Text, StyleSheet} from 'react-native';

import {useTheme} from 'react-native-paper';

const Title = ({title, darkColor}: {title: string; darkColor?: boolean}) => {
  const {
    colors: {primary, secondary},
  } = useTheme();

  const styles = getStyles(darkColor ? secondary : primary);

  return <Text style={styles.title}>{title}</Text>;
};

const getStyles = (color: string) => {
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

export default Title;

import {Text, StyleSheet} from 'react-native';

import {useTheme} from 'react-native-paper';

const Title = ({title}: {title: string}) => {
  const {
    colors: {primary},
  } = useTheme();

  const styles = getStyles(primary);

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

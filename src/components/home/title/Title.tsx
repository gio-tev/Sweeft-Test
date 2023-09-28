import {Text, StyleSheet} from 'react-native';

import {useTheme} from 'react-native-paper';

const Title = () => {
  const {
    colors: {primary},
  } = useTheme();

  const styles = getStyles(primary);

  return <Text style={styles.title}>Sweeft Test</Text>;
};

const getStyles = (color: string) => {
  return StyleSheet.create({
    title: {
      color,
      fontSize: 40,
      marginTop: '30%',
      fontWeight: '700',
    },
  });
};

export default Title;

import {Text} from 'react-native';

import {useTheme} from 'react-native-paper';

const Title = () => {
  const {
    colors: {primary},
  } = useTheme();

  return (
    <Text
      style={{
        color: primary,
        fontSize: 40,
        marginTop: '30%',
        fontWeight: '700',
      }}>
      Sweeft Test
    </Text>
  );
};

export default Title;

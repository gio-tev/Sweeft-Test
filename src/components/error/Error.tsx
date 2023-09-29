import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useThemeColors} from '../../theme/theme';
import {getErrorStyles} from './Error.styles';
import Button from '../button/Button';
import useTestStore from '../../store/useTestStore';
import Text from '../text/Text';

const Error = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const {resetState} = useTestStore(state => state);
  const {error} = useThemeColors();
  const styles = getErrorStyles(error);

  const handleErrorPress = () => {
    const defaultState = {
      currentQuestionIndex: 0,
      testScore: 0,
      questions: [],
    };

    resetState(defaultState);

    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <View style={styles.container}>
      <Text value="Something went wrong." style={styles.text} />

      <Button
        title="Try Again"
        handlePress={handleErrorPress}
        mode="elevated"
      />
    </View>
  );
};

export default Error;

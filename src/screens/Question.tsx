import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Question = () => {
  const route = useRoute();
  console.log(route, 'routerouteroute');

  return (
    <View>
      <Text style={{color: 'red'}}>Question</Text>
    </View>
  );
};

export default Question;

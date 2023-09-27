import {SafeAreaView, StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import StackNavigator from './src/navigators/StackNavigator';

const App = (): JSX.Element => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <StackNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

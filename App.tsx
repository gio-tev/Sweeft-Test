import {SafeAreaView, StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import StackNavigator from './src/navigators/StackNavigator';
import {theme} from './src/theme/theme';

const App = (): JSX.Element => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <OrientationLocker orientation={PORTRAIT} />
        <StackNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

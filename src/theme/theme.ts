import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
    onSurfaceDisabled: 'tomato',
    // onBackground: 'red',
    // surfaceDisabled: 'red',
    // disabledBackgroundColor: 'red',
  },
};

// export default function Main() {
//   return (
//     <PaperProvider theme={theme}>
//       <App />
//     </PaperProvider>
//   );
// }

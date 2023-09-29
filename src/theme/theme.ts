import {MD3LightTheme as DefaultTheme, useTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: '#304A68',
    onSurfaceDisabled: 'tomato',
  },
};

export const useThemeColors = () => {
  const {
    colors: {
      primary,
      secondary,
      elevation: {level5},
    },
  } = useTheme();

  return {primary, secondary, level5};
};

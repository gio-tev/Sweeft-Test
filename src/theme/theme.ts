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
      error,
      errorContainer,
      onError,
      elevation: {level5},
    },
  } = useTheme();

  return {primary, secondary, level5, error, errorContainer, onError};
};

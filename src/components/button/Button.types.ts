import {ViewStyle} from 'react-native';

export type ButtonPropTypes = {
  title: string;
  handlePress: () => void;
  disabled?: boolean;
  loading?: boolean;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  contentStyle?: ViewStyle;
};

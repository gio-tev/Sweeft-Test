export type ButtonPropTypes = {
  title: string;
  handlePress: () => void;
  disabled?: boolean;
  loading?: boolean;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  contentStyle?: {paddingVertical: number; paddingHorizontal: number};
};

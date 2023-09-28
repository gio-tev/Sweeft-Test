export type ButtonPropTypes = {
  title: string;
  disabled: boolean;
  handlePress: () => void;
  loading?: boolean;
  contentStyle?: {paddingVertical: number; paddingHorizontal: number};
};

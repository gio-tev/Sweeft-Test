export type ButtonPropTypes = {
  loading: boolean;
  title: string;
  disabled: boolean;
  handleStartTestPress: () => void;
  contentStyle?: {paddingVertical: number; paddingHorizontal: number};
};

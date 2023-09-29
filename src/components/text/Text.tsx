import {Text as NativeText, TextStyle} from 'react-native';

const Text = ({value, style}: {value: string; style: TextStyle}) => {
  return <NativeText style={style}>{value}</NativeText>;
};

export default Text;

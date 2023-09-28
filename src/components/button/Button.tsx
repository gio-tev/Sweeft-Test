import {Button as PaperButton} from 'react-native-paper';
import {ButtonPropTypes} from './types';

const Button = ({
  loading,
  title,
  disabled,
  handleStartTestPress,
  contentStyle = {paddingVertical: 10, paddingHorizontal: 70},
}: ButtonPropTypes) => {
  return (
    <PaperButton
      loading={loading}
      disabled={disabled}
      contentStyle={contentStyle}
      mode="contained"
      onPress={handleStartTestPress}>
      {title}
    </PaperButton>
  );
};

export default Button;

import {Button as PaperButton} from 'react-native-paper';
import {ButtonPropTypes} from './types';

const Button = ({
  title,
  handlePress,
  disabled,
  loading,
  contentStyle = {paddingVertical: 10, paddingHorizontal: 70},
  mode = 'contained',
}: ButtonPropTypes) => {
  return (
    <PaperButton
      loading={loading}
      disabled={disabled}
      contentStyle={contentStyle}
      mode={mode}
      onPress={handlePress}>
      {title}
    </PaperButton>
  );
};

export default Button;

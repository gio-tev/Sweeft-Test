import {Button as PaperButton} from 'react-native-paper';

const Button = ({
  disabled,
  handleStartTestPress,
}: {
  disabled: boolean;
  handleStartTestPress: () => void;
}) => {
  return (
    <PaperButton
      disabled={disabled}
      contentStyle={{paddingVertical: 10, paddingHorizontal: 70}}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: '20%',
      }}
      mode="contained"
      onPress={handleStartTestPress}>
      Start Test
    </PaperButton>
  );
};

export default Button;

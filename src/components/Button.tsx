import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  Text,
} from 'react-native';
import {useContext} from 'react';
import {ColorContext} from '@/shared';

type ButtonType = 'primary' | 'secundary';

type ButtonProps = {
  text: string;
  type?: ButtonType;
};

const Button = ({
  text,
  type = 'primary',
  onPress,
  style,
}: ButtonProps & TouchableHighlightProps) => {
  const styles = useStyles(type);

  return (
    <TouchableHighlight style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const useStyles = (type: ButtonType) => {
  const {
    backgroundColor,
    primaryColor,
    primaryButtonText,
    secundaryButtonText,
    largePadding,
    border,
    margin,
  } = useContext(ColorContext);

  return StyleSheet.create({
    button: {
      borderColor: primaryColor,
      borderWidth: 2,
      backgroundColor: type == 'primary' ? primaryColor : backgroundColor,
      padding: largePadding,
      borderRadius: border,
      alignItems: 'center',
      margin: margin,
    },
    text: {
      color: type == 'primary' ? primaryButtonText : secundaryButtonText,
      fontWeight: '600',
      fontSize: 18,
    },
  });
};

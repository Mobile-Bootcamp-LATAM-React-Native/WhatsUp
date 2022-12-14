import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native'
import { useContext } from 'react'
import { ColorContext } from '@/shared';
import Icon from '../Icon';

export type CheckboxProps = {
  text: string;
  value: boolean;
  onChange: (val: boolean) => void;
}

const Checkbox = ({text, value, onChange, ...rest}: CheckboxProps & TouchableWithoutFeedbackProps) => {
  const styles = useStyles(value);

  const onPress = () => {
    onChange(!value);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress} {...rest}>
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <Icon name="checkmark"  style={styles.icon}/>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Checkbox

const useStyles = (checked: boolean) => {
  const {
    primaryColor,
    primaryColorText,
    margin,
    backgroundColor
  } = useContext(ColorContext)

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: margin
    },
    checkbox: {
      height: 20,
      width: 20,
      borderColor: primaryColor,
      backgroundColor: checked == true ? primaryColor : backgroundColor,
      borderWidth: 1,
      borderRadius: 5,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: primaryColorText,
      marginHorizontal: 5
    },
    icon: {
      color: '#fff',
      fontSize: 14,
    },
  });
}
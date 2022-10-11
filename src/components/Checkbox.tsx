import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native'
import { useContext, useState } from 'react'
import { ColorContext } from '../shared/ColorContext';

type CheckboxProps = {
  text: string;
}

const Checkbox = ({text, onPress}: CheckboxProps & TouchableWithoutFeedbackProps) => {
  const [checked, setChecked] = useState(false);
  const styles = useStyles(checked);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.checkbox}></View>
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
      marginHorizontal: 5
    },
    text: {
      color: primaryColorText,
      marginHorizontal: 5
    }
  });
}
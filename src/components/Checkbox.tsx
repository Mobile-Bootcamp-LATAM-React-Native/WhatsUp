import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { ColorContext } from '../shared/ColorContext';
//import { Checkbox } from 'native-base';
//import Checkbox from './src/components/Checkbox';

type CheckboxProps = {
  text: string;
  value: string;
}

const CheckBox  = ({text, value}: CheckboxProps) => {
  const styles = useStyles();
  return (
    <View>
      <Checkbox value={value} style={styles.checkbox}>{text}</Checkbox>
    </View>
  )
}

export default CheckBox

const useStyles = () => {
  const {
    primaryColor,
    primaryButtonText,
    margin
  } = useContext(ColorContext)

  return StyleSheet.create({
    checkbox: {
      backgroundColor: primaryColor,
      color: primaryButtonText,
      margin: margin,
    }
  });
}

/*
npm install react-native-base --save
npm install native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2*/
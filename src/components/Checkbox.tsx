import { StyleSheet, Text, View } from 'react-native'
import { useContext, useState } from 'react'
import { ColorContext } from '../shared/ColorContext';
//import { Checkbox } from 'native-base';
//import Checkbox from './src/components/Checkbox';

type CheckboxProps = {
  text: string;
}

const CheckBox = ({text}: CheckboxProps) => {
  const styles = useStyles();
  const [value, setValue] = useState(true);
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
  } = useContext(ColorContext)

  return StyleSheet.create({
    checkbox: {
      backgroundColor: primaryColor,
      color: primaryButtonText,
      margin: 5,
    }
  });
}

/*
npm install react-native-base --save
npm install native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2*/
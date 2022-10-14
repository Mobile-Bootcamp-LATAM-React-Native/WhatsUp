import { StyleSheet, Image } from 'react-native'
import { useContext } from 'react'

import { ColorContext } from '@/shared';
import Label from './Label';

const logo = require('@/assets/logo.png');

const Logo = () => {
  const styles = useStyles();

  return (
    <>
      <Image style={styles.logo} source={logo} />
      <Label type="h1" style={styles.name}>
        WhatsUp
      </Label>
    </>
  )
}

export default Logo

const useStyles = () => {
  const {
    primaryColor
  } = useContext(ColorContext);

  return StyleSheet.create({
    logo: {
      width: 150,
      height: 150,
    },
    name: {
      color: primaryColor,
    }
  });
}
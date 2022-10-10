import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'
import React from 'react'

import { useMyTheme } from './src/hooks'
import Button from './src/components/Button';
import ColorContext from './src/shared/ColorContext';

const Home = () => {
  const theme = useMyTheme();

  return (
    <ColorContext value={theme}>
      <SafeAreaView style={[styles.main, { backgroundColor: theme.backgroundColor }]}>
        <Button text="Cancel" type="secundary" />
        <Button text="Yes"/>
      </SafeAreaView>
    </ColorContext>
  )
}

export default Home

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
})
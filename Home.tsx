import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'
import React from 'react'

import { useMyTheme } from './src/hooks'
import { Button, Label } from '@/components';
import { ColorContextProvider as ColorContext } from '@/shared';

const Home = () => {
  const theme = useMyTheme();

  return (
    <ColorContext value={theme}>
      <SafeAreaView style={[styles.main, { backgroundColor: theme.backgroundColor }]}>
        <Button text="Cancel" type="secundary" style={{ width: 120 }} />
        <Button text="Yes"/>
        <Label text="New label" type='h1'/>
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
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'
import React from 'react'

import { useMyTheme } from './src/hooks';
import Label from './src/components/Label';

const Home = () => {
  const theme = useMyTheme();

  return (
    <SafeAreaView style={[styles.main, { backgroundColor: theme.backgroundColor }]}>
      <Label style={{ color: theme.primaryColor }}>{theme.backgroundColor}</Label>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
})
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'
import React, { useState } from 'react'

import { useMyTheme } from './src/hooks'
import Button from './src/components/Button';
import ColorContext from './src/shared/ColorContext';
import Loading from './src/components/Loading';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const theme = useMyTheme();

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <ColorContext value={theme}>
      <SafeAreaView style={[styles.main, { backgroundColor: theme.backgroundColor }]}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Button text="Cancel" type="secundary" style={{ width: 120 }} />
            <Button text="Yes" />
          </>
        )}
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
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { useMyTheme } from './src/hooks'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const theme = useMyTheme();

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ColorContext value={theme}>
      <SafeAreaView style={[styles.main, { backgroundColor: theme.backgroundColor }]}>
        {loading ? (
          <>
            <Button text="Cancel" type="secundary" style={{ width: 120 }} onPress={startLoading} />
            <Button text="Yes" />
            <Loading />
          </>
        ) : (
          <>
            <Button text="Cancel" type="secundary" style={{ width: 120 }} onPress={startLoading} />
            <Button text="Yes" />
            <Label type="h1">NewLabel</Label>
          </>
        )}
      </SafeAreaView>
    </ColorContext>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

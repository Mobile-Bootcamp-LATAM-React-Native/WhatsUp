import { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native'

import { Logo, Spinner } from '@/components';
import { getEncryptedItem } from '@/lib';
import { AppContext, StorageConstants } from '@/shared';

const Loading = () => {
  const appContext = useContext(AppContext);

  const checkCredentials = async () => {
    try {
      const isSignedIn = await getEncryptedItem<boolean>(StorageConstants.isSignedIn);

      if (isSignedIn) {
        appContext.setIsSignedIn(true);
      }
    } catch (ex) {
      // TODO: handle error
    } finally {
      appContext.setIsLoading(false);
    }
  }
  
  useEffect(() => {
    checkCredentials();
  }, []);

  return (
    <View style={styles.main}>
      <Logo />

      <Spinner size="large" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
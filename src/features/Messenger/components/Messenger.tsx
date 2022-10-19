import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'

import { Button } from '@/components'
import { AppContext, StorageConstants } from '@/shared'
import { removeEncryptedItem } from '@/lib'

const Messenger = () => {
  const appContext = useContext(AppContext);

  const onLogout = async () => {
    appContext.setIsSignedIn(false);
    removeEncryptedItem(StorageConstants.user);
  }

  return (
    <View>
      <Button text="Logout" onPress={onLogout} />
    </View>
  )
}

export default Messenger

const styles = StyleSheet.create({})
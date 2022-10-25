import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Button, Icon, Label } from '@/components'
import { ColorContext } from '@/shared';
import { useAppDispatch } from '@/hooks';

const MessengerHeader = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch()

  const onLogout = () => {
    console.log('LOGOUT');
    dispatch({ type: 'SIGNIN/LOGOUT' });
  }

  return (
    <View style={styles.main}>
      <Label type="h3">
        WhatsUp
      </Label>

      <TouchableOpacity style={styles.action} onPress={onLogout}>
        <Icon name="dots-three-vertical" />
      </TouchableOpacity>
    </View>
  )
}

export default MessengerHeader

const useStyles = () => {
  const { primaryColor } = useContext(ColorContext);

  return StyleSheet.create({
    main: {
      flexDirection: 'row',
      padding: 12,
      justifyContent: 'space-between',
    },
    action: {
      backgroundColor: primaryColor,
      borderRadius: 8,
      padding: 8,
    }
  });
}
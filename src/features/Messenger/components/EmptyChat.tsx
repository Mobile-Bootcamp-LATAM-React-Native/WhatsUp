import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Label } from '@/components'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';

type EmptyChatProps = NativeStackScreenProps<RootStackParamList, 'Messenger'>;

const EmptyChat = ({
  navigation,
}: EmptyChatProps) => {
  const goToContacts = () => {
    navigation.navigate('Contacts');  
  }

  return (
    <View style={styles.container}>
      <Label type="h3">
        You haven't chat yet
      </Label>
      <Button text="Start chatting" onPress={goToContacts} />
    </View>
  )
}

export default EmptyChat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
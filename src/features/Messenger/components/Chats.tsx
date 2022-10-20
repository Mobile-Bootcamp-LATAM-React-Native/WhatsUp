import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmptyChat from './EmptyChat'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';

type ChatsProps = NativeStackScreenProps<RootStackParamList, 'Messenger'>;

const Chats = (props: ChatsProps) => {
  return (
    <View style={styles.container}>
      <EmptyChat {...props} />
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
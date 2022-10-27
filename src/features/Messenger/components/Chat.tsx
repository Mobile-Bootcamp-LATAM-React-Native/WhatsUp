import { StyleSheet, View, ScrollView } from 'react-native'
import { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';

// import { RootStackParamList, ContactHeader } from '@/navigation';
import type { RootStackParamList } from '@/navigation/RootStack';
import ContactHeader from '@/navigation/components/ContactHeader';
import { Input, Message } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addMessage, selectAllChats } from '../Messenger.slice';
import { Chat as ChatDto } from '@/models';

type ChatProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

const Chat = ({
  navigation,
  route: {
    params: contact,
  }
}: ChatProps) => {
  const dispatch = useAppDispatch();
  // const chats = useAppSelector(state => state.messenger.chats);
  const chats = useAppSelector(selectAllChats);

  // Chat in real time
  useEffect(() => {
    const subscriber = firestore().collection('chats').onSnapshot(documentSnapshot => {
      documentSnapshot.forEach(documentSnapshot => {
        const record = documentSnapshot.data();
        // console.log(record)
        dispatch(addMessage(record as ChatDto))
      });
    });

    return () => subscriber();
  }, []);

  // Header
  useEffect(() => {
    navigation.setOptions({
      header: () => <ContactHeader {...contact} />
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}>
        {chats.map((chat) => (
          <Message {...chat} key={chat.time} />
        ))}
      </ScrollView>

      <View style={styles.input}>
        <Input style={styles.inputText}/>
        <View>

        </View>
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chat: {
    flex: 1,
  },
  input: {
    height: 60,
    padding: 8,
  },
  inputText: {
    maxHeight: 40,
  }
})
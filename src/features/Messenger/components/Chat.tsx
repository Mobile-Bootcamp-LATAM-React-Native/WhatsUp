import { StyleSheet, View, ScrollView } from 'react-native'
import { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList, ContactHeader } from '@/navigation';
import { Input, Message } from '@/components';

type ChatProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

const Chat = ({
  navigation,
  route: {
    params: contact,
  }
}: ChatProps) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => <ContactHeader {...contact} />
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}>
        <Message message="Hello" time="9:13" type="receiver"/>
        <Message message="World" time="9:13" type="sender"/>
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
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';

type ChatProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

const Chat = ({
  navigation,
  route: {
    params: {
      name,
      phone,
    }
  }
}: ChatProps) => {
  useEffect(() => {
    navigation.setOptions({ title: name })
  }, []);

  return (
    <View>
      <Text>{name} - {phone}</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
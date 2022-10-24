import { StyleSheet, FlatList, PermissionsAndroid, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import NativeContacts, { Contact } from 'react-native-contacts';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import ContactItem from './Contact';

type ContactsProps = NativeStackScreenProps<RootStackParamList, 'Contacts'>;

const Contacts = ({
  navigation
}: ContactsProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const readContacts = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    );

    const contacts = await NativeContacts.getAll();
    setContacts(contacts);
  }

  const goToChat = (contact: Contact) => () => {
    const { phoneNumbers } = contact;
    const [phone] = phoneNumbers;

    navigation.replace('Chat', contact);
  }

  useEffect(() => {
    readContacts();
  }, []);

  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => <ContactItem {...item} onPress={goToChat(item)} />}
      keyExtractor={(item) => item.recordID}
    />
  )
}

export default Contacts

const styles = StyleSheet.create({
  
})
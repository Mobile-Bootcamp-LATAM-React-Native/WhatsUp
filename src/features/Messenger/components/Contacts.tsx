import { StyleSheet, FlatList, PermissionsAndroid, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import NativeContacts, { Contact } from 'react-native-contacts';
import { Label } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';

type ContactItemProps = {
  onPress: (contact: Contact) => void,
} & Contact

const ContactItem = ({ onPress, ...contact }: ContactItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(contact)}
      style={styles.contact}>
      <Label>
        {contact.givenName}
      </Label>
    </TouchableOpacity>
  )
} 

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

  const goToChat = ({ givenName, phoneNumbers }: Contact) => () => {
    const [phone] = phoneNumbers;

    navigation.replace('Chat', {
      name: givenName,
      phone: phone.number,
    });
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
  contact: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'grey',
  }
})
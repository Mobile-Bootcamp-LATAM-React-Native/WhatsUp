import { StyleSheet, TouchableOpacity } from 'react-native';
import { Contact as ContacDto } from 'react-native-contacts';

import { Avatar, Label } from '@/components';

type ContactProps = {
  onPress: (contact: ContacDto) => void,
} & ContacDto

const Contact = ({
  onPress,
  ...contact
}: ContactProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(contact)}
      style={styles.contact}>
      <Avatar />
      <Label style={styles.label} type="h3">
        {contact.givenName}
      </Label>
    </TouchableOpacity>
  )
}

export default Contact

const styles = StyleSheet.create({
  contact: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 12,
  },
})
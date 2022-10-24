import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Contact } from 'react-native-contacts'
import { Avatar, Label } from '@/components';

type ContactHeaderProps = {

} & Contact;

const ContactHeader = ({
  familyName,
  givenName
}: ContactHeaderProps) => {
  return (
    <View style={styles.header}>
      <Avatar size="xs" />
      <Label style={styles.label} type="h4">
        {`${givenName} ${familyName}`}
      </Label>
    </View>
  )
}

export default ContactHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  label: {
    paddingLeft: 12,
  }
})
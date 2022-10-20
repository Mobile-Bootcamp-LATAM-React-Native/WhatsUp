import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactHeader = (props: any) => {
  console.log(props);

  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  )
}

export default ContactHeader

const styles = StyleSheet.create({})
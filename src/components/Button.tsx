import { StyleSheet, TouchableHighlight, TouchableHighlightProps, Text } from 'react-native'
import React from 'react'

type ButtonProps = {
  text: string;
}

const Button = (props: ButtonProps & TouchableHighlightProps) => {
  return (
    <TouchableHighlight {...props}>
      <Text>{props.text}</Text>
    </TouchableHighlight>
  )
}

export default Button

const styles = StyleSheet.create({})
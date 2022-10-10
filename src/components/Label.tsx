import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'

type LabelProps = {
}

// TODO: h0, h1, h2, h3, h4, p1, p2
// Typografy
const Label = (props: LabelProps & TextProps) => {
  return (
    <Text {...props}>
      {props.children}
    </Text>
  )
}

export default Label

const styles = StyleSheet.create({})
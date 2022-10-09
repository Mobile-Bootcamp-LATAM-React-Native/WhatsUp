import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'

type LabelProps = {
}

const Label = (props: LabelProps & TextProps) => {
  return (
    <Text {...props}>
      {props.children}
    </Text>
  )
}

export default Label

const styles = StyleSheet.create({})
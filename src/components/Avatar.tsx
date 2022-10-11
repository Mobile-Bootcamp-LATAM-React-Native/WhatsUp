import { Image, ImageBackground, ImageBackgroundProps, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' |'2xl'

type AvatarProps = {
  src: string,
  size?: AvatarSize
}

const Avatar = ({
  src,
  size = 'md'
}: AvatarProps & ImageBackgroundProps) => {
  const styles = getStyles(size)
  const [error, setError] = useState(false)
  return (<ImageBackground style = {styles.container} source = {error? require("../assets/default_avatar.png") : {uri: src} } onError={() => setError(true)}/>)  
}

export default Avatar

const resolveSize = (size: AvatarSize) => {
  switch (size) {
    case 'xs':
      return 38
    case 'sm':
      return 55
    case 'md':
      return 76
    case 'lg':
      return 99
    case 'xl':
      return 128
    case '2xl':
      return 160
    default:
      return 0
  }
}

const getStyles = (size: AvatarSize) => {
  const resolvedSize = resolveSize(size)
  return StyleSheet.create({
    container: {
      margin: 5,
      overflow: 'hidden',
      borderRadius: resolvedSize,
      backgroundColor: 'gray',
      width: resolvedSize,
      height: resolvedSize
    }
  })
}
import { ImageBackground, ImageBackgroundProps, StyleSheet } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';

import { ColorContext } from '../../shared/ColorContext';

const DefaultAvatar = require('../assets/default_avatar.png')

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' |'2xl';

type AvatarProps = {
  url: string,
  size?: AvatarSize
} & ImageBackgroundProps;

const Avatar = ({
  url,
  size = 'md',
  ...rest
}: AvatarProps) => {
  const styles = getStyles(size)
  const [error, setError] = useState(false)
  const [source, setSource] = useState(DefaultAvatar);

  useEffect(() => {
    if (error) {
        setSource(DefaultAvatar);
    }}, [error]);
 
  useEffect(() => {
     setSource({uri: url})
  }, [url])
 

  return (
    <ImageBackground
      {...rest}
      style={styles.container}
      source={source} 
      onError={() => setError(true)}/>
  )  
}

export default Avatar

const resolveSize = (size: AvatarSize) => {
  switch (size) {
    case 'xs':
      return 38;
    case 'sm':
      return 55;
    case 'md':
      return 76;
    case 'lg':
      return 99;
    case 'xl':
      return 128;
    case '2xl':
      return 160;
    default:
      return 0;
  }
}

const getStyles = (size: AvatarSize) => {
  const {
    smallMargin,
    imageBackgroundColor
  } = useContext(ColorContext);

  const resolvedSize = resolveSize(size);

  return StyleSheet.create({
    container: {
      margin: smallMargin,
      overflow: 'hidden',
      borderRadius: resolvedSize,
      backgroundColor: imageBackgroundColor,
      width: resolvedSize,
      height: resolvedSize
    },
  });
}
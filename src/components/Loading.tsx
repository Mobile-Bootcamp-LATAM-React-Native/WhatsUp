import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { ColorContext } from '../shared/ColorContext';

type LoadingType = 'large' | 'small';

type LoadingProps = {
  type?: LoadingType;
}

const Loading = ({
  type = 'large',
  style,
  ...rest
}: LoadingProps & ActivityIndicatorProps) => {
  const styles = useStyles(type);

  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer} />
      <ActivityIndicator size={type} color={styles.loading.color} style={[styles.loading, style]} {...rest} />
    </View>
  )
}

export default Loading

const useStyles = (type: LoadingType) => {
  const {
    backgroundColor,
    loadingColor,
    primaryColor
  } = useContext(ColorContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
    loadingContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: backgroundColor,
      opacity: 0.6,
      position: 'absolute',
    },
    loading: {
      width: 100,
      height: 100,
      backgroundColor: loadingColor,
      borderRadius: 15,
      color: primaryColor
    },
  })
}


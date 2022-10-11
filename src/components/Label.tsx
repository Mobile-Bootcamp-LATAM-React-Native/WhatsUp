import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '../shared/ColorContext';

type LabelType = 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2' 

type LabelProps = {
  type?: LabelType;
}

const Label = ({
  type = 'p1',
  style,
  children
}: LabelProps & TextProps) => {
  const styles = useStyles();

  return (
    <Text style= {[styles[type], style]} >
      {children}
    </Text>
  )
}

export default Label

const useStyles = () => {
  const {
    primaryColorText
  } = useContext(ColorContext);

  return StyleSheet.create({
    h0: {
      fontSize: 40,
      lineHeight: 41,
      color: primaryColorText,
    },
    h1: {
      fontSize: 32,
      lineHeight: 41,
      fontWeight: 'bold',
      color: primaryColorText,
    },
    h2: {
      fontSize: 24,
      lineHeight: 33,
      fontWeight: '600',
      color: primaryColorText,
    },
    h3: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: 'bold',
      color: primaryColorText,
    },
    h4: {
      fontSize: 14,
      lineHeight: 19,
      fontWeight: 'bold',
      color: primaryColorText,
    },
    p1: {
      fontSize: 13,
      lineHeight: 20,
      color: primaryColorText,
    },
    p2: {
      fontSize: 14,
      lineHeight: 19,
      color: primaryColorText,
    }
  });
}
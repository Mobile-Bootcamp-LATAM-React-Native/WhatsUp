import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import {useMyTheme} from '../hooks';
import {Input} from '@/components';
import ColorContext from '../shared/ColorContext';

const SignIn = () => {
  const theme = useMyTheme();
  return (
    <ColorContext value={theme}>
      <SafeAreaView
        style={[styles.main, {backgroundColor: theme.backgroundColor}]}>
        <Input
          isInvalid={true}
          placeholder={'Phone Number'}
          style={styles.customInput}
        />
        <Input />
      </SafeAreaView>
    </ColorContext>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  customInput: {},
  main: {
    flex: 1,
  },
});

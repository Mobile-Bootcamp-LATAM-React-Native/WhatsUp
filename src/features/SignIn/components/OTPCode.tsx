import { StyleSheet, View } from 'react-native'
import { useState, useContext, useRef, useEffect } from 'react'
import { Button, Input } from '@/components'
import { AppContext } from '@/shared'

import { emit } from '@/lib';

type OTPCodeProps = {
  // confirmation: FirebaseAuthTypes.ConfirmationResult,
}

const OTPCode = ({ }: OTPCodeProps) => {
  const appContext = useContext(AppContext);
  // const [code, setCode] = useState('');
  const [digit1, setDigit1] = useState('0');
  const [digit2, setDigit2] = useState('0');
  const [digit3, setDigit3] = useState('0');
  const [digit4, setDigit4] = useState('0');
  const [digit5, setDigit5] = useState('0');
  const [digit6, setDigit6] = useState('0');
  const code = digit1 + digit2 + digit3 + digit4 + digit5 + digit6;

  const refDigit2 = useRef<Input>(null);
  const refDigit3 = useRef<Input>(null);
  const refDigit4 = useRef<Input>(null);
  const refDigit5 = useRef<Input>(null);
  const refDigit6 = useRef<Input>(null);

  const verifyCode = async () => {
    try {
      emit('onConfirmation', code)
    } catch (error) {
      console.log('Invalid code.', error);
    }
  }

  useEffect(() => {
    if (digit1 && digit1 != '0') {
      refDigit2.current?.focus();
    }
  }, [digit1]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Input value={digit1}
          onChangeText={setDigit1}
          keyboardType="number-pad"
          containerStyle={styles.input} style={styles.inputValue}
        />

        <Input value={digit2}
          ref={refDigit2}
          onChangeText={setDigit2}
          keyboardType="number-pad"
          containerStyle={styles.input} style={styles.inputValue}
        />

        <Input value={digit3}
          ref={refDigit3}
          onChangeText={setDigit3}
          keyboardType="number-pad"
          containerStyle={styles.input} style={styles.inputValue}
        />

        <Input value={digit4}
          onChangeText={setDigit4}
          keyboardType="number-pad"
          containerStyle={styles.input} style={styles.inputValue}
        />

        <Input value={digit5}
          onChangeText={setDigit5}
          keyboardType="number-pad"
          containerStyle={styles.input} style={styles.inputValue}
        />

        <Input value={digit6}
          onChangeText={setDigit6}
          keyboardType="number-pad"
          containerStyle={styles.input} style={styles.inputValue}
        />

      </View>

      <Button text="Verify" onPress={verifyCode} />
    </View>
  )
}

export default OTPCode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  input: {
    width: 40,
    height: 60,
    borderRadius: 10,
    padding: 0,
  },
  inputValue: {
    padding: 0,
    margin: 0,
    textAlign: 'center',
  }
})
import { StyleSheet, Text, View } from 'react-native'
import { useState, useContext } from 'react'
import { Button, Input } from '@/components'
import { AppContext } from '@/shared'

type OTPCodeProps = {
  // confirmation: FirebaseAuthTypes.ConfirmationResult,
}

const OTPCode = ({ }: OTPCodeProps) => {
  const appContext = useContext(AppContext);
  const [code, setCode] = useState('');

  const verifyCode = async () => {
    try {
      const result = await appContext.confirmation?.current?.confirm(code);
      console.log(result);
    } catch (error) {
      console.log('Invalid code.', error);
    }
  }

  return (
    <View>
      <Input value={code} onChangeText={setCode} />

      <Button text="Verify" onPress={verifyCode} />
    </View>
  )
}

export default OTPCode

const styles = StyleSheet.create({})
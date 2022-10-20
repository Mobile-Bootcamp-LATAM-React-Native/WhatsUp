import { useContext, useEffect, useState, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { Button, Input, Label, Logo } from '@/components';
import { RootStackParamList } from '@/navigation';
import { AppContext, StorageConstants } from '@/shared';
import Checkbox from '@/components/Checkbox/Checkbox';
import { addListener, removeListener, setEncryptedItem } from '@/lib';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const SignIn = ({ navigation }: SignInProps) => {
  const confirmation = useRef<FirebaseAuthTypes.ConfirmationResult>(null);
  const { setIsBusy } = useContext(AppContext);
  const [phone, setPhone] = useState('+59179798381');
  const { setIsSignedIn } = useContext(AppContext);


  const signInWithPhoneNumber = async () => {
    try {
      setIsBusy(true);
      confirmation.current = await auth().signInWithPhoneNumber(phone);
      navigation.navigate('OTPCode');
    } finally {
      setIsBusy(false);
    }
  }

  const onConfirmation = async (args: any[]) => {
    try {
      setIsBusy(true);

      const [verificationCode] = args;
      const result = await confirmation.current?.confirm(verificationCode);

      if (result) {
        await setEncryptedItem(StorageConstants.user, result);
        setIsSignedIn(true);
      }
    } finally {
      setIsBusy(false);
    }
  }

  useEffect(() => {
    // Register event - componentDidMount
    addListener('onConfirmation', onConfirmation);

    return () => {
      // Unregister event - componentWillUnmount
      removeListener('onConfirmation', onConfirmation);
    }
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.content}>
        <View style={styles.label}>
          <Label type="h3">
            Sign in to your account
          </Label>
        </View>

        <Label type="h4" style={styles.inputLabel}>
          Phone Number
        </Label>
        <Input value={phone} onChangeText={setPhone} iconName="phone" />

        <Checkbox text="Remember me" value={true} onChange={() => { }} />

        <Button text="Sign In" onPress={signInWithPhoneNumber} />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  label: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    paddingHorizontal: 30,
  }
})
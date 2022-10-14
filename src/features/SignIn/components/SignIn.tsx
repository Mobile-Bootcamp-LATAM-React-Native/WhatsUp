import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Input, Label, Logo } from '@/components';
import { RootStackParamList } from '@/navigation';
import { AppContext, StorageConstants } from '@/shared';
import Checkbox from '@/components/Checkbox/Checkbox';
import { setEncryptedItem } from '@/lib';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const SignIn = ({ }: SignInProps) => {
  const { setIsSignedIn } = useContext(AppContext);

  const onSignIn = async () => {
    // TODO: replace with firebase logic

    try {
      setEncryptedItem(StorageConstants.isSignedIn, true);
      setIsSignedIn(true);
    } catch (error) {
      // TODO: handle error
    }    
  }

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

        <Input />

        <Checkbox style={styles.check} text="Remember me" value={true} onChange={() => { }} />

        <Button style={styles.button} text="Sign In" onPress={onSignIn} />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
  button: {
  },
  check: {
  },
})
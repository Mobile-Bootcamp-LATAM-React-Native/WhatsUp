import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import { Button, Input, Label } from '@/components';
import { RootStackParamList } from '@/navigation';
import { AppContext } from '@/shared';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const SignIn = ({ }: SignInProps) => {
  const { setIsSignedIn } = useContext(AppContext);

  const onSignIn = () => {
    setIsSignedIn(true);
  }

  return (
    <View>
      <Label type='h3'>
        Sign in to your account
      </Label>

      <Input />

      <Button text='Sign In' onPress={onSignIn}/>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})
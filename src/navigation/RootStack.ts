import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type RootStackParamList = {
  Welcome: undefined,
  SignIn: undefined,
  SignUp: undefined,
  Messenger: undefined,
  Storyboard: undefined,
  OTPCode: undefined,
  Contacts: undefined,
  Chat: {
    phone: string,
    name: string,
    photo?: string,
  }
}
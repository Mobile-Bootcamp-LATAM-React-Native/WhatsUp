import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Contact } from 'react-native-contacts';

export type RootStackParamList = {
  Welcome: undefined,
  SignIn: undefined,
  SignUp: undefined,
  Messenger: undefined,
  Storyboard: undefined,
  OTPCode: undefined,
  Contacts: undefined,
  Chat: Contact;
}
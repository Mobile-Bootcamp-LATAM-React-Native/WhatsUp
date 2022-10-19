import { createContext, RefObject } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

type AppContextType = {
  isSignedIn: boolean,
  isLoading: boolean,
  setIsSignedIn: (_: boolean) => void,
  setIsLoading: (_: boolean) => void,
  isBusy: boolean,
  setIsBusy: (_: boolean) => void,
  confirmation: RefObject<FirebaseAuthTypes.ConfirmationResult> | null,
}

const defaultValue: AppContextType = {
  isSignedIn: false,
  isLoading: false,
  setIsSignedIn: (_: boolean) => {},
  setIsLoading: (_: boolean) => {},
  isBusy: false,
  setIsBusy: (_: boolean) => {},
  confirmation: null,
}

export const AppContext = createContext(defaultValue);

export default AppContext.Provider;
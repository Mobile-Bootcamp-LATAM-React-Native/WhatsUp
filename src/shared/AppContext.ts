import { createContext } from 'react';

const defaultValue = {
  isSignedIn: false,
  setIsSignedIn: (isSignedIn: boolean) => {},
}

export const AppContext = createContext(defaultValue);

export default AppContext.Provider;
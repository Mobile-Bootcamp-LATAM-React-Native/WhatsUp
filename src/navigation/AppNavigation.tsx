import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppContext } from '@/shared';
import { Messenger, SignIn } from '@/features';
import { RootStackParamList } from './RootStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const { isSignedIn } = useContext(AppContext);

  const signInScreenOptions = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ?
          <>
            <Stack.Screen name="Messenger" component={Messenger.Messenger} />
          </> :
          <>
            <Stack.Screen name="Welcome" component={SignIn.Welcome} options={signInScreenOptions} />
            <Stack.Screen name="SignIn" component={SignIn.SignIn} options={signInScreenOptions} />
            <Stack.Screen name="SignUp" component={SignIn.SignUp} options={signInScreenOptions} />
          </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

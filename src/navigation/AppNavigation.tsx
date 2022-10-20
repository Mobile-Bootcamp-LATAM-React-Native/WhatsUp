import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppContext } from '@/shared';
import { Messenger, SignIn } from '@/features';
import { RootStackParamList } from './RootStack';
import TopNavigation from './TopNavigation';
import ContactHeader from './components/ContactHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const SignedScreens = () => (
  <>
    <Stack.Screen name="Messenger" component={TopNavigation} />
    <Stack.Screen name="Contacts" component={Messenger.Contacts} />
    <Stack.Screen
      name="Chat"
      component={Messenger.Chat}
      options={{
        title: 'Chat',
        headerTitle: ContactHeader,
      }}
    />
  </>
)

const AnonymousScreens = () => {
  const options = {
    headerShown: false,
  };

  return (
    <>
      <Stack.Screen name="Welcome" component={SignIn.Welcome} options={options} />
      <Stack.Screen name="SignUp" component={SignIn.SignUp} options={options} />
      <Stack.Screen name="SignIn" component={SignIn.SignIn} options={options} />
      <Stack.Screen name="OTPCode" component={SignIn.OTPCode} />
    </>
  )
}

const AppNavigation = () => {
  const { isSignedIn, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <SignIn.Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? SignedScreens() : AnonymousScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

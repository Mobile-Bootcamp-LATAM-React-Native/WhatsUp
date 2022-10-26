import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppContext, ColorContext, StorageConstants } from '@/shared';
import { Messenger, SignIn } from '@/features';
import { RootStackParamList } from './RootStack';
import TopNavigation from './TopNavigation';
import ContactHeader from './components/ContactHeader';
import MessengerHeader from './components/MessengerHeader';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { getEncryptedItem } from '@/lib';
import { login } from '@/features/SignIn';

const Stack = createNativeStackNavigator<RootStackParamList>();

const SignedScreens = ({
  backgroundColor,
  primaryButtonText,
}) => { 
  return (
    <>
      <Stack.Screen
        name="Messenger"
        component={TopNavigation}
        options={{
          title: 'WhatsUp',
          header: MessengerHeader,
        }}
      />
      <Stack.Screen name="Contacts" component={Messenger.Contacts}
        options={{
          title: 'Select contact',
          headerTintColor: primaryButtonText,
          headerStyle: {
            backgroundColor: backgroundColor,
          }
        }} />
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
}

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
  const { primaryColor, primaryButtonText } = useContext(ColorContext);
  const { isLoading } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const isSignedIn = useAppSelector(state => Boolean(state.signIn.user));

  const checkUser = async () => {
    const userItem = await getEncryptedItem(StorageConstants.user);

    if (userItem) {
      const { user } = userItem as any;
      dispatch(login(user))
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  if (isLoading) {
    return <SignIn.Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? SignedScreens({ backgroundColor: primaryColor, primaryButtonText }) : AnonymousScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Messenger, SignIn, Storyboard} from '@/features';
import {RootStackParamList} from './RootStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Messenger" component={Messenger} />
        <Stack.Screen name="Storyboard" component={Storyboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

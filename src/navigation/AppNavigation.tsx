import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Messenger, SignIn} from '@/features';
import {RootStackParamList} from './RootStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const [storyBookComponent, setStoryBookComponent] = useState<React.FC>(
    () => () => <></>,
  );

  useEffect(() => {
    const getComp = async () => {
      let {StoryBook} = await import('../features/Storyboard');
      setStoryBookComponent(() => StoryBook);
    };
    getComp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Storyboard" component={storyBookComponent} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Messenger" component={Messenger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

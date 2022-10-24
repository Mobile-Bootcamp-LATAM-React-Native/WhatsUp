import { Messenger } from '@/features';
import { ColorContext } from '@/shared';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useContext } from 'react';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  const { primaryColor } = useContext(ColorContext);

  return (
    <Tab.Navigator screenOptions={{
      tabBarIndicatorStyle: {
        backgroundColor: primaryColor,
      },
    }}>
      <Tab.Screen name="Chats" component={Messenger.Chats} />
      <Tab.Screen name="Status" component={Messenger.Status} />
      <Tab.Screen name="Calls" component={Messenger.Calls} />
    </Tab.Navigator>
  )
}

export default TopNavigation
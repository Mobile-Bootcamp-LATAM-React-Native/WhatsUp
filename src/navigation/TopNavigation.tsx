import { Messenger } from '@/features';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Messenger.Chats} />
      <Tab.Screen name="Status" component={Messenger.Status} />
      <Tab.Screen name="Calls" component={Messenger.Calls} />
    </Tab.Navigator>
  )
}

export default TopNavigation
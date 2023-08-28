import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App from './App';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={App} />
      <Tab.Screen name="Settings" component={App} />
    </Tab.Navigator>
  );
}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { HomeStackParamList } from './navigationTypes';

import { HomeScreen } from '@/screens';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const HomeStackScreens = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Custom Title' }}
    />
  </HomeStack.Navigator>
);

export function MainNavigator() {
  return (
    <NavigationContainer>
      <HomeStackScreens />
    </NavigationContainer>
  );
}

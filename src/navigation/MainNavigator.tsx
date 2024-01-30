import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, ScreenTwo } from '@/screens';

export type HomeStackParamList = {
  Home: undefined;
  Two: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const HomeStackScreens = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Overview' }}
    />
    <HomeStack.Screen name="Two" component={ScreenTwo} />
  </HomeStack.Navigator>
);

export function MainNavigator() {
  return (
    <NavigationContainer>
      <HomeStackScreens />
    </NavigationContainer>
  );
}

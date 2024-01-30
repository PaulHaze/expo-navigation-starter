import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/screens/Home';

const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

export function MainNavigator() {
  return (
    <NavigationContainer>
      <HomeStackScreens />
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '@/screens/Home';

export function MainNavigator() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

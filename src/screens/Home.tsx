import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { BASE } from '@/styles/globalStyles';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bare Bones Home Screen</Text>
      <Text>Delete this and start building</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: BASE.COLORS.WHITE,
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
  },
});

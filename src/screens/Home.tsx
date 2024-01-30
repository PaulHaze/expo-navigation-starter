/* eslint-disable react-native/sort-styles */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { BASE } from '@/styles/globalStyles';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerText, styles.textColor]}>
        Bare Bones Home Screen
      </Text>
      <Text style={styles.textColor}>Delete this and start building</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: BASE.COLORS.BLACK,
    flex: 1,
    justifyContent: 'center',
  },
  textColor: {
    color: BASE.COLORS.WHITE,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

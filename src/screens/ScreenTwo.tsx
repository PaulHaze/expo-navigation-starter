/* eslint-disable react-native/sort-styles */
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { BASE } from '@/styles/globalStyles';

export function ScreenTwo() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerText, styles.textColor]}>Screen Two</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: BASE.COLORS.WHITE,
    flex: 1,
    justifyContent: 'center',
  },
  textColor: {
    color: BASE.COLORS.BLACK,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

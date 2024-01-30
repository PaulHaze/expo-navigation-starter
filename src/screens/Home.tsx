/* eslint-disable react-native/sort-styles */
import { StyleSheet, SafeAreaView, Text } from 'react-native';
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import type { HomeStackParamList } from '@/navigation/navigationTypes';

import { BASE } from '@/styles/globalStyles';

// type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerText, styles.textColor]}>
        Bare Bones Home Screen
      </Text>
      <Text style={styles.textColor}>Delete this and start building</Text>
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

/* eslint-disable react-native/sort-styles */
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '@/navigation/MainNavigator';

import { BASE } from '@/styles/globalStyles';

type Props = NativeStackScreenProps<HomeStackParamList, 'Two'>;

export function ScreenTwo({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerText, styles.textColor]}>Screen Two</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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

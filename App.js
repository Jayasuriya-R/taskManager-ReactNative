
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import AppManager from './Manager/AppManager';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="black"
        barStyle='dark-content'
      />
      <AppManager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

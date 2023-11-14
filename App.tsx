import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DatePickerComponent } from '@/components/DatePickerComponent';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <DatePickerComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 400,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
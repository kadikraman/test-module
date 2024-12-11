import { StyleSheet, Text, View } from 'react-native';
import * as Module from './modules/my-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Form the native side: {Module.default.hello()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { Text } from 'react-native';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}>
      <View
        style={{ backgroundColor: 'lightblue', width: 200, height: 200 }}
      ></View>
      <View
        style={{ backgroundColor: 'lightgreen', width: 200, height: 200 }}
      ></View>
    </View>
  );
}

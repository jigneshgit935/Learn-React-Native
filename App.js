import { Text } from 'react-native';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text>
        &nbsp; React Native
      </Text>
    </View>
  );
}

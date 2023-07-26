import { ActivityIndicator, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size={50} />
      <ActivityIndicator size={50} color="red" />
      <ActivityIndicator size={50} color="blue" animating={false} />
    </View>
  );
}

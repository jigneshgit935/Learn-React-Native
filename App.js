import { Button, Image, ScrollView, Text, View } from 'react-native';
import Logo from '../reactNative/assets/adaptive-icon.png';
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log('Button Press')}
        color="midnightblue"
        disabled
      />
    </View>
  );
}

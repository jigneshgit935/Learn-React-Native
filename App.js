import { Image, ImageBackground, Text } from 'react-native';
import { View } from 'react-native';
import adaptive from './assets/adaptive-icon.png';
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text>
        &nbsp; React Native
      </Text>
      {/* <Image source={adaptive} style={{ width: 300, height: 300 }} /> */}
      {/* <Image
        source={{ uri: 'https://picsum.photos/300' }}
        style={{ width: 300, height: 300 }}
      /> */}

      <ImageBackground style={{ flex: 1 }} source={adaptive}>
        <Text>Image text</Text>
      </ImageBackground>
    </View>
  );
}

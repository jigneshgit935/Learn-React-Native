import {
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Logo from '../reactNative/assets/adaptive-icon.png';
import { useState } from 'react';
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
    </View>
  );
}

import { ActivityIndicator, Alert, Button, View } from 'react-native';
import Greet from './components/Greet';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Greet name="Jignesh Sharma" />
      <Greet name="Rajesh Audichya" />
      <Greet name="Sunil Chetri" />
      <Greet name="Manish bhai" />
      <Greet name="tony Stark" />
    </View>
  );
}

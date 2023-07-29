import { ActivityIndicator, Alert, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert('Invalid Data')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Invalid Data', 'DOB Incorrect')}
      />

      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert('Invalid Data', 'DOB Incorrect', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
            },
            {
              text: 'Ok',
              onPress: () => console.log('Ok Pressed'),
            },
          ])
        }
      />
    </View>
  );
}

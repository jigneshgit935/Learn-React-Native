import { useState } from 'react';
import {
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(`Name: ${name} , Password: ${password} `);
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        style={styles.form}
      >
        <Image
          style={styles.image}
          source={require('./assets/adaptive-icon.png')}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="enter your username"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="enter your password"
          secureTextEntry
        />

        <Button title="Submit" onPress={onSubmit} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 6,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  },
});

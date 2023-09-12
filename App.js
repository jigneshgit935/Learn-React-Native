import { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        placeholder="Enter your name"
      />
      <Text style={styles.text}>My name is {name} </Text>

      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="message"
        multiline
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 30,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

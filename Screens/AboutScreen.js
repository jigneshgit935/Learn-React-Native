import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = ({ route }) => {
  const { name, age } = route.params;

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen</Text>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>My age is {age}</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', { newName: 'Data from about' })
        }
      />
      <Button
        title="Update the name"
        onPress={() => navigation.setParams({ name: 'Jignesh' })}
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

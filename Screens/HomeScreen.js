import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.text}>Data: {route.params?.newName}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', { name: 'Jinu', age: 23 })}
      />
    </View>
  );
};

export default HomeScreen;

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

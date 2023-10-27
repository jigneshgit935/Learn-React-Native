import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
      <Button
        title="Dashboard"
        onPress={() => navigation.jumpTo('Dashboard')}
      />
    </View>
  );
};

export default SettingsScreen;

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

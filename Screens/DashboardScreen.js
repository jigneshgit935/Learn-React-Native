import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const DashboardScreen = ({ navigation }) => {
  return (
    //
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button
        title="Setttings"
        onPress={() => navigation.jumpTo('Setttings')}
      />
    </View>
  );
};

export default DashboardScreen;

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

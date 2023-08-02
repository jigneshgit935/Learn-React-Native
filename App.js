import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.boxwith, styles.lightbluebox]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.boxwith, styles.lightgreenbox]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  boxwith: {
    width: '100%',
    height: 200,
  },
  lightbluebox: {
    backgroundColor: 'red',
  },
  lightgreenbox: {
    backgroundColor: 'green',
  },
});

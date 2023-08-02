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
    width: 100,
    height: 100,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 40,
  },
  lightbluebox: {
    backgroundColor: 'red',
  },
  lightgreenbox: {
    backgroundColor: 'green',
  },
});

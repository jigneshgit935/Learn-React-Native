import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkmode}>
        <Text style={styles.darkmodeText}>
          Inheritance in stylehseet <Text style={styles.textBold}>in Bold</Text>
        </Text>
      </View>
      <View style={[styles.boxwith, styles.lightbluebox, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.boxwith, styles.lightgreenbox, styles.boxShadow]}>
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
  darkmode: {
    backgroundColor: 'black',
  },
  darkmodeText: {
    color: 'white',
  },
  textBold: {
    fontWeight: 'bold',
  },
  boxwith: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 40,
  },
  boxShadow: {
    elevation: 50,
  },
  lightbluebox: {
    backgroundColor: 'red',
  },
  lightgreenbox: {
    backgroundColor: 'green',
  },
});

import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import pokemonList from './data.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ScrollView}>
        <Text style={styles.textPokemon}>Pokemon List</Text>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>Type: {item.type}</Text>
                <Text style={styles.cardText}>Name: {item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  ScrollView: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 25,
  },
  textPokemon: {
    fontSize: 35,
    paddingVertical: 10,
  },
});

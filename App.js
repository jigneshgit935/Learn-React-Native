import { ScrollView, StyleSheet, Text, View } from 'react-native';
import pokemonList from './data.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View>
          <Text style={styles.textPokemon}>Pokemon List</Text>
        </View>
        <View>
          {pokemonList.map((pokemon) => {
            return (
              <View style={styles.card} key={pokemon.id}>
                <Text style={styles.cardText}>Type: {pokemon.type}</Text>
                <Text style={styles.cardText}>Name: {pokemon.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
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

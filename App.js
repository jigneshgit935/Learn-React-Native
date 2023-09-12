import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import pokemonList from './data.json';
import groupedPokemonList from './data.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.ScrollView}>
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
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No Items Found</Text>
          }
          ListHeaderComponent={
            <Text style={styles.textPokemon}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.textPokemon}>End of List</Text>
          }
        />
      </View> */}

      <SectionList
        sections={groupedPokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeaderText}>{section.type}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        SectionSeparatorComponent={() => <View style={{ height: 16 }}></View>}
      />
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 25,
  },
  textPokemon: {
    fontSize: 35,
    paddingVertical: 10,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 20,
  },
  sectionHeaderText: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

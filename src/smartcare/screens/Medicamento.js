import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native'; // Importando TouchableOpacity e Platform
import { Searchbar, Button, Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando useNavigation

export function Medicamento() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Medicamento</Text>
      
      <Searchbar
        placeholder="Buscar..."
        style={styles.searchBar}
      />
      
      <TouchableOpacity
        style={[styles.addButton, Platform.OS === 'ios' ? styles.iosAddButton : styles.androidAddButton]}
        onPress={() => navigation.navigate('FormularioNovoRemedio')}
      >
        <Text style={styles.addButtonText}>Adicionar Novo Remedio</Text>
      </TouchableOpacity>

      
      <ScrollView style={styles.notesContainer}>
        {[...Array(15).keys()].map((index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('DetalheRemedio')}>
            <Card style={styles.card}>
              <Card.Content>
                <Text>Medicamento {index + 1}</Text>
              </Card.Content>
              <Card.Actions style={styles.cardActions}>
                <IconButton
                  icon="pencil-outline"
                  size={24}
                  onPress={() => console.log('Editar Medicamento')}
                />
                <IconButton
                  icon="delete"
                  size={24}
                  onPress={() => console.log('Apagar Medicamento')}
                />
              </Card.Actions>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 10,
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'lightgreen',
    marginBottom: 20,
    elevation: 2,
    borderRadius: 5, // Adicionando borda arredondada
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosAddButton: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  androidAddButton: {
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
  },
  notesContainer: {
    flex: 1,
  },
  card: {
    marginBottom: 10,
    elevation: 2,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Medicamento;

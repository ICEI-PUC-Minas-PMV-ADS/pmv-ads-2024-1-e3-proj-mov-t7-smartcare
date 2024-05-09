import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar, Button, Card as PaperCard, IconButton } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Exame() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Exames</Text>
      
      <Searchbar
        placeholder="Buscar..."
        style={styles.searchBar}
      />
      
      <TouchableOpacity
        style={[styles.addButton, Platform.OS === 'ios' ? styles.iosAddButton : styles.androidAddButton]}
        onPress={() => navigation.navigate('FormularioNovoExame')}
      >
        <Text style={styles.addButtonText}>Adicionar Novo Exame</Text>
      </TouchableOpacity>

      <ScrollView style={styles.notesContainer}>
        {[...Array(15).keys()].map((index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('DetalheExame')}>
            <PaperCard style={styles.card}>
              <PaperCard.Content>
                <Text>Exame {index + 1}</Text>
              </PaperCard.Content>
              <PaperCard.Actions style={styles.cardActions}>
                <IconButton
                  icon="pencil-outline"
                  size={24}
                  onPress={() => console.log('Editar Exame')}
                />
                <IconButton
                  icon="delete"
                  size={24}
                  onPress={() => console.log('Apagar Exame')}
                />
              </PaperCard.Actions>
            </PaperCard>
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
    marginBottom: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosAddButton: {
    backgroundColor: '#3EB59F',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  androidAddButton: {
    backgroundColor: '3EB59F',
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
  },
  notesContainer: {
    height: '40%',
  },
  card: {
    marginBottom: 10,
    elevation: 4,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Exame;

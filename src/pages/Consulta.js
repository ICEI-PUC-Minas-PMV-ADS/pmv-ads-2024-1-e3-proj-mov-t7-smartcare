import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform, Alert } from 'react-native';
import { Searchbar, Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export function Consulta({ navigation, route }) {
  const [receitas, setReceitas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function loadReceitas() {
      try {
        const savedReceitas = await AsyncStorage.getItem('receitas');
        if (savedReceitas !== null) {
          setReceitas(JSON.parse(savedReceitas));
        }
      } catch (error) {
        console.error('Erro ao carregar receitas:', error);
      }
    }

    loadReceitas();
  }, []);

  useEffect(() => {
    async function saveReceitas() {
      try {
        await AsyncStorage.setItem('receitas', JSON.stringify(receitas));
      } catch (error) {
        console.error('Erro ao salvar receitas:', error);
      }
    }

    saveReceitas();
  }, [receitas]);

  useFocusEffect(
    React.useCallback(() => {
      if (receitas.length > 0) {
        const receita = receitas[0]; // Pega a primeira receita como exemplo
        Alert.alert(
          'Lembrete',
          `Você possui ${receitas.length} receita(s) salva(s). Não se esqueça de verificar as informações. Por exemplo, a primeira receita é do médico: ${receita.medico}.`
        );
      }
    }, [receitas])
  );

  const adicionarReceita = (novaReceita) => {
    novaReceita.id = uuidv4();
    setReceitas([...receitas, novaReceita]);
  };

  const handleExcluirReceita = (id) => {
    Alert.alert(
      'Confirmar exclusão?',
      'Tem certeza de que deseja excluir esta receita?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            const novasReceitas = receitas.filter((receita) => receita.id !== id);
            setReceitas(novasReceitas);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handleDetalhesReceita = (receita) => {
    navigation.navigate('DetalheReceita', { receita, onSave: handleSave });
  };

  const handleSave = (receita) => {
    const index = receitas.findIndex((item) => item.id === receita.id);
    const updatedReceitas = [...receitas];
    updatedReceitas[index] = receita;
    setReceitas(updatedReceitas);
  };

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Consultas</Text>
      
      <Searchbar
        placeholder="Buscar Médico..."
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
      />
     
      <TouchableOpacity
        style={[styles.addButton, Platform.OS === 'ios' ? styles.iosAddButton : styles.androidAddButton]}
        onPress={() => navigation.navigate('FormularioNovaReceita', { adicionarReceita })}
      >
        <Text style={styles.addButtonText}>Adicionar Nova Receita</Text>
      </TouchableOpacity>

      <ScrollView style={styles.notesContainer}>
        {receitas
          .filter((receita) =>
            receita.medico.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((receita) => (
            <TouchableOpacity key={receita.id} onPress={() => handleDetalhesReceita(receita)}>
              <Card style={styles.card}>
                <Card.Content>
                  <Text>
                    <Text style={styles.boldText}>Médico:</Text> <Text style={styles.boldText}>{receita.medico}</Text>
                  </Text>
                  <Text>Recomendações: {receita.recomendacoes}</Text>
                  <Text>Validade: {receita.validade}</Text>
                  <Text>Retorno: {receita.retorno}</Text>
                  <Text>Hora: {receita.hora}</Text>
                </Card.Content>
                <Card.Actions style={styles.cardActions}>
                  <IconButton
                    icon="delete"
                    size={24}
                    onPress={() => handleExcluirReceita(receita.id)}
                  />
                </Card.Actions>
              </Card>
            </TouchableOpacity>
          ))}
      </ScrollView>
      <TouchableOpacity style={styles.buttonWhite} onPress={handleBack}>
        <Text style={styles.buttonTextBlack}>Voltar</Text>
      </TouchableOpacity>
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
    backgroundColor: '#3EB59F',
    marginBottom: 20,
    elevation: 2,
    borderRadius: 5,
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
    maxHeight: '80%',
  },
  card: {
    marginBottom: 10,
    elevation: 2,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonWhite: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonTextWhite: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextBlack: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Consulta;


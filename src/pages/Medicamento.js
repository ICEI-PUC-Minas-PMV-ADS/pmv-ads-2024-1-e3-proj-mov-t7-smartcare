import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Card, IconButton, Searchbar } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Medicamento() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [medicamentos, setMedicamentos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadMedicamentos = async () => {
      try {
        const medicamentosString = await AsyncStorage.getItem('@smartcare:medicamentos');
        if (medicamentosString !== null) {
          setMedicamentos(JSON.parse(medicamentosString));
        }
      } catch (error) {
        console.error('Erro ao carregar medicamentos:', error);
      }
    };

    loadMedicamentos();
  }, [isFocused]);

  const handleDetalheRemedio = (medicamento) => {
    navigation.navigate('DetalheRemedio', { medicamento, onSave: salvarMedicamento });
  };

  const handleNovoMedicamento = () => {
    navigation.navigate('FormularioNovoRemedio', { adicionarMedicamento });
  };

  const adicionarMedicamento = async (novoMedicamento) => {
    try {
      const updatedMedicamentos = [...medicamentos, novoMedicamento];
      await AsyncStorage.setItem('@smartcare:medicamentos', JSON.stringify(updatedMedicamentos));
      setMedicamentos(updatedMedicamentos);
    } catch (error) {
      console.error('Erro ao adicionar medicamento:', error);
    }
  };

  const salvarMedicamento = async (medicamentoAtualizado) => {
    const novosMedicamentos = medicamentos.map((m) =>
      m.id === medicamentoAtualizado.id ? medicamentoAtualizado : m
    );
    try {
      await AsyncStorage.setItem('@smartcare:medicamentos', JSON.stringify(novosMedicamentos));
      setMedicamentos(novosMedicamentos);
    } catch (error) {
      console.error('Erro ao salvar medicamento:', error);
    }
  };

  const handleExcluirMedicamento = async (medicamentoId) => {
    Alert.alert(
      'Excluir Medicamento',
      'Tem certeza que deseja excluir este medicamento?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Confirmar',
          onPress: () => excluirMedicamento(medicamentoId)
        }
      ]
    );
  };

  const excluirMedicamento = async (medicamentoId) => {
    const novosMedicamentos = medicamentos.filter((medicamento) => medicamento.id !== medicamentoId);
    try {
      await AsyncStorage.setItem('@smartcare:medicamentos', JSON.stringify(novosMedicamentos));
      setMedicamentos(novosMedicamentos);
    } catch (error) {
      console.error('Erro ao excluir medicamento:', error);
    }
  };

  const filteredMedicamentos = medicamentos.filter((medicamento) =>
    medicamento.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    exibirAlerta();
  }, []);

  const exibirAlerta = () => {
    Alert.alert(
      'Verificar Estoque e Datas',
      'Por favor, verifique a quantidade em estoque disponível e as datas cadastradas.',
      [
        {
          text: 'OK',
          onPress: () => console.log('Alerta fechado'),
        }
      ]
    );
  };

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Medicamento</Text>

      <Searchbar
        placeholder='Buscar remédio...'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleNovoMedicamento}
      >
        <Text style={styles.addButtonText}>Adicionar Novo Remédio</Text>
      </TouchableOpacity>

      <ScrollView style={styles.notesContainer}>
        {filteredMedicamentos.map((medicamento) => (
          <TouchableOpacity key={medicamento.id} onPress={() => handleDetalheRemedio(medicamento)}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardTitle}>{medicamento.nome}</Text>
                <Text style={styles.cardText}><Text style={styles.cardLabel}>Recomendações:</Text> {medicamento.recomendacoes}</Text>
                <Text style={styles.cardText}><Text style={styles.cardLabel}>Validade:</Text> {medicamento.validade}</Text>
                <Text style={styles.cardText}><Text style={styles.cardLabel}>Retorno:</Text> {medicamento.retorno}</Text>
                <Text style={styles.cardText}><Text style={styles.cardLabel}>Lembrete:</Text> {medicamento.lembrete}</Text>
                <Text style={styles.cardText}><Text style={styles.cardLabel}>Estoque:</Text> {medicamento.estoque}</Text>
              </Card.Content>
              <Card.Actions style={styles.cardActions}>
                <IconButton
                  icon='delete'
                  size={24}
                  onPress={() => handleExcluirMedicamento(medicamento.id)}
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
    marginTop: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#3EB59F',
    marginBottom: 20,
    elevation: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLabel: {
    fontWeight: 'bold',
  },
  cardText: {
    marginBottom: 5,
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

export default Medicamento;

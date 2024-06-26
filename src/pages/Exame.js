import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform, Alert } from 'react-native';
import { Searchbar, Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { useFocusEffect } from '@react-navigation/native';

const Exame = ({ navigation }) => {
  const [exames, setExames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function loadExames() {
      try {
        const savedExames = await AsyncStorage.getItem('exames');
        if (savedExames !== null) {
          setExames(JSON.parse(savedExames));
        }
      } catch (error) {
        console.error('Erro ao carregar exames:', error);
      }
    }

    loadExames();
  }, []);

  useEffect(() => {
    async function saveExames() {
      try {
        await AsyncStorage.setItem('exames', JSON.stringify(exames));
        // Após salvar os exames, atualizar as notificações agendadas
        updateScheduledNotifications();
      } catch (error) {
        console.error('Erro ao salvar exames:', error);
      }
    }

    saveExames();
  }, [exames]);

  useEffect(() => {
    // Verificar permissões e registrar para notificações push ao montar a tela
    registerForPushNotificationsAsync();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (exames.length > 0) {
        const exame = exames[0]; // Pega o primeiro exame como exemplo
        Alert.alert(
          'Lembrete de Exames',
          `Você possui ${exames.length} exame(s) agendado(s). Não se esqueça de verificar os detalhes. Por exemplo, o primeiro exame é: ${exame.nomeExame} no dia ${exame.dataExame} às ${exame.horarios ? exame.horarios[0] : 'N/A'}.`
        );
      }
    }, [exames])
  );

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return;
    }

    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
  };

  const adicionarExame = (novoExame) => {
    novoExame.id = uuidv4();
    setExames([...exames, novoExame]);
  };

  const handleExcluirExame = (id) => {
    Alert.alert(
      'Confirmar exclusão?',
      'Tem certeza de que deseja excluir este exame?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            const novosExames = exames.filter((exame) => exame.id !== id);
            setExames(novosExames);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handleDetalhesExame = (exame) => {
    navigation.navigate('DetalheExame', { exame, onSave: handleSave });
  };

  const handleSave = (exame) => {
    const index = exames.findIndex((item) => item.id === exame.id);
    const updatedExames = [...exames];
    updatedExames[index] = exame;
    setExames(updatedExames);
  };

  const updateScheduledNotifications = async () => {
    // Cancelar todas as notificações agendadas
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Agendar notificações para os exames
    exames.forEach((exame) => {
      exame.horarios.forEach((horario) => {
        const dataHoraExame = new Date(`${exame.dataExame}T${horario}`);
        scheduleNotification(exame.nomeExame, dataHoraExame);
      });
    });
  };

  const scheduleNotification = async (titulo, dataHora) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Lembrete de Exame',
        body: `Você tem um exame agendado de ${titulo} às ${dataHora.toLocaleTimeString()}.`,
      },
      trigger: {
        date: dataHora,
      },
    });
  };

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Exames</Text>
      
      <Searchbar
        placeholder="Buscar..."
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <TouchableOpacity
        style={[styles.addButton, Platform.OS === 'ios' ? styles.iosAddButton : styles.androidAddButton]}
        onPress={() => navigation.navigate('FormularioNovoExame', { adicionarExame })}
      >
        <Text style={styles.addButtonText}>Adicionar Novo Exame</Text>
      </TouchableOpacity>

      <ScrollView style={styles.notesContainer}>
        {exames
          .filter((exame) => exame.nomeExame.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((exame) => (
            <TouchableOpacity key={exame.id} onPress={() => handleDetalhesExame(exame)}>
              <Card style={styles.card}>
                <Card.Content>
                  <Text>
                    <Text style={styles.boldText}>Nome do Exame:</Text> <Text style={styles.boldText}>{exame.nomeExame}</Text>
                  </Text>
                  <Text>Data: {exame.dataExame}</Text>
                  <Text>Local do Exame: {exame.localExame}</Text>
                  {exame.horarios && <Text>Hora: {exame.horarios[0]}</Text>}
                </Card.Content>
                <Card.Actions style={styles.cardActions}>
                  <IconButton
                    icon="delete"
                    size={24}
                    onPress={() => handleExcluirExame(exame.id)} 
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
};

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

export default Exame;

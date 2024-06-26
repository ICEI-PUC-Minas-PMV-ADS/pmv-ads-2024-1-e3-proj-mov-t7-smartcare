import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const FormularioNovoExame = ({ navigation, route }) => {
  const [nomeExame, setNomeExame] = useState('');
  const [dataExame, setDataExame] = useState('');
  const [localExame, setLocalExame] = useState('');
  const [inicioNotificacao, setInicioNotificacao] = useState('');
  const [fimNotificacao, setFimNotificacao] = useState('');
  const [horaNotificacao, setHoraNotificacao] = useState('');
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const loadNextId = async () => {
      try {
        const savedNextId = await AsyncStorage.getItem('nextId');
        if (savedNextId) {
          setNextId(parseInt(savedNextId, 10));
        }
      } catch (error) {
        console.error('Erro ao carregar o próximo ID:', error);
      }
    };
    loadNextId();
  }, []);

  const handleDataExameChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); 
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setDataExame(formattedDate.slice(0, 10)); 
  };

  const handleLocalExameChange = (text) => {
    setLocalExame(text);
  };

  const handleInicioNotificacaoChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); 
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setInicioNotificacao(formattedDate.slice(0, 10)); 
  };

  const handleFimNotificacaoChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); 
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setFimNotificacao(formattedDate.slice(0, 10)); 
  };

  const handleHoraNotificacaoChange = (text) => {
    let formattedTime = text.replace(/\D/g, ''); 
    if (formattedTime.length > 2) {
      formattedTime = formattedTime.replace(/(\d{2})(\d{0,2})/, '$1:$2');
    }

    const [hour, minute] = formattedTime.split(':').map((val) => parseInt(val) || 0);
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
      formattedTime = '';
    }
    setHoraNotificacao(formattedTime.slice(0, 5)); 
  };

  const handleSalvarExame = async () => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(?!3000\d{2})\d{4}$/;
    const timeRegex = /^\d{2}:\d{2}$/;

    if (!nomeExame || !dataExame || !localExame || !inicioNotificacao || !fimNotificacao || !horaNotificacao) {
      Alert.alert(
        "Erro!",
        "Por favor, preencha todos os campos."
      );
      return;
    }

    if (!dateRegex.test(dataExame)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de exame válida (DD/MM/AAAA)."
      );
      return;
    }

    if (!dateRegex.test(inicioNotificacao)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de início de notificação válida (DD/MM/AAAA)."
      );
      return;
    }

    if (!dateRegex.test(fimNotificacao)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de fim de notificação válida (DD/MM/AAAA)."
      );
      return;
    }

    if (!timeRegex.test(horaNotificacao)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma hora de notificação válida (HH:mm)."
      );
      return;
    }

    const novoExame = {
      id: nextId,
      nomeExame,
      dataExame,
      localExame,
      inicioNotificacao,
      fimNotificacao,
      horaNotificacao,
    };

    try {
      const examesAntigos = await AsyncStorage.getItem('exames');
      const exames = examesAntigos ? JSON.parse(examesAntigos) : [];
      const novosExames = [...exames, novoExame];
      await AsyncStorage.setItem('exames', JSON.stringify(novosExames));
      await AsyncStorage.setItem('nextId', (nextId + 1).toString());
      console.log('Exame salvo com sucesso:', novoExame);
      setNextId(nextId + 1);
      route.params.adicionarExame(novoExame);
      navigation.navigate('Exame');
    } catch (error) {
      console.error('Erro ao salvar exame:', error);
      Alert.alert('Erro', 'Erro ao salvar exame. Por favor, tente novamente.');
    }
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.title, { marginTop: 30 }]}>Novo Exame</Text>

        <View style={styles.card}>
          <Text>Nome do exame:</Text>
          <TextInput
            style={[styles.input, styles.nameInput]}
            value={nomeExame}
            onChangeText={setNomeExame}
          />
        </View>

        <View style={styles.card}>
          <Text>Data:</Text>
          <TextInput
            style={[styles.input, styles.leftAlignedInput]}
            placeholder="dd/mm/aaaa"
            value={dataExame}
            onChangeText={handleDataExameChange}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.card}>
          <Text>Local do exame:</Text>
          <TextInput
            style={[styles.input, styles.nameInput, styles.leftAlignedInput]}
            value={localExame}
            onChangeText={handleLocalExameChange}
          />
        </View>

        <View style={styles.card}>
          <Text>Início da notificação:</Text>
          <TextInput
            style={[styles.input, styles.leftAlignedInput]}
            placeholder="dd/mm/aaaa"
            value={inicioNotificacao}
            onChangeText={handleInicioNotificacaoChange}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.card}>
          <Text>Fim da notificação:</Text>
          <TextInput
            style={[styles.input, styles.leftAlignedInput]}
            placeholder="dd/mm/aaaa"
            value={fimNotificacao}
            onChangeText={handleFimNotificacaoChange}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.card}>
          <Text>Hora de notificação:</Text>
          <TextInput
            style={[styles.input, styles.leftAlignedInput]}
            placeholder="hh:mm"
            value={horaNotificacao}
            onChangeText={handleHoraNotificacaoChange}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleSalvarExame}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#ff4040' }]} onPress={handleCancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#3EB59F',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
  },
  nameInput: {
    marginBottom: 10,
  },
  leftAlignedInput: {
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FormularioNovoExame;

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const FormularioNovaReceita = ({ navigation, route }) => {
  const [medico, setMedico] = useState('');
  const [recomendacoes, setRecomendacoes] = useState('');
  const [validade, setValidade] = useState('');
  const [retorno, setRetorno] = useState('');
  const [dataLembrete, setDataLembrete] = useState('');
  const [horaLembrete, setHoraLembrete] = useState('');

  const { adicionarReceita } = route.params;

  const handleDataChange = (text, setState) => {
    let formattedDate = text.replace(/\D/g, ''); 
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setState(formattedDate.slice(0, 10)); 
  };

  const handleHoraChange = (text) => {
    let formattedTime = text.replace(/\D/g, ''); 
    if (formattedTime.length > 2) {
      formattedTime = formattedTime.replace(/(\d{2})(\d{0,2})/, '$1:$2');
    }

    // Verificar se a hora está no formato correto de 24 horas (00:00 a 23:59)
    const [hour, minute] = formattedTime.split(':').map((val) => parseInt(val) || 0);
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
      formattedTime = '';
    }

    setHoraLembrete(formattedTime.slice(0, 5)); 
  };

  const handleSalvar = async () => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (!medico || !recomendacoes || !validade || !retorno || !dataLembrete || !horaLembrete) {
      Alert.alert(
        "Erro!",
        "Por favor, preencha todos os campos."
      );
      return;
    }

    if (!dateRegex.test(validade)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de validade válida (DD/MM/AAAA)."
      );
      return;
    }

    if (!dateRegex.test(retorno)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de retorno válida (DD/MM/AAAA)."
      );
      return;
    }

    if (!dateRegex.test(dataLembrete)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de lembrete válida (DD/MM/AAAA)."
      );
      return;
    }

    if (!timeRegex.test(horaLembrete)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma hora de lembrete válida (HH:mm)."
      );
      return;
    }

    try {
      let receitasString = await AsyncStorage.getItem("@smartcare:receitas");
      let receitas = [];

      if (receitasString !== null) {
        receitas = JSON.parse(receitasString);
      }

      const novaReceita = {
        id: Math.random().toString(),
        medico,
        recomendacoes,
        validade,
        retorno,
        lembrete: `${dataLembrete}`,
        hora: `${horaLembrete}`,
      };

      await AsyncStorage.setItem(
        "@smartcare:receitas",
        JSON.stringify([...receitas, novaReceita])
      );

      adicionarReceita(novaReceita);
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar a receita:", error);
      Alert.alert("Erro!", "Ocorreu um erro ao salvar a receita. Por favor, tente novamente.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.title, { marginTop: 30 }]}>Nova Receita</Text>

        <View style={styles.card}>
          <Text>Médico prescritor:</Text>
          <TextInput
            style={[styles.input, styles.nameInput]}
            value={medico}
            onChangeText={setMedico}
          />
        </View>

        <View style={styles.card}>
          <Text>Recomendações:</Text>
          <TextInput
            style={[styles.input, styles.leftAlignedInput, styles.textArea]}
            multiline={true}
            numberOfLines={4}
            value={recomendacoes}
            onChangeText={setRecomendacoes}
          />
        </View>

        <View style={styles.card}>
          <Text>Validade:</Text>
          <TextInput
            style={[styles.input, styles.leftAlignedInput]}
            placeholder="dd/mm/aaaa"
            value={validade}
            onChangeText={(text) => handleDataChange(text, setValidade)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.card}>
          <Text>Retorno:</Text>
          <TextInput
            style={[styles.input, styles.leftAlignedInput]}
            placeholder="dd/mm/aaaa"
            value={retorno}
            onChangeText={(text) => handleDataChange(text, setRetorno)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.card}>
          <Text>Lembrete:</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={[styles.input, styles.leftAlignedInput, { flex: 1 }]}
              placeholder="dd/mm/aaaa"
              value={dataLembrete}
              onChangeText={(text) => handleDataChange(text, setDataLembrete)}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.leftAlignedInput, { flex: 1, marginLeft: 10 }]}
              placeholder="hh:mm"
              value={horaLembrete}
              onChangeText={handleHoraChange}
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleSalvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#ff4040' }]} onPress={() => navigation.goBack()}>
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
    marginBottom: 50,
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
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    overflow: 'scroll',
  },
});

export default FormularioNovaReceita;

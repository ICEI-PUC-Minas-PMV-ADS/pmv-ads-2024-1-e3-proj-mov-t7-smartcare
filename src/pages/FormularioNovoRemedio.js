import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const FormularioNovoRemedio = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [recomendacoes, setRecomendacoes] = useState('');
  const [validade, setValidade] = useState('');
  const [retorno, setRetorno] = useState('');
  const [lembrete, setLembrete] = useState('');
  const [estoque, setEstoque] = useState('');

  const handleSalvar = async () => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(20\d{2}|2[0-9]{3})$/;
    const timeRegex = /^\d{2}:\d{2}$/;

    if (!nome || !validade || !retorno || !lembrete || !estoque) {
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

    if (!dateRegex.test(lembrete.split(' ')[0])) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de lembrete válida (DD/MM/AAAA HH:mm)."
      );
      return;
    }

    if (!timeRegex.test(lembrete.split(' ')[1])) {
      Alert.alert(
        "Erro!",
        "Por favor, insira um horário de lembrete válido (DD/MM/AAAA HH:mm)."
      );
      return;
    }

    if (isNaN(parseInt(estoque)) || parseInt(estoque) < 0) {
      Alert.alert(
        "Erro!",
        "Por favor, insira um valor válido para o estoque."
      );
      return;
    }

    try {
      let medicamentosString = await AsyncStorage.getItem("@smartcare:medicamentos");
      let medicamentos = [];

      if (medicamentosString !== null) {
        medicamentos = JSON.parse(medicamentosString);
      }

      const novoMedicamento = {
        id: Math.random().toString(),
        nome,
        recomendacoes,
        validade,
        retorno,
        lembrete,
        estoque: parseInt(estoque)
      };

      await AsyncStorage.setItem(
        "@smartcare:medicamentos",
        JSON.stringify([...medicamentos, novoMedicamento])
      );

      if (route.params && route.params.adicionarMedicamento) {
        route.params.adicionarMedicamento(novoMedicamento);
      }

      navigation.navigate('Medicamento');
    } catch (error) {
      console.error("Erro ao salvar o medicamento:", error);
      Alert.alert("Erro!", "Ocorreu um erro ao salvar o medicamento. Por favor, tente novamente.");
    }
  };

  const handleDataLembreteChange = (text) => {
    setLembrete(text + ' ' + (lembrete.split(' ')[1] || ''));
  };

  const handleHoraLembreteChange = (text) => {
    let formattedTime = text.replace(/\D/g, ''); 
    if (formattedTime.length > 2) {
      formattedTime = formattedTime.replace(/(\d{2})(\d{0,2})/, '$1:$2');
    }

    const [hour, minute] = formattedTime.split(':').map((val) => parseInt(val) || 0);
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
      formattedTime = '';
    }
    setLembrete((lembrete.split(' ')[0] || '') + ' ' + formattedTime.slice(0, 5));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 45 }}>Novo Remédio</Text>
        <View style={{ height: 20 }} />
        <Card>
          <Text>Nome do remédio:</Text>
          <TextInput 
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            keyboardType="default"
          />
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text>Recomendações:</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            value={recomendacoes}
            onChangeText={setRecomendacoes}
            multiline={true} 
            numberOfLines={4} 
          />
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text>Validade:</Text>
          <FormattedTextInput value={validade} onChangeText={setValidade} />
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text>Retorno:</Text>
          <FormattedTextInput value={retorno} onChangeText={setRetorno} />
          <Text style={{ marginTop: 10 }}>Lembrete:</Text>
          <View style={{ flexDirection: 'row' }}>
            <FormattedTextInput value={lembrete.split(' ')[0]} onChangeText={handleDataLembreteChange} placeholder="dd/mm/aaaa" />
            <FormattedTimeInput value={lembrete.split(' ')[1] || ''} onChangeText={handleHoraLembreteChange} placeholder="hh:mm" />
          </View>
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text>Estoque:</Text>
          <TextInput 
            style={styles.input}
            value={estoque}
            onChangeText={setEstoque}
            keyboardType="numeric"
            placeholder="Digite a quantidade em estoque"
          />
        </Card>
        <View style={{ height: 10 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleSalvar}>
            <Text style={{ color: 'white' }}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#ff4040' }]} onPress={() => navigation.goBack()}>
            <Text style={{ color: 'white' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const FormattedTextInput = ({ value, onChangeText }) => {
  const formatText = (input) => {
    let formattedText = input.replace(/\D/g, '');
    if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + '/' + formattedText.slice(2);
    }
    if (formattedText.length > 5) {
      formattedText = formattedText.slice(0, 5) + '/' + formattedText.slice(5);
    }
    return formattedText.slice(0, 10);
  };

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={(input) => onChangeText(formatText(input))}
      placeholder="dd/mm/aaaa"
      keyboardType="numeric"
    />
  );
};

const FormattedTimeInput = ({ value, onChangeText }) => {
  const formatText = (input) => {
    let formattedText = input.replace(/\D/g, '');
    if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + ':' + formattedText.slice(2);
    }
    return formattedText.slice(0, 5);
  };

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={(input) => onChangeText(formatText(input))}
      placeholder="hh:mm"
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3EB59F',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 10,
    elevation: 5,
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
  textArea: {
    height: 80,
    paddingTop: 5,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '45%',
    alignItems: 'center',
  },
});

export default FormularioNovoRemedio;

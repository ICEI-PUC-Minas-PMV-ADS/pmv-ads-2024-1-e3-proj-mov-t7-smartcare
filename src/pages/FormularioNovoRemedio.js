import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const FormularioNovoRemedio = () => {
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
            keyboardType="default"
          />
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text>Recomendações:</Text>
          <TextInput style={[styles.input, styles.textArea]} multiline={true} numberOfLines={4} />
        </Card>
        <View style={{ height: 10 }} />
        <Card keyboardType="numeric">
          <Text>Validade:</Text>
          <FormattedTextInput />
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text>Retorno:</Text>
          <FormattedTextInput keyboardType="numeric" />
          <Text style={{ marginTop: 10 }}>Lembrete:</Text>
          <View style={{ flexDirection: 'row' }}>
            <FormattedTextInput keyboardType="numeric" />
            <FormattedTimeInput keyboardType="numeric" />
          </View>
        </Card>
        <View style={{ height: 10 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
            <Text style={{ color: 'white' }}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
            <Text style={{ color: 'white' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Card = ({ children, keyboardType }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const FormattedTextInput = () => {
  const [text, setText] = useState('');

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
      value={text}
      onChangeText={(input) => setText(formatText(input))}
      placeholder="dd/mm/aaaa"
      keyboardType="numeric"
    />
  );
};

const FormattedTimeInput = ({ keyboardType }) => {
  const [text, setText] = useState('');

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
      value={text}
      onChangeText={(input) => setText(formatText(input))}
      placeholder="hh:mm"
      keyboardType={keyboardType}
    />
  );
};

const styles = {
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
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default FormularioNovoRemedio;

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { StyleSheet } from 'react-native';

const FormularioNovaReceita = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        {/* Título com marginTop reduzido */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 30 }}>Nova Receita</Text>

        {/* Salto de espaço */}
        <View style={{ height: 20 }} />

        {/* Card 1 - Médico prescritor */}
        <Card>
          <Text>Médico prescritor:</Text>
          <TextInput 
            style={styles.input}
            keyboardType="default"
          />
        </Card>

        {/* Salto de espaço */}
        <View style={{ height: 10 }} />

        {/* Card 2 - Recomendações */}
        <Card>
          <Text>Recomendações:</Text>
          <TextInput style={[styles.input, styles.textArea]} multiline={true} numberOfLines={4} />
        </Card>

        {/* Salto de espaço */}
        <View style={{ height: 10 }} />

        {/* Card 3 - Validade */}
        <Card>
          <Text>Validade:</Text>
          <FormattedTextInput keyboardType="numeric" />
        </Card>

        {/* Salto de espaço */}
        <View style={{ height: 10 }} />

        {/* Card 4 - Retorno e Lembrete */}
        <Card>
          <Text>Retorno:</Text>
          <FormattedTextInput keyboardType="numeric" />
          <Text style={{ marginTop: 10 }}>Lembrete:</Text>
          <View style={{ flexDirection: 'row' }}>
            <FormattedTextInput keyboardType="numeric" />
            <FormattedTimeInput keyboardType="numeric" />
          </View>
        </Card>

        {/* Salto de espaço */}
        <View style={{ height: 10 }} />

        {/* Botões Salvar e Cancelar */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
            <Text style={{ color: 'white' }}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#C95E5E' }]}>
            <Text style={{ color: 'white' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Componente Card para estilizar e agrupar elementos relacionados
const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

// Componente TextInput formatado para data
const FormattedTextInput = ({ keyboardType }) => {
  const [text, setText] = useState('');

  // Função para formatar a entrada do usuário
  const formatText = (input) => {
    // Remove qualquer coisa que não seja dígito
    let formattedText = input.replace(/\D/g, '');

    // Adiciona a primeira barra depois de dois dígitos
    if (formattedText.length > 2) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
    }

    // Adiciona a segunda barra depois de cinco dígitos
    if (formattedText.length > 5) {
      formattedText = `${formattedText.slice(0, 5)}/${formattedText.slice(5)}`;
    }

    // Limita o tamanho do texto
    return formattedText.slice(0, 10);
  };

  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={(input) => setText(formatText(input))}
      placeholder="dd/mm/aaaa"
      keyboardType={keyboardType}
    />
  );
};

// Componente TextInput formatado para hora
const FormattedTimeInput = ({ keyboardType }) => {
  const [text, setText] = useState('');

  // Função para formatar a entrada do usuário
  const formatText = (input) => {
    // Remove qualquer coisa que não seja dígito
    let formattedText = input.replace(/\D/g, '');

    // Adiciona os dois pontos depois de dois dígitos
    if (formattedText.length > 2) {
      formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(2)}`;
    }

    // Limita o tamanho do texto
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3EB59F',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 10, // Diminui o espaço entre os cards
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
    textAlignVertical: 'top', // Para alinhar o texto ao topo no Android
    overflow: 'scroll', // Adiciona um overflow ao campo
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
});

export default FormularioNovaReceita;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const DetalheExame = ({ route, navigation }) => {
  const [exame, setExame] = useState(route.params.exame);
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    route.params.onSave(exame); // Envie as alterações de volta para a tela "Exame"
    navigation.goBack(); // Navegue de volta para a tela anterior
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Exame</Text>
          {editable ? (
            <TouchableOpacity onPress={handleSave} style={[styles.button, { backgroundColor: 'green' }]}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleEdit} style={[styles.button, { backgroundColor: '#7694e9' }]}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.space} />
        <Text style={styles.subtitle}>Tipo:</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            value={exame.nomeExame}
            onChangeText={(text) => setExame({...exame, nomeExame: text})}
            editable={editable}
          />
        </View>

        <View style={styles.space} />
        <Text style={styles.subtitle}>Data:</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            value={exame.dataExame}
            onChangeText={(text) => setExame({...exame, dataExame: text})}
            editable={editable}
          />
        </View>

        <View style={styles.space} />
        <Text style={styles.subtitle}>Local:</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            value={exame.localExame}
            onChangeText={(text) => setExame({...exame, localExame: text})}
            editable={editable}
          />
        </View>

        <View style={styles.space} />
        <Text style={styles.subtitle}>Hora:</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            value={exame.horaNotificacao}
            onChangeText={(text) => setExame({...exame, horaNotificacao: text})}
            editable={editable}
          />
        </View>
        
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  space: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#3EB59F',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DetalheExame;

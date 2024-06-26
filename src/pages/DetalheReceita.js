import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';

const DetalheReceita = ({ navigation, route }) => {
  const [editable, setEditable] = useState(false);
  const [receita, setReceita] = useState(route.params.receita);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    route.params.onSave(receita);
    navigation.navigate('Consulta');
  };

  const handleHoraChange = (text) => {
    if (text.length === 2 && !text.includes(':')) {
      text = text + ':';
    }
    setReceita({ ...receita, hora: text });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Receita</Text>
        {editable ? (
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.editButton}>Editar</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Médico:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <TextInput
          style={styles.input}
          value={receita.medico}
          onChangeText={(text) => setReceita({ ...receita, medico: text })}
          editable={editable}
        />
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Recomendações:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={receita.recomendacoes}
          onChangeText={(text) => setReceita({ ...receita, recomendacoes: text })}
          editable={editable}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Validade:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <TextInput
          style={styles.input}
          value={receita.validade}
          onChangeText={(text) => setReceita({ ...receita, validade: text })}
          editable={editable}
        />
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Retorno:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <TextInput
          style={styles.input}
          value={receita.retorno}
          onChangeText={(text) => setReceita({ ...receita, retorno: text })}
          editable={editable}
        />
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Hora:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <TextInput
          style={styles.input}
          value={receita.hora}
          onChangeText={handleHoraChange}
          editable={editable}
          keyboardType="numeric"
          maxLength={5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  left: {
    textAlign: 'left',
  },
  space: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#3EB59F',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
  },
  fullWidth: {
    width: '100%',
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
  multilineInput: {
    height: 100,
  },
  saveButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  editButton: {
    color: 'white',
    backgroundColor: '#7694e9',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginTop: 50,
  },
});

export default DetalheReceita;

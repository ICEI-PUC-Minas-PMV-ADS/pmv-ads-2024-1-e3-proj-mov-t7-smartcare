import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const DetalheRemedio = ({ route, navigation }) => {
  const [medicamento, setMedicamento] = useState(route.params.medicamento);
  const [editable, setEditable] = useState(false);
  const [quantidade, setQuantidade] = useState(medicamento.estoque || 0);
  const [valor, setValor] = useState('');

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    route.params.onSave({ ...medicamento, estoque: quantidade });
    navigation.goBack();
  };

  const handleAddMedicamento = () => {
    const quantidadeAdicionar = parseInt(valor, 10) || 0;
    setQuantidade(quantidade + quantidadeAdicionar);
    setValor('');
  };

  const handleConfirmacaoDose = () => {
    const quantidadeSubtrair = parseInt(valor, 10) || 0;
    setQuantidade(quantidade - quantidadeSubtrair);
    setValor('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Detalhes do Remédio</Text>
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
          <Text style={styles.subtitle}>Medicação:</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              value={medicamento.nome}
              onChangeText={(text) => setMedicamento({ ...medicamento, nome: text })}
              editable={editable}
            />
          </View>

          <View style={styles.space} />
          <Text style={styles.subtitle}>Recomendações:</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              value={medicamento.recomendacoes}
              onChangeText={(text) => setMedicamento({ ...medicamento, recomendacoes: text })}
              editable={editable}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.space} />
          <Text style={styles.subtitle}>Validade:</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              value={medicamento.validade}
              onChangeText={(text) => setMedicamento({ ...medicamento, validade: text })}
              editable={editable}
            />
          </View>

          <View style={styles.space} />
          <Text style={styles.subtitle}>Retorno:</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              value={medicamento.retorno}
              onChangeText={(text) => setMedicamento({ ...medicamento, retorno: text })}
              editable={editable}
            />
          </View>

          <View style={styles.space} />
          <Text style={styles.subtitle}>Lembrete:</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              value={medicamento.lembrete}
              onChangeText={(text) => setMedicamento({ ...medicamento, lembrete: text })}
              editable={editable}
            />
          </View>

          <View style={styles.space} />
          <Text style={styles.subtitle}>Estoque:</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              value={valor} // Deixar como string
              onChangeText={setValor} // Atualiza o valor diretamente
              editable={editable}
              placeholder='0'
              keyboardType="numeric" // Teclado numérico
            />
          </View>
          <Text style={styles.subtitle}>Quantidade Atual: {quantidade}</Text>
          <Button
            mode="contained"
            onPress={handleAddMedicamento}
            disabled={!editable}
            buttonColor="#4CAF50" // Cor verde
          >
            Adicionar Medicamento
          </Button>
          <Button
            mode="contained"
            onPress={handleConfirmacaoDose}
            disabled={!editable}
            buttonColor="#f44336" // Cor vermelha
            style={styles.confirmButton}
          >
            Confirmação de Dose
          </Button>
          
        </View>
      </ScrollView>
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
  confirmButton: {
    marginTop: 10, // Adiciona um espaço entre os botões
  }
});

export default DetalheRemedio;

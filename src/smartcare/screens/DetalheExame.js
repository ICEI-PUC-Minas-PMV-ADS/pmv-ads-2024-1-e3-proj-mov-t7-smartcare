import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const DetalheExame = () => {
  const marginTopTitulo = 30;
  const marginTopParagrafo = 15;

  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, {marginTop: marginTopTitulo, paddingBottom: 10}]}>Exame</Text>
      <Text style={[styles.paragrafo, {marginTop: marginTopParagrafo}]}>Tipo de exame:</Text>
      <View style={styles.card}>
        <Text>
          <Text style={styles.itemLista}>- Exame de sangue</Text>
          {"\n"}
          <Text style={styles.itemLista}>- Raio-X</Text>
          {"\n"}
          <Text style={styles.itemLista}>- Ultrassonografia</Text>
        </Text>
      </View>
      <Text style={[styles.paragrafo, {marginTop: marginTopParagrafo}]}>Data de realização:</Text>
      <View style={styles.card}>
        <Text>
          <Text style={styles.itemLista}>- 10/04/2024</Text>
        </Text>
      </View>
      <Text style={[styles.paragrafo, {marginTop: marginTopParagrafo}]}>Local:</Text>
      <View style={styles.card}>
        <Text>
          <Text style={styles.itemLista}>- Hospital XYZ</Text>
        </Text>
      </View>
      <Text style={[styles.paragrafo, {marginTop: marginTopParagrafo}]}>Arquivos:</Text>
      <View style={styles.card}>
        <Text>
          <Text style={styles.itemLista}>- Arquivo.pdf</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragrafo: {
    fontSize: 18,
    textAlign: 'left',
  },
  card: {
    backgroundColor: 'lightgreen',
    width: Dimensions.get('window').width - 40, // Usando a largura da tela menos o padding
    minHeight: 100,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 2,
  },
  itemLista: {
    marginBottom: 5,
  },
});

export default DetalheExame;

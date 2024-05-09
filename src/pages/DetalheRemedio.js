import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalheRemedio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remédio</Text>
      <View style={styles.space} />
      <Text style={styles.subtitle}>Medicação:</Text>
      <View style={styles.card}>
        <Text style={styles.cardContent}>Paracetamol</Text>
      </View>
      <View style={styles.space} />
      <Text style={styles.subtitle}>Administração:</Text>
      <View style={styles.card}>
        <Text style={styles.cardContent}>1 em 1 hora</Text>
      </View>
      <View style={styles.space} />
      <Text style={styles.subtitle}>Prazo:</Text>
      <View style={styles.card}>
        <Text style={styles.cardContent}>10 de abril de 2024</Text>
      </View>
      <View style={styles.space} />
      <Text style={styles.subtitle}>Quantidade em estoque:</Text>
      <View style={styles.card}>
        <Text style={styles.listItem}>- 250 cápsulas</Text>
        <Text style={styles.listItem}>- Reabastecer em 50 cápsulas</Text>
      </View>
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
    backgroundColor: '#5BCEB9',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  listItem: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
});

export default DetalheRemedio;


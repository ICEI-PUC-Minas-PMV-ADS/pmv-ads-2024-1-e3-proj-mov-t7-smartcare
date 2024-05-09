import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalheReceita = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receita</Text>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Médico:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <Text style={styles.cardText}>Dr. Fulano de Tal</Text>
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Recomendações:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <Text style={styles.cardText}>1. Tomar medicamento X três vezes ao dia.</Text>
        <Text style={styles.cardText}>2. Evitar alimentos gordurosos.</Text>
        <Text style={styles.cardText}>3. Praticar exercícios regularmente.</Text>
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Validade:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <Text style={styles.cardText}>01/01/2025</Text>
      </View>
      <View style={styles.space} />
      <Text style={[styles.subtitle, styles.left]}>Retorno:</Text>
      <View style={[styles.card, styles.fullWidth]}>
        <Text style={styles.cardText}>15/06/2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'normal',
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
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
  },
  fullWidth: {
    width: '100%',
  },
});

export default DetalheReceita;

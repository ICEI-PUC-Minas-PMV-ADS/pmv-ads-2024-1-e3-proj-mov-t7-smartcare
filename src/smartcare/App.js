import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppRoutes } from './src/routes/app.routes';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

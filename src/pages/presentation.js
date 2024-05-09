// Página inicial do aplicativo.
// Deve mostrar a logo do App e dois botões um de login, para quem já é registrado no app e
// Outro de Registrar para quem ainda não possui cadastro no aplicativo.
// Ambas as opções devem levar para a tela da HOME PAGE ao serem finalizadas com sucesso.

import { View, StyleSheet, Image, Alert } from "react-native";
import React, { useState } from "react";
import SmartCareLogo from "../../assets/SmartCareLogo.png";
import GreenButton from "../../components/greenButton";
import WhiteButton from "../../components/whiteButon";

export const Presentation = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={SmartCareLogo} />
      </View>
      <View style={styles.btnGroup}>
        <GreenButton onPress={handleLoginPress} />
        <WhiteButton onPress={handleRegisterPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#ffff",
  },
  btnGroup: {
    width: "90%",
    alignItems: "center",
  },
});


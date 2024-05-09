import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AccountRecovery = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCancel = () => {
    // Lógica para cancelar a recuperação de conta
    console.log("Recuperação de conta cancelada");
  };

  const handleSend = () => {
    // Lógica para enviar a solicitação de recuperação de conta
    console.log("E-mail:", email);
    console.log("Senha:", password);
  };

  const handleRecoveryPress = () => {
    navigation.navigate("Recovery");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de conta</Text>
      <Text style={styles.description}>
        Informe seu e-mail e número de celular para recuperação da senha:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.buttonGreen} onPress={handleCancel}>
        <Text style={styles.buttonTextWhite}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWhite} onPress={handleSend}>
        <Text style={styles.buttonTextBlack}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonGreen: {
    width: "100%",
    backgroundColor: "#3EB59F",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonWhite: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonTextWhite: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextBlack: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AccountRecovery;

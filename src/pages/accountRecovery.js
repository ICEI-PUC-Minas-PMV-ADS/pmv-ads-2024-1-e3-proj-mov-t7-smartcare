import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as MailComposer from "expo-mail-composer";

const AccountRecovery = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCancel = () => {
    Alert.alert(
      "Confirmar Cancelamento",
      "Você realmente quer cancelar a recuperação de conta?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => navigation.navigate("Presentation"), // Navegue para a tela inicial
        },
      ],
      { cancelable: false }
    );
  };

  const generateRandomPassword = () => {
    const newPassword = Math.random().toString(36).slice(-8);
    return newPassword;
  };

  const handleSend = async () => {
    try {
      const newPassword = generateRandomPassword();

      // Obter os valores armazenados no AsyncStorage
      const usersString = await AsyncStorage.getItem("@smartcare:users");
      const users = JSON.parse(usersString);

      // Verificar se há usuários armazenados
      if (!Array.isArray(users)) {
        console.error("Os dados armazenados não estão no formato esperado.");
        return;
      }

      // Filtrar os usuários com base no email e no número de telefone
      const userIndex = users.findIndex(
        (u) => u.email === email && u.phoneNumber === phoneNumber
      );

      if (userIndex !== -1) {
        users[userIndex].password = newPassword;

        await AsyncStorage.setItem("@smartcare:users", JSON.stringify(users));

        await MailComposer.composeAsync({
          recipients: [email],
          subject: "Recuperação de Senha",
          body: `Sua nova senha é: ${newPassword}`,
        });

        Alert.alert("Sucesso", "Um email foi enviado com sua nova senha.");
      } else {
        Alert.alert(
          "Erro",
          "Email e/ou número de telefone não encontrados no AsyncStorage."
        );
      }
    } catch (error) {
      console.error("Erro ao acessar o AsyncStorage", error);
      setErrorMessage(
        "Ocorreu um erro ao acessar os dados armazenados. Tente novamente."
      );
    }
  };

  const handlePhoneNumberChange = (input) => {
    const cleanedInput = input.replace(/\D/g, "");
    if (cleanedInput.length <= 11) {
      const formattedInput = cleanedInput
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");

      setPhoneNumber(formattedInput);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de conta</Text>
      <Text style={styles.description}>
        Informe seu e-mail e número de celular para recuperação da senha:
      </Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="(xx) xxxxx-xxxx"
        value={phoneNumber}
        keyboardType="phone-pad"
        onChangeText={handlePhoneNumberChange}
      />
      <TouchableOpacity style={styles.buttonGreen} onPress={handleSend}>
        <Text style={styles.buttonTextWhite}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWhite} onPress={handleCancel}>
        <Text style={styles.buttonTextBlack}>Cancelar</Text>
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
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 25,
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
  error: {
    color: "red",
    marginBottom: 20,
  },
});

export default AccountRecovery;

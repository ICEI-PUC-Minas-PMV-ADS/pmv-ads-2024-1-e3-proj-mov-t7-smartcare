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
import { useUser } from "../pages/UserContext";

const EditAccount = ({ route, navigation }) => {
  const { accountData } = route.params;
  const { setUser } = useUser();

  const [email, setEmail] = useState(accountData.email);
  const [phoneNumber, setPhoneNumber] = useState(accountData.phoneNumber);
  const [password, setPassword] = useState(accountData.password);
  const [dateOfBirth, setDateOfBirth] = useState(accountData.birthdate);

  const handleSave = async () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja salvar as alterações?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sim",
          onPress: async () => {
            try {
              const usersString = await AsyncStorage.getItem(
                "@smartcare:users"
              );
              const users = JSON.parse(usersString);

              const updatedUsers = users.map((user) =>
                user.email === accountData.email
                  ? {
                      ...user,
                      email,
                      phoneNumber,
                      password,
                      birthdate: dateOfBirth,
                    }
                  : user
              );
              console.log("Dados atualizados:", updatedUsers);
              await AsyncStorage.setItem(
                "@smartcare:users",
                JSON.stringify(updatedUsers)
              );
              setUser(email);
              Alert.alert("Sucesso", "Informações atualizadas com sucesso.");
              navigation.navigate("AccountInfo");
            } catch (error) {
              console.error("Erro ao atualizar os dados", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Informações</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Número de Celular"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="Data de Nascimento"
      />
      <TouchableOpacity style={styles.buttonGreen} onPress={handleSave}>
        <Text style={styles.buttonTextWhite}>Salvar</Text>
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
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonGreen: {
    width: "100%",
    backgroundColor: "#3EB59F",
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
});

export default EditAccount;

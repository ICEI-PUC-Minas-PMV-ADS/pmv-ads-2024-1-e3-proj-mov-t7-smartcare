import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "./UserContext"; // Importe o contexto do usuário
import { UserContext } from "./UserContext";

const AccountDetails = ({ navigation }) => {
  const user = useUser().userEmail; // Obtenha o email do usuário do contexto
  console.log("RETORNOUUU", user);

  const [accountData, setAccountData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    dateOfBirth: "",
  });

  // console.log("Email usado na comparação:", user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          Alert.alert("Erro", "Email do usuário não encontrado.");
          return;
        }

        const usersString = await AsyncStorage.getItem("@smartcare:users");
        const users = JSON.parse(usersString);

        if (Array.isArray(users)) {
          const userData = users.find((u) => u.email === user);
          if (userData) {
            console.log(userData);
            setAccountData(userData);
          } else {
            Alert.alert("Erro", "Usuário não encontrado.");
          }
        } else {
          console.error("Os dados armazenados não estão no formato esperado.");
        }
      } catch (error) {
        console.error("Erro ao acessar o AsyncStorage", error);
      }
    };

    fetchData();
  }, [user]); // Adicione 'user' como dependência para garantir que useEffect seja chamado quando o email do usuário no contexto for atualizado

  const handleEdit = () => {
    navigation.navigate("EditAccount", { accountData });
  };

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Conta</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{accountData.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Número de Celular:</Text>
        <Text style={styles.value}>{accountData.phoneNumber}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Senha Atual:</Text>
        <Text style={styles.value}>{accountData.password}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <Text style={styles.value}>{accountData.birthdate}</Text>
      </View>
      <TouchableOpacity style={styles.buttonGreen} onPress={handleEdit}>
        <Text style={styles.buttonTextWhite}>Editar Informações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWhite} onPress={handleBack}>
        <Text style={styles.buttonTextBlack}>Voltar</Text>
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
  infoContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  value: {
    fontSize: 16,
    color: "gray",
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

export default AccountDetails;

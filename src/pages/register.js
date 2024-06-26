import React, { useState } from "react";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast, { SuccessToast } from "react-native-toast-message";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Register = ({ navigation }) => {
  // Defina o estado para controlar os campos do formulário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Função para lidar com o registro
  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !birthdate || !phoneNumber) {
      Alert.alert("Erro!", "Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro!", "Por favor, insira um endereço de e-mail válido.");
      return;
    }

    if (password.length < 6 || !/[a-zA-Z]/.test(password)) {
      Alert.alert(
        "Erro!",
        "A senha deve conter pelo menos 6 caracteres, incluindo pelo menos uma letra."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro!", "As senhas não coincidem.");
      return;
    }

    const birthdateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!birthdateRegex.test(birthdate)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira uma data de nascimento válida (DD/MM/AAAA)."
      );
      return;
    }

    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert(
        "Erro!",
        "Por favor, insira um número de telefone válido (xx)xxxxx-xxxx."
      );
      return;
    }

    try {
      let usersString = await AsyncStorage.getItem("@smartcare:users");
      let users = [];

      if (usersString !== null) {
        users = JSON.parse(usersString);
      }

      if (Array.isArray(users)) {
        const emailExists = users.some((user) => user.email === email);
        if (emailExists) {
          Alert.alert("Erro!", "Este email já foi cadastrado.");
          return;
        }
      } else {
        console.error("Os dados armazenados não estão no formato esperado.");
        return;
      }

      const id = uuid.v4();
      const newUser = {
        id,
        email,
        password,
        birthdate,
        phoneNumber,
      };

      await AsyncStorage.setItem(
        "@smartcare:users",
        JSON.stringify([...users, newUser])
      );

      // Registro bem-sucedido, redirecionar para a página de login
      navigation.navigate("Login");

      // Exibir alerta de sucesso
      Alert.alert("Sucesso!", "Cadastro realizado com sucesso.");
      console.log(newUser);
    } catch (error) {
      console.error(
        "Erro ao acessar o armazenamento ou salvar novo usuário:",
        error
      );
      Alert.alert("Erro!", "Ocorreu um erro ao salvar o novo usuário.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleBirthdateChange = (input) => {
    const cleanedInput = input.replace(/\D/g, "");
    const formattedInput = cleanedInput
      .replace(/^(\d{2})(\d)/g, "$1/$2")
      .replace(/^(\d{2}\/\d{2})(\d)/g, "$1/$2");

    setBirthdate(formattedInput);
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
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirme a Senha"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={toggleConfirmPasswordVisibility}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={birthdate}
        onChangeText={handleBirthdateChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Celular (xx)xxxxx-xxxx"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonTextClear}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonTextDark}>Cancelar</Text>
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
  input: {
    width: "100%",
    height: 70,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    height: 70,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
  registerButton: {
    width: "100%",
    backgroundColor: "#3EB59F",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    color: "#fff",
  },
  cancelButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonTextDark: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextClear: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Register;

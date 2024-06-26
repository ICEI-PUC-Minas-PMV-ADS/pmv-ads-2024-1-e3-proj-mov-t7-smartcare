import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "./UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { user, setUser } = useUser();

  const handleLogin = async () => {
    try {
      // Obter os usuários do AsyncStorage
      const usersString = await AsyncStorage.getItem("@smartcare:users");
      const users = JSON.parse(usersString);

      // Verificar se o email e senha correspondem a algum usuário cadastrado
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Dados de login corretos, redirecionar para a página inicial
        setUser(email);
        navigation.navigate("Home");
      } else {
        // Email ou senha incorretos, exibir mensagem de erro
        Alert.alert("Erro!", "E-mail ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao acessar o armazenamento:", error);
      Alert.alert("Erro!", "Ocorreu um erro ao fazer login.");
    }
  };

  const handleRecoveryPress = () => {
    navigation.navigate("AccountRecovery");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Digite sua senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonTextClear}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={handleRecoveryPress}
      >
        <Text style={styles.buttonTextDark}>Esqueceu a senha?</Text>
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
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 70,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
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
  loginButton: {
    width: "100%",
    backgroundColor: "#3EB59F",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  forgotPasswordButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonTextClear: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextDark: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;

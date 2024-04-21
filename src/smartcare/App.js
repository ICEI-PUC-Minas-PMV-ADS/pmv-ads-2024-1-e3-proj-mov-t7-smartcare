import React from "react";
<<<<<<< Updated upstream
import { StatusBar } from "expo-status-bar";
import { Presentation } from "./screens/presentationScreen/presentation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./screens/loginScreen/login";
import { Register } from "./screens/registerScreen/register";

const Stack = createStackNavigator();
=======
import { View, StyleSheet } from "react-native";
import { AppRoutes } from "./src/routes/app.routes";
import "react-native-gesture-handler";
>>>>>>> Stashed changes

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Presentation">
      <Stack.Screen name="Inicio" component={Presentation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registre-se" component={Register} />
    </Stack.Navigator>
  );
}

<<<<<<< Updated upstream
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
>>>>>>> Stashed changes

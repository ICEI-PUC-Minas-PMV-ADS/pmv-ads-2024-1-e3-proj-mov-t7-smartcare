import React from "react";
import { StatusBar } from "expo-status-bar";
import { Presentation } from "./screens/presentationScreen/presentation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./screens/loginScreen/login";
import { Register } from "./screens/registerScreen/register";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Presentation">
      <Stack.Screen name="Inicio" component={Presentation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registre-se" component={Register} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

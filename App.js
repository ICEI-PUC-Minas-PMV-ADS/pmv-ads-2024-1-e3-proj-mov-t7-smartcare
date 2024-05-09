import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/pages/HomeScreen";
import { Login } from "./src/pages/login";
import { Presentation } from "./src/pages/presentation";
import { Register } from "./src/pages/register";
import AccountRecovery from "./src/pages/accountRecovery";
import { IconButton } from "react-native-paper";
import { Consulta } from "./src/pages/Consulta";
import { Medicamento } from "./src/pages/Medicamento";
import Exame from "./src/pages/Exame";
import DetalheExame from "./src/pages/DetalheExame";
import DetalheReceita from "./src/pages/DetalheReceita";
import DetalheRemedio from "./src/pages/DetalheRemedio";
import FormularioNovoExame from "./src/pages/FormularioNovoExame";
import FormularioNovaReceita from "./src/pages/FormularioNovaReceita";
import FormularioNovoRemedio from "./src/pages/FormularioNovoRemedio";

const Stack = createStackNavigator();

function ExameStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Exame" component={Exame} />
      <Stack.Screen name="DetalheExame" component={DetalheExame} />
      <Stack.Screen name="FormularioNovoExame" component={FormularioNovoExame} />
    </Stack.Navigator>
  );
}

function ConsultaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Consulta" component={Consulta} />
      <Stack.Screen name="DetalheReceita" component={DetalheReceita} />
      <Stack.Screen name="FormularioNovaReceita" component={FormularioNovaReceita} />
    </Stack.Navigator>
  );
}

function MedicamentoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Medicamento" component={Medicamento} />
      <Stack.Screen name="DetalheRemedio" component={DetalheRemedio} />
      <Stack.Screen name="FormularioNovoRemedio" component={FormularioNovoRemedio} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <>
            <Stack.Screen name="AppRoutes" component={AppRoutes} />
          </>
        ) : (
          <>
            <Stack.Screen name="Presentation" component={Presentation} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="AccountRecovery" component={AccountRecovery} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Medicamento" component={Medicamento} />
            <Stack.Screen name="Consulta" component={Consulta} />
            <Stack.Screen name="Exame" component={Exame} />
            <Stack.Screen name="DetalheExame" component={DetalheExame} />
            <Stack.Screen name="DetalheReceita" component={DetalheReceita} />
            <Stack.Screen name="DetalheRemedio" component={DetalheRemedio} />
            <Stack.Screen name="FormularioNovoExame" component={FormularioNovoExame} />
            <Stack.Screen name="FormularioNovaReceita" component={FormularioNovaReceita} />
            <Stack.Screen name="FormularioNovoRemedio" component={FormularioNovoRemedio} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Medicamento" component={Medicamento} />
      <Stack.Screen name="Consulta" component={Consulta} />
      <Stack.Screen name="Exame" component={Exame} />
      <Stack.Screen name="DetalheExame" component={DetalheExame} />
      <Stack.Screen name="DetalheReceita" component={DetalheReceita} />
      <Stack.Screen name="DetalheRemedio" component={DetalheRemedio} />
      <Stack.Screen name="FormularioNovoExame" component={FormularioNovoExame} />
      <Stack.Screen name="FormularioNovaReceita" component={FormularioNovaReceita} />
      <Stack.Screen name="FormularioNovoRemedio" component={FormularioNovoRemedio} />
    </Stack.Navigator>
  );
}

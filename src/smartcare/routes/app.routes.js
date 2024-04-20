
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Consulta } from "../pages/Consulta";
import { Medicamento } from "../pages/Medicamento";
import { Exame } from "../pages/Exame";
import DetalheExame from "../pages/DetalheExame";
import DetalheReceita from "../pages/DetalheReceita";
import DetalheRemedio from "../pages/DetalheRemedio";
import FormularioNovoRemedio from "../pages/FormularioNovoRemedio";
import FormularioNovaReceita from '../pages/FormularioNovaReceita';
import FormularioNovoExame from '../pages/FormularioNovoExame';
import HomeScreen from "../pages/HomeScreen";

// Crie os navegadores e componentes
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Componentes de pilha para cada seção
function ExameStack() {
  return (
    <Stack.Navigator screenOptions={{title:''}}>
      <Stack.Screen name="Exame" component={Exame} />
      <Stack.Screen name="DetalheExame" component={DetalheExame} />
      <Stack.Screen name="FormularioNovoExame" component={FormularioNovoExame} />
    </Stack.Navigator>
  );
}

function ConsultaStack() {
  return (
    <Stack.Navigator screenOptions={{title:''}}>
      <Stack.Screen name="Consulta" component={Consulta} />
      <Stack.Screen name="DetalheReceita" component={DetalheReceita} />
      <Stack.Screen name="FormularioNovaReceita" component={FormularioNovaReceita} />
    </Stack.Navigator>
  );
}

function MedicamentoStack() {
  return (
    <Stack.Navigator screenOptions={{title:''}}>
      <Stack.Screen name="Medicamento" component={Medicamento} />
      <Stack.Screen name="DetalheRemedio" component={DetalheRemedio} />
      <Stack.Screen name="FormularioNovoRemedio" component={FormularioNovoRemedio} />
    </Stack.Navigator>
  );
}

// Componente de navegação de abas
function TabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Consulta') {
            iconName = 'doctor';
          } else if (route.name === 'Medicamento') {
            iconName = 'pill';
          } else if (route.name === 'Exame') {
            iconName = 'file';
          } else if (route.name === 'Home') {
            iconName = 'home';
          }

          return <IconButton icon={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{ style: { elevation: 0 } }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Consulta" component={ConsultaStack} />
      <Tab.Screen name="Medicamento" component={MedicamentoStack} />
      <Tab.Screen name="Exame" component={ExameStack} />
    </Tab.Navigator>
  );
}

// Componente principal de roteamento
export function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Consulta" component={ConsultaStack} />
        <Drawer.Screen name="Exame" component={ExameStack} />
        <Drawer.Screen name="Medicamento" component={MedicamentoStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import Principal from './src/Principal';
import Cadastro from './src/Cadastro';
import CadastroServico from './src/CadastroServico';
import ServicoCriado from './src/ServicoCriado';
import Inicio from './src/Inicio';
import Perfil from './src/Perfil';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CadastroServico" component={CadastroServico} />
      <Stack.Screen name="ServicoCriado" component={ServicoCriado} />
      <Stack.Screen name="Início" component={Inicio} />
      <Stack.Screen name="Perfil" component={Perfil} />
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
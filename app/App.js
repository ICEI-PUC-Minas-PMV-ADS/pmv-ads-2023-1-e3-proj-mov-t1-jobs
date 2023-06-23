import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import Principal from './src/Principal';
import CadastroUsuario from './src/CadastroUsuario';
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
      <Stack.Screen name="Cadastro do usuário" component={CadastroUsuario} />
      <Stack.Screen name="Cadastro de serviço" component={CadastroServico} />
      <Stack.Screen name="Serviço criado" component={ServicoCriado} />
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
import React from 'react';
import { View, Text } from 'react-native';

export default function Perfil({ route }) {
  const { nome, telefone, cpf } = route.params;

  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>CPF: {cpf}</Text>
    </View>
  );
}
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import * as UsuarioDB from '../services/UsuarioDB';

export default function Perfil({ navigation, route }) {
  const [nomeUsuario, setNomeUsuario] = useState(route.params.nome);
  const [emailUsuario, setEmailUsuario] = useState(route.params.email);
  const [telefoneUsuario, setTelefoneUsuario] = useState(route.params.telefone);
  const [cpfUsuario, setCpfUsuario] = useState(route.params.cpf);

  const atualizarPerfil = async () => {
    try {
      console.log(route.params)
      await UsuarioDB.atualizarUsuario(route.params.id, {
        nome: nomeUsuario,
        email: emailUsuario,
        telefone: telefoneUsuario,
        cpf: cpfUsuario,
      });
  
      Alert.alert('Perfil atualizado com sucesso.');
  
      navigation.setParams({
        nome: nomeUsuario,
        telefone: telefoneUsuario,
        cpf: cpfUsuario,
      });
    } catch (error) {
      Alert.alert('Houve um erro ao atualizar o perfil. Por favor, tente novamente mais tarde.');
      console.error('Erro ao atualizar o perfil:', error);
    }
  };
  

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput value={nomeUsuario} onChangeText={setNomeUsuario} />

      <Text>E-mail:</Text>
      <TextInput value={emailUsuario} onChangeText={setEmailUsuario} />

      <Text>Telefone:</Text>
      <TextInput value={telefoneUsuario} onChangeText={setTelefoneUsuario} />

      <Text>CPF:</Text>
      <TextInput value={cpfUsuario} onChangeText={setCpfUsuario} />

      <Button title="Salvar" onPress={atualizarPerfil} />
    </View>
  );
}

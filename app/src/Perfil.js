import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import * as UsuarioDB from '../services/UsuarioDB';

export default function Perfil({ navigation, route }) {
  const [nomeUsuario, setNomeUsuario] = useState(route.params.nome);
  const [emailUsuario, setEmailUsuario] = useState(route.params.email);
  const [telefoneUsuario, setTelefoneUsuario] = useState(route.params.telefone);
  const [cpfUsuario, setCpfUsuario] = useState(route.params.cpf);
  const [senhaUsuario, setSenhaUsuario] = useState(route.params.senha);

  const atualizarPerfil = async () => {
    try {
      console.log(route.params)
      await UsuarioDB.atualizarUsuario(route.params.id, {
        nome: nomeUsuario,
        email: emailUsuario,
        telefone: telefoneUsuario,
        cpf: cpfUsuario,
        senha: senhaUsuario
      });

      Alert.alert('Perfil atualizado com sucesso.');

      navigation.setParams({
        nome: nomeUsuario,
        email: emailUsuario,
        telefone: telefoneUsuario,
        cpf: cpfUsuario,
        senha: senhaUsuario
      });
    } catch (error) {
      Alert.alert('Houve um erro ao atualizar o perfil. Por favor, tente novamente mais tarde.');
      console.error('Erro ao atualizar o perfil:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text h1 style = {styles.h1}>Editar dados </Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={nomeUsuario} onChangeText={setNomeUsuario} />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput style={styles.input} value={emailUsuario} onChangeText={setEmailUsuario} />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput style={styles.input} value={telefoneUsuario} onChangeText={setTelefoneUsuario} />

      <Text style={styles.label}>CPF:</Text>
      <TextInput style={styles.input} value={cpfUsuario} onChangeText={setCpfUsuario} />

      <TouchableOpacity style={styles.button} onPress={atualizarPerfil}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#278ED5', // Azul claro
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#0000CD',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  h1: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.24,
    elevation: 5,
    marginBottom: 20,
  }
});

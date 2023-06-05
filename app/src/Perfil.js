import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as UsuarioDB from '../services/UsuarioDB';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [usuarioLogadoId, setUsuarioLogadoId] = useState('');

  useEffect(() => {
    const carregarNomeUsuario = async () => {
      try {
        const id = await AsyncStorage.getItem('usuarioLogadoId');
        setUsuarioLogadoId(id);
    
        const usuario = await UsuarioDB.buscarUsuario(id); // Busca o usuário com base no ID
        if (usuario) {
          setNomeUsuario(usuario.nome); // Define o nome do usuário encontrado
        } else {
          console.error('Usuário não encontrado');
        }
      } catch (error) {
        console.error('Erro ao carregar nome do usuário: ', error);
      }
    };
    
    

    carregarNomeUsuario();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>Bem-vindo, {nomeUsuario}</Text>
      </View>
      <Text style={styles.userInfo}>Nome: {nomeUsuario}</Text>
      {/* Adicione mais informações do usuário aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
});


import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../style/MainStyle';
import { Button } from '@rneui/themed';
import * as UsuarioDB from '../services/UsuarioDB';
import { Alert } from 'react-native';


export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState(null);

  const entrar = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const usuario = await UsuarioDB.buscarUsuario(email, password);

      if (usuario) {
        setNomeUsuario(usuario.nome);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Principal' }],
        });
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Por favor, verifique se seu e-mail e senha estão corretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao fazer login. Por favor, tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
  };

  const cadastrar = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={[styles.container, specificStyle.specificContainer]}
      keyboardVerticalOffset={100}
    >
      <ScrollView style={{ width: '100%' }}>
        <View style={[styles.container, specificStyle.specificContainer]}>
          <Image
            source={require('../assets/jobsLogo2.png')}
            style={specificStyle.logo}
          />
          <Input
            style={[specificStyle.inputLogin, specificStyle.specificContainer]}
            placeholder="  E-mail"
            placeholderTextColor="white"
            leftIcon={{
              type: 'font-awesome',
              name: 'envelope',
              color: 'white',
            }}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
          />
          <Input
            style={[specificStyle.inputLogin, specificStyle.specificContainer]}
            placeholder="    Senha"
            placeholderTextColor="white"
            leftIcon={{
              type: 'font-awesome',
              name: 'lock',
              color: 'white',
            }}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />

          <Button
            title="Login"
            buttonStyle={{
              backgroundColor: '#A9A9A9',
              borderWidth: 2,
              borderRadius: 13,
            }}
            containerStyle={{
              width: 120,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: 'bold' }}
            onPress={() => entrar()}
          />

          <Text style={specificStyle.registrarTexto} onPress={() => cadastrar()}>
            Não tem conta? Registrar-se
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: '#278ED5',
    padding: 10,
  },
  logo: {
    marginTop: 180,
    marginBottom: 10,
    width: 600,
    height: 200,
  },
  inputLogin: {
    flexGrow: 1,
    height: 40,
    color: 'white',
  },
  registrarTexto: {
    marginTop: 30,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

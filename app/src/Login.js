import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../style/MainStyle';
import { Button } from '@rneui/themed';
import * as UsuarioDB from '../services/UsuarioDB';
import { Alert } from 'react-native';


export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Principal' }],
    });
  };

  const cadastrar = () => {
    navigation.navigate('Cadastro do usuário');
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
            style={[
              specificStyle.inputLogin,
              specificStyle.inputTransparent,
              specificStyle.specificContainer,
              { backgroundColor: 'white' }
            ]}
            inputContainerStyle={specificStyle.inputContainerStyle}
            placeholder="E-mail"
            placeholderTextColor="gray"
            rightIcon={{
              type: 'font-awesome',
              name: 'envelope',
              color: 'black',
              containerStyle: specificStyle.iconContainer,
            }}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
          />
          <Input
            style={[
              specificStyle.inputLogin,
              specificStyle.inputTransparent,
              specificStyle.specificContainer,
              { backgroundColor: 'white' }
            ]}
            inputContainerStyle={specificStyle.inputContainerStyle}
            placeholder="Senha"
            placeholderTextColor="gray"
            rightIcon={{
              type: 'font-awesome',
              name: 'lock',
              color: 'black',
              containerStyle: specificStyle.iconContainer,
            }}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
          <Button
            title="LOGIN"
            buttonStyle={{
              backgroundColor: '#A9A9A9',
              borderWidth: 2,
              borderRadius: 15,
            }}
            containerStyle={{
              width: '90%', 
              alignSelf: 'center',
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
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#0000CD',
    borderWidth: 1,
    borderRadius: 10,
  },
  registrarTexto: {
    marginTop: 30,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  iconContainer: {
    marginLeft: -40 , 
  }
});
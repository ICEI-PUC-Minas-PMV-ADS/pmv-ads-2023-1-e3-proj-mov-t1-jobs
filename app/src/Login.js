import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { Button } from '@rneui/themed';
import CadastroServico from './CadastroServico';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        idex: 0,
        routes: [{name: "Principal"}]
    })
  }
  
  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }
  return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, specificStyle.specificContainer]}
      keyboardVerticalOffset={100}>
        <ScrollView style={{width: "100%"}}>
          <View style={[styles.container, specificStyle.specificContainer]}>
          <Image
          source={require('../assets/jobsLogo2.png')}
          style={specificStyle.logo}
          />
          <Input style={[specificStyle.inputLogin, specificStyle.specificContainer]}
            placeholder="  E-mail"
            placeholderTextColor="white"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
          <Input style={[specificStyle.inputLogin, specificStyle.specificContainer]}
            placeholder="    Senha"
            placeholderTextColor="white"
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white'}}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />

      <Button
        title="LOGIN"
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: '#45484F',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={() => entrar()}
        />

      <TouchableOpacity onPress={cadastrar} style={specificStyle.buttonRegister}>
      <Text style={specificStyle.textRegister}>Registrar-se</Text>
      </TouchableOpacity>


    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#278ED5",
    padding: 10,
    
  },
  logo:{
    marginTop: 180,
    marginBottom: 10,
    width: 600,
    height: 200,
  },
  inputLogin: {
    flexGrow: 1,
    height: 40,
    color: 'white'
  },
  buttonRegister: {
    padding: 10,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  textRegister: {
    color: '#A83641',
    fontSize: 18,
    fontWeight: 'bold',
  }
 }
)
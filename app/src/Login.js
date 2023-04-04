import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        idex: 0,
        routes: [{name: "Principal"}]
    })
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Image
      source={require('../assets/Jobslogo1.png')}
      style={specificStyle.logo}
      />
      <Text h1 style={specificStyle.campos}>Fazer Login</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input 
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      <Button style={specificStyle.botao}
        icon={
          <Icon 
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title=" Log in"
        onPress={() => entrar()}
      />


    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#FEC619"
  },
  logo:{
    marginTop: 60,
    width: 400,
    height: 200
  },
  campos:{
    marginTop: 20,
    marginBottom: 50
  },
  botao:{
    marginTop: 20
  }
})
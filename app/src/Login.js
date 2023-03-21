import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
      <Text h1>Fazer Login</Text>
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

      <Button
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
    backgroundColor: "#F2BC1B"
  }
})
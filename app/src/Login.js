import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { Button } from '@rneui/themed';


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
          source={require('../assets/jobslogo.png')}
          style={specificStyle.logo}
          />
          <Input style={[styles.input, specificStyle.specificContainer]}
            placeholder="E-mail"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
          <Input style={[styles.input, specificStyle.specificContainer]}
            placeholder="Sua senha"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />

      <Button
        title="LOGIN"
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'grey',
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

      <Button
        title="REGISTRAR-SE"
        icon={{
        name: 'user',
        type: 'font-awesome',
        size: 15,
        color: 'white',
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'rgba(199, 43, 98, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => cadastrar()}
      />


    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#000"
  },
  logo:{
    marginTop: 180,
    width: 400,
    height: 200
  },
  campos:{
    marginTop: 20,
    marginBottom: 50
  },
 }
)
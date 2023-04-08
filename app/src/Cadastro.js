import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)

  const salvar = () => {
    console.log("Salvou")
  }


  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h1 style={specificStyle.campos}>Registre-se</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />

      <Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
      />

      <Input
        placeholder="CPF"
        onChangeText={value => setCpf(value)}
        keyboardType="number-pad"
        returnKeyType="done"
      />

      <Input
        placeholder="Telefone"
        onChangeText={value => setEmail(value)}
        keyboardType="phone-pad"
        returnKeyType="done"
      />

      <CheckBox
          title="Eu aceito os termos de uso"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="red"
          checked={isSelected}
          onPress={() => setSelected(!isSelected)}
      />

      <Button 
        icon={
          <Icon 
            name="check"
            size={15}
            color="white"
          />
        }
        title=" Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
      />

    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#FEC619"
  },
  campos:{
    marginTop: 20,
    marginBottom: 50
  },
  button:{
    width: "100%",
    marginTop: 20,
  }
})
import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)

  let cpfField = null
  let telefoneField = null

  const validar = () => {
    let error = false   
    setErrorEmail(null)
    setErrorCpf(null)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (!cpfField.isValid()){
      setErrorCpf("Preencha seu CPF corretamente")
      error = true
    }
    if (telefone == null){
      setErrorTelefone("Preencha seu telefone corretamente")
      error = true
    }
    return !error
  }

  const salvar = () => {
    if (validar()){
      console.log("Salvou")
    }
  }


  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h1 style={specificStyle.campos}>Registre-se</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => {
          setEmail(value)
          setErrorEmail(null)
        }}
        keyboardType="email-address"
        errorMessage={errorEmail}
      />

      <Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
        errorMessage={errorNome}
        />

      <View style={styles.containerMask}>
      <TextInputMask
        placeholder="CPF"
        type={'cpf'}
        value={cpf}
        onChangeText={value => {
          setCpf(value)
          setErrorCpf(null)
        }}
        keyboardType="number-pad"
        returnKeyType="done"
        style={styles.maskedInput}
        ref={(ref) => cpfField = ref}
        />
      </View>
      <Text style={styles.errorMessage}>{errorCpf}</Text>

      <View style={styles.containerMask}>
      <TextInputMask
        placeholder="Telefone"
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}
        value={telefone}
        onChangeText={value => setTelefone(value)}
          keyboardType="phone-pad"
          returnKeyType="done"
        style={styles.maskedInput}
        ref={(ref) => telefoneField = ref}
        />
      </View>
      <Text style={styles.errorMessage}>{errorTelefone}</Text>

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
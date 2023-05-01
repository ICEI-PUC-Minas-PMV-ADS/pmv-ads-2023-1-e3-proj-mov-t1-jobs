import React, { useState, useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import usuarioService from '../services/UsuarioService';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [senha, setSenha] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)

  let cpfField = null
  let telefoneField = null

  const validar = () => {
    let error = false   
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorSenha(null)
    setErrorNome(null)

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
    if (senha == null){
      setErrorSenha("Preencha sua senha corretamente")
      error = true
    }
    if (nome == null)
      setErrorNome("Preencha seu nome")
    return !error
  }

  const salvar = () => {
      if (validar()){
        setLoading(true)

          let data = {
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            senha: senha
          }

          usuarioService.cadastrar(data)
          .then((response) => {
            setLoading(false)
            const titulo = (response.data.status) ? "Sucesso" : "Erro"
            Alert.alert(titulo, response.data.mensagem)
          })
          .catch((error) => {
            setLoading(false)
            Alert.alert("Erro", "Houve um erro inesperado")
          })
        }
    }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={[styles.container, specificStyle.specificContainer]}
    keyboardVerticalOffset={85}>
      <ScrollView style={{width: "100%"}}>
        <View style={specificStyle.headerCadastro}>
        <Text h1 style={specificStyle.titulo}>Cadastro</Text>
        </View>
        <Input
        label="Nome"
          placeholder="Digite seu nome"
          onChangeText={value => setNome(value)}
          color="#ffffff"
          errorMessage={errorNome}
          />
        <Input
        label="E-mail"
          placeholder="Digite seu e-mail"
          onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
          }}
          color="#ffffff"
          keyboardType="email-address"
          errorMessage={errorEmail}
        />
        <Text style={specificStyle.inputNumber}>CPF</Text>
        <View style={styles.containerMask}>
        <TextInputMask
          placeholder="Digite seu CPF"
          placeholderTextColor="#777A8D"
          type={'cpf'}
          value={cpf}
          onChangeText={value => {
            setCpf(value)
            setErrorCpf(null)
          }}
          color="#ffffff"
          keyboardType="number-pad"
          returnKeyType="done"
          style={styles.maskedInput}
          ref={(ref) => cpfField = ref}
          />
        </View>
        <Text style={styles.errorMessage}>{errorCpf}</Text>
        <Text style={specificStyle.inputNumber}>Telefone</Text>
        <View style={styles.containerMask}>
        <TextInputMask
          placeholder="Digite seu telefone"
          placeholderTextColor="#777A8D"
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99)'
          }}
          value={telefone}
          onChangeText={value => setTelefone(value)}
          color="#ffffff"
          keyboardType="phone-pad"
          returnKeyType="done"
          style={styles.maskedInput}
          ref={(ref) => telefoneField = ref}
          />
        </View>
        <Text style={styles.errorMessage}>{errorTelefone}</Text>
        <Input
        label="Senha"
          placeholder="Digite sua senha"
          onChangeText={value => setSenha(value)}
          color="#ffffff"
          errorMessage={errorSenha}
          secureTextEntry={true}
          />

        <CheckBox
            title="Eu aceito os termos de uso"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="black"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
        />

        { isLoading&&
        <Text>Carregando...</Text>
        }
        
        { !isLoading &&
        <Button
        title=" Salvar dados"
          icon={{
            name: 'check',
            size: 20,
            color: 'white',
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10 }}
            titleStyle={{ fontWeight: '800' }}
            buttonStyle={{
              backgroundColor: '#44BD72',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 10,
            }}
            containerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
          
          }}
          onPress={() => salvar()}
        />
      }


      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: '#1F1930'
  },
  titulo:{
    fontWeight: 'bold',
    color: '#63625F',
    textAlign: 'center',
    marginTop: 25,
  },
  inputNumber: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: "#86919A",
    fontSize: 16
  },
  headerCadastro: {
    backgroundColor: '#BFBDB8',
    marginBottom: 40,
    height: 100,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
})
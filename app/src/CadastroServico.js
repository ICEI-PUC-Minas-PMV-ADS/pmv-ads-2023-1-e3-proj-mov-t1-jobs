import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const CadastroServicosForm = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastro = () => {
    if (nome === '' || descricao === '' || preco === '' || telefone === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      const servicoCriado = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        telefone: telefone
      };
      navigation.navigate('ServicoCriado', { servico: servicoCriado });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do serviço"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do serviço"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInputMask
        style={styles.input}
        placeholder="Preço do serviço"
        keyboardType="numeric"
        value={preco}
        onChangeText={(formattedValue, rawValue) => {
          setPreco(formattedValue);
        }}
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$ ',
          suffixUnit: '',
        }}
      />
      <TextInputMask
        style={styles.input}
        placeholder="Telefone de contato"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={(formattedValue, rawValue) => {
          setTelefone(formattedValue);
        }}
        type="cel-phone"
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroServicosForm;
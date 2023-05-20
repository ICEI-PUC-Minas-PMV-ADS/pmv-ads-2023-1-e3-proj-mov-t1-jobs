import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default DeletarServico = ({ navigation }) => { 

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleDelete = () => {
      Alert.alert('Serviço excluído');
  };

  return (
    <View style={styles.container}>
      <Text>Nome do Serviço</Text>
      <TextInput
        style={styles.input}
        editable={false}
        value="Confeitaria"
      />
      <Text>Descrição do Serviço</Text>
      <TextInput
        style={styles.input}
        editable={false}
        value="docinho e bolo"
      />
      <Text>Preço</Text>
      <TextInput
        style={styles.input}
        editable={false}
        value="100,00"
      />
      <Text>Telefone</Text>
      <TextInput
        style={styles.input}
        editable={false}
        value="93232-3232"
      />
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Excluir</Text>
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


import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker';

const CadastroServicos = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [imagens, setImagens] = useState([]);

  const handleCadastro = () => {
    if (nome === '' || descricao === '' || preco === '' || telefone === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      const servicoCriado = {
        nome,
        descricao,
        preco,
        localizacao,
        telefone,
        imagens: imagens || [],
      };
      navigation.navigate('ServicoCriado', { servico: servicoCriado });
    }
  };

  const handleSelecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'É necessário permitir acesso à biblioteca de mídia para selecionar imagens.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      multiple: true,
      maxSelected: 5 - imagens.length, // Limita a 5 imagens
    });

    if (!result.cancelled) {
      setImagens([...imagens, result.uri]);
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
        style={[styles.input, styles.descricaoInput]}
        placeholder="Descrição do serviço"
        multiline
        numberOfLines={4}
        value={descricao}
        onChangeText={setDescricao}
      />
      <View style={styles.imagensContainer}>
        {imagens.map((imagem, index) => (
          <Image key={index} source={{ uri: imagem }} style={styles.imagem} />
        ))}
        {imagens.length < 5 && (
          <TouchableOpacity style={styles.imagemButton} onPress={handleSelecionarImagem}>
            <Text style={styles.imagemButtonText}>+</Text>
          </TouchableOpacity>
        )}
      </View>
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
      <TextInput
        style={styles.input}
        placeholder="Localização do serviço"
        value={localizacao}
        onChangeText={setLocalizacao}
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
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    fontSize: 16,
  },
  descricaoInput: {
    height: 100,
  },
  imagensContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  imagem: {
    width: 80,
    height: 80,
    marginRight: 8,
    borderRadius: 4,
  },
  imagemButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  imagemButtonText: {
    fontSize: 24,
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

export default CadastroServicos;

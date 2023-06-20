import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert, KeyboardAvoidingView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { criarTabelaServicos, salvarServico } from '../services/ServicoDB';
import * as ImagePicker from 'expo-image-picker';

export default function CadastroServicos() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    criarTabelaServicos().then(() => {
      console.log('Tabela de serviços criada com sucesso.');
    }).catch(error => {
      console.error('Erro ao criar tabela de serviços:', error);
    });
  }, []);

  const handleCadastro = async () => {
    if (nome === '' || descricao === '' || preco === '' || telefone === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      const servicoCriado = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        telefone: telefone,
        imagens: imagens || [],
        criador: 'usuario_atual',
      };
  
      try {
        await salvarServico(servicoCriado);
        navigation.navigate('ServicoCriado', { servico: servicoCriado });
      } catch (error) {
        console.error('Erro ao salvar o serviço:', error);
      }
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
      maxSelected: 5 - imagens.length,
    });

    if (!result.cancelled) {
      setImagens([...imagens, result.uri]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container]}
      keyboardVerticalOffset={150}>
      <ScrollView style={{ width: "100%" }}>
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
        returnKeyType="done"
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
        placeholder="Digite seu telefone"
        backgroundColor="white"
        placeholderTextColor="#777A8D"
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}
        value={telefone}
        onChangeText={(formattedValue, rawValue) => {
          setTelefone(formattedValue);
        }}
        keyboardType="phone-pad"
        returnKeyType="done"
        ref={(ref) => telefoneField = ref}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
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
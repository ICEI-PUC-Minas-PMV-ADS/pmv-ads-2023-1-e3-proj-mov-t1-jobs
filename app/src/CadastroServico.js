import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert, KeyboardAvoidingView, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { criarTabelaServicos, salvarServico } from '../services/ServicoDB';
import * as ImagePicker from 'expo-image-picker';

export default function CadastroServico() {
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
        localizacao: localizacao,
        telefone: telefone,
        imagens: imagens || [],
        criador: 'usuario_atual',
      };

      try {
        await salvarServico(servicoCriado);
        Alert.alert(
          'Sucesso',
          'Serviço criado com sucesso!',
          [
            {
              text: 'Início',
              onPress: () => {
                limparFormulario();
                navigation.navigate('Inicio');
              },
            },
            {
              text: 'Novo Serviço',
              onPress: () => {
                limparFormulario();
              },
            },
          ]
        );
      } catch (error) {
        console.error('Erro ao salvar o serviço:', error);
      }
    }
  };

  const limparFormulario = () => {
    setNome('');
    setDescricao('');
    setPreco('');
    setLocalizacao('');
    setTelefone('');
    setImagens([]);
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

  const removerImagem = (index) => {
    const novasImagens = [...imagens];
    novasImagens.splice(index, 1);
    setImagens(novasImagens);
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
              <View key={index} style={styles.imagemContainer}>
                <Image source={{ uri: imagem }} style={styles.imagem} />
                <TouchableOpacity
                  style={styles.removerImagemButton}
                  onPress={() => removerImagem(index)}
                >
                  <Text style={styles.removerImagemButtonText}>x</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: '#278ED5',
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: 'white',
  },
  descricaoInput: {
    height: 100,
  },
  imagensContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  imagemContainer: {
    position: 'relative',
    marginRight: 8,
    marginBottom: 8,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  removerImagemButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removerImagemButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  imagemButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white'
  },
  imagemButtonText: {
    fontSize: 24,
  },
  button: {
    backgroundColor: '#0000CD',
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
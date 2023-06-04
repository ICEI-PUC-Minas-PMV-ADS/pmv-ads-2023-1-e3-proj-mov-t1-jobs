import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { atualizarServico } from '../services/ServicoDB';
import { useNavigation } from '@react-navigation/native';

const ServicoCriado = ({ route }) => {
  const { servico } = route.params;
  const [nome, setNome] = useState(servico.nome);
  const [descricao, setDescricao] = useState(servico.descricao);
  const [preco, setPreco] = useState(servico.preco);
  const [telefone, setTelefone] = useState(servico.telefone);
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState(['']);
  
  const navigation = useNavigation();

  const handleEditar = () => {
    navigation.navigate('CadastroServico', { servico });
  };

  const handleConcluir = () => {
    Alert.alert('Sucesso', 'Seu serviço foi cadastrado com sucesso!', [
      {
        text: 'OK',
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Principal' }],
          });
        },
      },
    ]);
  };

  const handleContact = () => {
    // Aqui você pode implementar a lógica para entrar em contato com o criador do serviço
    // Por exemplo, abrir um modal de contato com as opções de telefone, e-mail, etc.
    Alert.alert('Contato', `Entre em contato com ${servico.nome}`);
  };

  const handleRating = (rating) => {
    setAvaliacao(rating);
    // Aqui você pode fazer o salvamento da avaliação no servidor
    // Por exemplo, enviar uma requisição para registrar a avaliação do usuário
    // e exibir uma mensagem de sucesso após a conclusão
    Alert.alert('Sucesso', 'Avaliação registrada com sucesso.');
  };

  const handleComment = () => {
    // Aqui você pode fazer o salvamento do comentário no servidor
    // Por exemplo, enviar uma requisição para adicionar o comentário ao serviço
    // e exibir uma mensagem de sucesso após a conclusão
    setComentarios([...comentarios, comentario]);
    setComentario('');
    Alert.alert('Sucesso', 'Comentário adicionado com sucesso.');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{servico.nome}</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.value}>{servico.descricao}</Text>
      <Text style={styles.label}>Preço:</Text>
      <Text style={styles.value}>{servico.preco}</Text>
      <Text style={styles.label}>Localização:</Text>
      <Text style={styles.value}>{servico.localizacao}</Text>
      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.value}>{servico.telefone}</Text>

        <TouchableOpacity style={styles.button} onPress={handleConcluir}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>

      <Text style={styles.sectionTitle}>Avaliações</Text>
      <View style={styles.ratingContainer}>
        <TouchableOpacity style={styles.ratingButton} onPress={() => handleRating(1)}>
          <Text style={styles.ratingText}>{avaliacao >= 1 ? '★' : '☆'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton} onPress={() => handleRating(2)}>
          <Text style={styles.ratingText}>{avaliacao >= 2 ? '★' : '☆'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton} onPress={() => handleRating(3)}>
          <Text style={styles.ratingText}>{avaliacao >= 3 ? '★' : '☆'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton} onPress={() => handleRating(4)}>
          <Text style={styles.ratingText}>{avaliacao >= 4 ? '★' : '☆'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton} onPress={() => handleRating(5)}>
          <Text style={styles.ratingText}>{avaliacao >= 5 ? '★' : '☆'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  ratingButton: {
    marginLeft: 5,
  },
  ratingText: {
    fontSize: 20,
  },
  comment: {
    marginTop: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});

export default ServicoCriado;
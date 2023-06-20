import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ServicoCriado = ({ route, navigation }) => {
  const { servico } = route.params;
  const [isEditing, setIsEditing] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Sucesso', 'Os dados foram atualizados com sucesso.');
  };

  const handleContact = () => {
    Alert.alert('Contato', `Entre em contato com ${servico.nome}`);
  };

  const handleRating = (rating) => {
    setAvaliacao(rating);
    Alert.alert('Sucesso', 'Avaliação registrada com sucesso.');
  };

  const handleComment = () => {
    const newComment = { texto: comentario, resposta: '', curtidas: 0 };
    setComentarios([...comentarios, newComment]);
    setComentario('');
    Alert.alert('Sucesso', 'Comentário adicionado com sucesso.');
  };

  const handleReply = (index) => {
    const updatedComentarios = [...comentarios];
    updatedComentarios[index].resposta = 'Resposta do criador do serviço';
    setComentarios(updatedComentarios);
  };

  const handleLike = (index) => {
    const updatedComentarios = [...comentarios];
    updatedComentarios[index].curtidas += 1;
    setComentarios(updatedComentarios);
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

      {isEditing ? (
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      ) : (
        <>
          {servico.criador === 'usuario_atual' ? (
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleContact}>
              <Text style={styles.buttonText}>Entrar em Contato</Text>
            </TouchableOpacity>
          )}
        </>
      )}

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

      <Text style={styles.sectionTitle}>Comentários</Text>
      {comentarios.map((comentario, index) => (
        <View key={index} style={styles.commentContainer}>
          <Text style={styles.commentText}>{comentario.texto}</Text>
          {comentario.resposta !== '' && (
            <View style={styles.replyContainer}>
              <Text style={styles.replyText}>{comentario.resposta}</Text>
            </View>
          )}
          <View style={styles.commentActions}>
            <TouchableOpacity style={styles.likeButton} onPress={() => handleLike(index)}>
              <Ionicons name="thumbs-up-outline" size={18} color="gray" />
              <Text style={styles.likeCount}>{comentario.curtidas}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.replyButton} onPress={() => handleReply(index)}>
              <Ionicons name="chatbubble-outline" size={18} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TextInput
        style={styles.commentInput}
        placeholder="Digite seu comentário"
        value={comentario}
        onChangeText={(text) => setComentario(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleComment}>
        <Text style={styles.buttonText}>Adicionar Comentário</Text>
      </TouchableOpacity>
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
  commentContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  commentText: {
    marginBottom: 10,
  },
  replyContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  replyText: {
    fontWeight: 'bold',
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    color: 'gray',
  },
  replyButton: {
    marginLeft: 10,
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
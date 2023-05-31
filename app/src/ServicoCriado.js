import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ServicoCriado = ({ route, navigation }) => {
  const { servico } = route.params;
  const [isEditing, setIsEditing] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você pode fazer o salvamento dos dados editados
    // Por exemplo, você pode enviar uma requisição para atualizar os dados no servidor
    // e exibir uma mensagem de sucesso após a conclusão
    Alert.alert('Sucesso', 'Os dados foram atualizados com sucesso.');
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
          <Text style={styles.sectionTitle}>Avaliação</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <TouchableOpacity
                key={rating}
                style={[styles.ratingButton, rating <= avaliacao && styles.ratingButtonActive]}
                onPress={() => handleRating(rating)}
              >
                <Text style={styles.ratingButtonText}>{rating}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.sectionTitle}>Comentários</Text>
          {/* Aqui você pode exibir os comentários existentes */}
          {/* E fornecer um formulário para adicionar novos comentários */}
          {/* Por exemplo, um TextInput para o comentário e um botão para enviar */}
          {/* Quando um comentário é enviado, você pode chamar a função handleComment */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  ratingButton: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  ratingButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  ratingButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ServicoCriado;

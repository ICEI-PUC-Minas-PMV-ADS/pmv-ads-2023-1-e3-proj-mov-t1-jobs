import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicoCriado = ({ route, navigation }) => {
  const { servico } = route.params;
  const [nome, setNome] = useState(servico.nome);
  const [descricao, setDescricao] = useState(servico.descricao);
  const [preco, setPreco] = useState(servico.preco);
  const [telefone, setTelefone] = useState(servico.telefone);

  const handleEditar = () => {
    navigation.navigate('CadastroServico', { servico });
  };

  const handleSalvar = () => {
    const servico = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      telefone: telefone
    };

    servico.nome = nome;
    servico.descricao = descricao;
    servico.preco = preco;
    servico.telefone = telefone;

    alert('Dados salvos com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviço Criado</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.text}>{nome}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.text}>{descricao}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Preço:</Text>
        <Text style={styles.text}>{preco}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.text}>{telefone}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={handleEditar} />
        <Button title="Salvar" onPress={handleSalvar} />
      </View>
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
  infoContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default ServicoCriado;
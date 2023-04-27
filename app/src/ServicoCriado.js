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
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Descrição: {descricao}</Text>
      <Text style={styles.text}>Preço: {preco}</Text>
      <Text style={styles.text}>Telefone: {telefone}</Text>
      <Button title="Editar" onPress={handleEditar} />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ServicoCriado;
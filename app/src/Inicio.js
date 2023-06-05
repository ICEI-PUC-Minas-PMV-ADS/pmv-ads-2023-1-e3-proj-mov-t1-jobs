import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getCadastroServico, deleteCadastroServico } from '../services/ServicoDB';
import { TextInput } from 'react-native';

const Inicio = ({ navigation }) => {
  const [servicos, setServicos] = useState([]);
  const route = useRoute(); // Utilize o hook useRoute para acessar a propriedade "route"
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    fetchServicos();
  }, [searchQuery]);

  const fetchServicos = async () => {
    try {
      const servicosData = await getCadastroServico(searchQuery);
      setServicos(servicosData);
    } catch (error) {
      console.error('Erro ao buscar os serviços:', error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await deleteCadastroServico(id);
      // Atualiza a lista de serviços após excluir
      fetchServicos();
    } catch (error) {
      console.error('Erro ao excluir o serviço:', error);
    }
  };

  const renderServico = ({ item }) => {
    return (
      <View style={styles.servicoContainer}>
        <View style={styles.servicoInfo}>
          <Text style={styles.servicoNome}>Nome: {item.nome}</Text>
          <Text style={styles.servicoDescricao}>Descrição: {item.descricao}</Text>
          <Text style={styles.servicoPreco}>Preço: {item.preco}</Text>
          <Text style={styles.servicoTelefone}>Telefone: {item.telefone}</Text>
        </View>
        <Button title="Excluir" onPress={() => handleDelete(item.id)} />
      </View>
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite o nome do serviço"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Image
          source={require('../assets/lupa.png')}
          style={styles.searchIcon}
        />
      </View>
      <FlatList
        data={servicos}
        renderItem={renderServico}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#278ED5',
  },
  listContainer: {
    paddingBottom: 20,
  },
  servicoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  servicoInfo: {
    flex: 1,
    marginRight: 10,
  },
  servicoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  servicoDescricao: {
    fontSize: 14,
    marginBottom: 5,
  },
  servicoPreco: {
    fontSize: 14,
    marginBottom: 5,
  },
  servicoTelefone: {
    fontSize: 14,
    marginBottom: 5,
  },
  searchContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});

export default Inicio;

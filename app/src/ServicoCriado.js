import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ServicoCriado({ route }) {
  const [servico, setServico] = useState(null);
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    // Obtenha o serviço do parâmetro de rota
    const { servico } = route.params;
    setServico(servico);
  }, []);

  const calcularMediaAvaliacoes = () => {
    // Calcula a média das avaliações
    const somaAvaliacoes = comentarios.reduce((total, comment) => total + comment.avaliacao, 0);
    const media = somaAvaliacoes / comentarios.length;
    return isNaN(media) ? 0 : media.toFixed(1);
  };

  const handleAvaliar = () => {
    // Adiciona um novo comentário com a avaliação
    const novoComentario = { avaliacao, comentario, curtidas: 0 };
    setComentarios([...comentarios, novoComentario]);
    setAvaliacao(0);
    setComentario('');
  };

  const handleCurtir = (index) => {
    // Alterna o estado de curtido do comentário selecionado
    const novosComentarios = [...comentarios];
    novosComentarios[index].curtido = !novosComentarios[index].curtido;
    setComentarios(novosComentarios);
  };

  const renderAvaliacao = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      const iconName = i <= avaliacao ? 'star' : 'star-outline';
      const starColor = i <= avaliacao ? '#FFD700' : '#C0C0C0';
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => setAvaliacao(i)}
          activeOpacity={0.8}
          style={styles.starButton}
        >
          <Ionicons name={iconName} size={24} color={starColor} />
        </TouchableOpacity>
      );
    }
    return <View style={styles.avaliacaoContainer}>{stars}</View>;
  };  

  return (
    <View style={styles.container}>
      {servico && (
        <>
          <Text style={styles.nomeServico}>{servico.nome}</Text>
          <Text style={styles.descricaoServico}>{servico.descricao}</Text>
          <Text style={styles.precoServico}>{servico.preco}</Text>
          <Text style={styles.localizacaoServico}>{servico.localizacao}</Text>
          <Text style={styles.telefoneServico}>{servico.telefone}</Text>
          <Text style={styles.mediaAvaliacoes}>Média das Avaliações: {calcularMediaAvaliacoes()}</Text>
          <Text style={styles.tituloComentarios}>Comentários:</Text>
          {comentarios.length === 0 ? (
            <Text style={styles.semComentarios}>Esse serviço ainda não foi avaliado!</Text>
          ) : (
            <FlatList
              data={comentarios}
              renderItem={({ item, index }) => (
                <View style={styles.comentarioContainer}>
                  <Text style={styles.avaliacaoComentario}>{item.avaliacao.toFixed(1)}</Text>
                  <Text style={styles.textoComentario}>{item.comentario}</Text>
                  <Text style={styles.curtidasComentario}>{item.curtidas} curtida(s)</Text>
                  <TouchableOpacity
                    style={styles.botaoCurtir}
                    onPress={() => handleCurtir(index)}
                  >
                    <Text>{item.curtido ? 'Descurtir' : 'Curtir'}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          <View style={styles.novoComentarioContainer}>
            <Text style={styles.tituloNovoComentario}>Novo Comentário:</Text>
            {renderAvaliacao()}
            <TextInput
              style={styles.inputComentario}
              placeholder="Digite seu comentário"
              value={comentario}
              onChangeText={setComentario}
              multiline
            />
            <TouchableOpacity style={styles.botaoAvaliar} onPress={handleAvaliar}>
              <Text style={styles.textoBotaoAvaliar}>Avaliar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.botaoContratar}>
            <Text style={styles.textoBotaoContratar}>Contratar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  nomeServico: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descricaoServico: {
    fontSize: 16,
    marginBottom: 8,
  },
  precoServico: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  localizacaoServico: {
    fontSize: 16,
    marginBottom: 8,
  },
  telefoneServico: {
    fontSize: 16,
    marginBottom: 16,
  },
  mediaAvaliacoes: {
    fontSize: 18,
    marginBottom: 16,
  },
  tituloComentarios: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  comentarioContainer: {
    marginBottom: 16,
  },
  avaliacaoContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avaliacaoComentario: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textoComentario: {
    fontSize: 16,
    marginBottom: 4,
  },
  curtidasComentario: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  botaoCurtir: {
    color: 'blue',
    marginBottom: 4,
  },
  novoComentarioContainer: {
    marginBottom: 16,
  },
  tituloNovoComentario: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputComentario: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginBottom: 8,
    padding: 8,
    textAlignVertical: 'top',
  },
  botaoAvaliar: {
    backgroundColor: '#0000CD',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  textoBotaoAvaliar: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  botaoContratar: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  textoBotaoContratar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  semComentarios: {
    fontSize: 16,
    marginBottom: 16,
  },
});
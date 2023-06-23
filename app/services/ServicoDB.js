import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('mydatabase.db');

export const criarTabelaServicos = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS servicos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT, preco TEXT, telefone TEXT)',
        [],
        () => {
          console.log('Tabela servicos criada com sucesso');
          resolve(); // Resolva a promessa quando a tabela for criada com sucesso
        },
        error => {
          console.error('Erro ao criar tabela servicos: ', error);
          reject(error); // Rejeite a promessa em caso de erro na criação da tabela
        }
      );
    });
  });
};

export const salvarServico = (servicoCriado, setServicosAtualizados) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO servicos (nome, descricao, preco, telefone) VALUES (?, ?, ?, ?)',
        [servicoCriado.nome, servicoCriado.descricao, servicoCriado.preco, servicoCriado.telefone],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            console.log('Serviço cadastrado com sucesso. ID: ', insertId);
            resolve(); // Resolva a promessa quando o serviço for salvo com sucesso
          } else {
            reject('Falha ao cadastrar o serviço');
          }
        },
        error => {
          reject('Erro ao inserir o serviço no banco de dados: ' + error.message);
        }
      );
    }, reject, setServicosAtualizados); // Passa setServicosAtualizados para o escopo da transação
  });
};



export const atualizarServico = (servicoAtualizado) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE servicos SET nome=?, descricao=?, preco=?, telefone=? WHERE id=?',
        [servicoAtualizado.nome, servicoAtualizado.descricao, servicoAtualizado.preco, servicoAtualizado.telefone, servicoAtualizado.id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Serviço atualizado com sucesso');
            resolve(); // Resolva a promessa quando o serviço for atualizado com sucesso
          } else {
            reject('Falha ao atualizar o serviço');
          }
        },
        error => {
          reject('Erro ao atualizar o serviço no banco de dados: ' + error.message);
        }
      );
    });
  });
};


export const getCadastroServico = (searchQuery) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      let query = 'SELECT * FROM servicos';
      let params = [];

      if (searchQuery) {
        query += ' WHERE nome LIKE ?';
        params.push(`%${searchQuery}%`);
      }

      tx.executeSql(
        query,
        params,
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};


export const deleteCadastroServico = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM servicos WHERE id=?',
        [id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};





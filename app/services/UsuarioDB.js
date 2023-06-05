import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

export const criarTabelaUsuarios = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, cpf TEXT, telefone TEXT, senha TEXT)',
        [],
        () => {
          console.log('Tabela usuarios criada com sucesso');
          resolve();
        },
        (error) => {
          console.error('Erro ao criar tabela usuarios: ', error);
          reject(error);
        }
      );
    });
  });
};

export const salvarUsuario = (usuarioCriado, callback) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log('Iniciando transação');
      tx.executeSql(
        'INSERT INTO usuarios (nome, email, cpf, telefone, senha) VALUES (?, ?, ?, ?, ?)',
        [usuarioCriado.nome, usuarioCriado.email, usuarioCriado.cpf, usuarioCriado.telefone, usuarioCriado.senha],
        (_, { rowsAffected, insertId }) => {
          console.log('')
          if (rowsAffected > 0) {
            console.log('Usuário cadastrado com sucesso. ID: ', insertId);
            resolve();
          } else {
            console.error('Falha ao cadastrar o usuário');
            reject(new Error('Falha ao cadastrar o usuário'));
          }
        },
        (error) => {
          console.error('Erro ao inserir o usuário no banco de dados: ', error);
          reject(error);
        }
      );
    }, (transactionError) => {
      console.error('Erro durante a transação: ', transactionError);
      reject(transactionError);
    }, () => {
      console.log('Transação concluída');
      if (callback) {
        callback(); // Chama o callback passado como parâmetro
      }
      resolve(); // Resolve a promise quando a transação é concluída
    });
  });
};

export const getCadastroUsuarios = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM usuarios',
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    }, (transactionError) => {
      console.error('Erro durante a transação: ', transactionError);
      reject(transactionError);
    }, () => {
      console.log('Transação concluída');
    });
  });
};

export const buscarUsuario = async (email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
        [email, senha],
        (_, { rows }) => {
          // Verifique se há um usuário encontrado
          if (rows.length > 0) {
            const usuario = rows.item(0);
            resolve(usuario);
          } else {
            resolve(null); // Retorne null se nenhum usuário for encontrado
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    }, (transactionError) => {
      console.error('Erro durante a transação: ', transactionError);
      reject(transactionError);
    },   () => {
      console.log('Transação concluída');
    });
  });
};




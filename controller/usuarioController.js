const pool = require("../data-base.js");

//Busca os usuários na database e devolve como json
async function getUsuarios (req,res) {
    pool.query("SELECT * FROM clientes", (error, result) => {
        if (error){
             throw error;
        }
        res.status(200).json(result.rows)
    })
};

async function buscarUsuarioMatricula (req,res) {
    //Reebe o ID a partir do request
    const id = req.params.id;

    //Usa o dado recebido pra consultar o banco de dados
    pool.query('SELECT * FROM clientes WHERE matricula = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows[0])
      })
};

async function retiraLivro(req, res) {
  const {id, isbn} = req.body;

  // Verificar se o aluno já tem 3 livros
  pool.query('SELECT * FROM clientes WHERE matricula = $1', [id], (error, result) => {
    if (error) {
      throw error;
    }

    const aluno = result.rows[0];
    if (aluno && aluno.contaLivros < 3) {
      // O aluno pode retirar o livro, atualizar o registro do livro e contador de livros do aluno
      pool.query('UPDATE livros SET usuarioID = $1 WHERE isbn = $2', [id, isbn], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows[0]);
      });

      pool.query('UPDATE clientes SET contaLivros = contaLivros + 1 WHERE id = $1', [id], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows[0]);
      });
    } else {
      // O aluno já tem 3 livros, envie uma resposta informando que ele atingiu o limite
      res.status(403).send("Você já atingiu o limite de livros permitidos.");
    }
  });
}

async function devolveLivro(req, res) {
  const {id, isbn} = req.body;
  
  // Verificar se o aluno já tem 3 livros
  pool.query('SELECT * FROM clientes WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error;
    }
    const aluno = result.rows[0];

    pool.query('SELECT usuarioID FROM livros WHERE isbn = $1', [isbn], (error, result) => {
      if (error) {
        throw error;
      }
      const livro = result.rows[0];
    
      if (aluno && aluno.contaLivros > 0) {
        if(livro.usuarioID != NULL){
        // O aluno pode retirar o livro, atualizar o registro do livro e contador de livros do aluno
        pool.query('UPDATE livros SET usuarioID NULL WHERE isbn = $2', [isbn], (error, result) => {
          if (error) {
            throw error;
          }
          res.status(201).send(result.rows[0]);
        });

        pool.query('UPDATE clientes SET contaLivros = contaLivros - 1 WHERE id = $1', [id], (error, result) => {
          if (error) {
            throw error;
          }
          res.status(201).send(result.rows[0]);
        });
        }
        else{
          //O livro já foi retirado
          res.status(403).send("O livro já foi retirado");
        }
      } else {
        // O aluno já tem 3 livros, envie uma resposta informando que ele atingiu o limite
        res.status(403).send("Você já atingiu o limite de livros permitidos.");
    }
  })});
}

//Posta os usuários na database e devolve um json do usuario criado
async function postUsuarios (req,res) {
    //Req body é o corpo Json do postman, ele está criando essas 3 variaveis
    //E buscando seus valores no postman
    const {matricula, nome, telefone } = req.body;

    //As três variáveis criadas são utilizadas na parte azul, que por sua vez substituem, em ordem os $1,$2,$3
    pool.query('INSERT INTO clientes (matricula, nome, telefone) VALUES ($1,$2,$3) RETURNING *', [matricula, nome, telefone], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`Usuário adicionado, matrícula: ${result.rows[0].matricula}`)
      })
};

async function deleteUsuario (req,res) {
  //Reebe o ID a partir do request
  const id = req.params.id;

  //Usa o dado recebido pra consultar o banco de dados
  pool.query('DELETE FROM clientes WHERE matricula = $1',[id], (error,result) => {
      if (error) {
        throw error;
      }
      res.status(201).send("Usuário de matrícula "+id+ " deletado!");
    })
};


module.exports= {
    getUsuarios,
    postUsuarios,
    buscarUsuarioMatricula,
    deleteUsuario,
    retiraLivro,
    devolveLivro
};
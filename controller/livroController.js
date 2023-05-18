const pool = require("../data-base.js");

const getLivros = (req,res) => {
    pool.query("SELECT * FROM livros", (error, result) => {
        if (error){
             throw error;
        }
        res.status(200).json(result.rows)
    })
};

const getLivrosById = (req,res) => {
    const id = req.params.id
    //Usa o dado recebido pra consultar o banco de dados
    pool.query('SELECT * FROM livros WHERE isbn = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows[0])
      })
    
};

const postLivros = (req,res) => {
    const {isbn, nome, autorID, editoraID,ano  } = req.body;

    //Pra criar um livro é preciso ter ao menos um autor e uma editora;
    //AutorID e EditoraID são inteiros FK de suas respectivas tabelas;
    //Ano tem que ser em data AAAA-MM-DD;
    pool.query('INSERT INTO livros (isbn, nome, autorID, editoraID,ano ) VALUES ($1,$2,$3,$4,$5) RETURNING *', [isbn, nome, autorID, editoraID,ano], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`Livro adicionado adicionado!: ${result.rows[0]}`)
      })
};

const deleteLivro = (req,res) => {
    //Reebe o ID a partir do request
    const isbn = req.params.id;
  
    //Usa o dado recebido pra consultar o banco de dados
    pool.query('DELETE FROM livros WHERE isbn = $1',[isbn], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(201).send("Livro de isbn "+isbn+ " deletado!");
      })
  };

  //Consultar livro por autor:

  //Consultar livro por editora:


module.exports= {
    getLivros,
    getLivrosById,
    postLivros,
    deleteLivro
};
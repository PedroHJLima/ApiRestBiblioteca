const pool = require("../data-base.js");

async function getAutores (req,res) {
    pool.query('SELECT * FROM autores', (error, result) => {
        if (error) {
          throw error;
        }
        res.status(200).send(result.rows);
      })
};

async function buscaAutorById (req,res) {
    const id = req.params.id;
  
    pool.query('SELECT * FROM autores WHERE id = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(200).send(result.rows[0]);
      })
    //Quero os livros no nome dele também
    pool.query('SELECT * FROM livros WHERE autores = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(200).send(result.rows[0]);
      })

};

async function putAutor (req,res) {
  const {id,nome,pais} = req.body;

  pool.query('UPDATE autores SET nome = $1, pais = $2 WHERE id = $3 RETURNING *', [nome,pais,id], (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Autor alterado!: ${result.rows[0].nome}`)
    })
};


async function postAutor (req,res) {
    //Nome e país são strings; Id INT autoincrement
    const {nome,pais} = req.body;

    pool.query('INSERT INTO autores (nome,pais) VALUES ($1,$2) RETURNING *', [nome,pais], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`Autor cadastrado!: ${result.rows[0].nome}`)
      })
};

async function deleteAutor (req,res) {
    //Nome e país são strings; Id INT autoincrement
    const id = req.params.id;
  
    //Só vai ser possível deletar o autor se nenhum livro estiver nele!
    pool.query('DELETE FROM autores WHERE id = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(200).send("Autor de id "+id+ " deletado!");
      })
};

module.exports = {
    postAutor,
    getAutores,
    deleteAutor,
    buscaAutorById,
    putAutor
};
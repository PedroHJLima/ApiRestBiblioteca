const pool = require("../data-base.js");

const getAutores = (req,res) => {
    pool.query('SELECT * FROM autor', (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows);
      })
};

const buscaAutorById = (req,res) => {
    const id = req.params.id;
  
    pool.query('SELECT * FROM autor WHERE id = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows[0]);
      })
    //Quero os livros no nome dele também
    pool.query('SELECT * FROM livros WHERE autor = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows[0]);
      })

};

const postAutor = (req,res) => {
    //Nome e país são strings; Id INT autoincrement
    const {nome,pais} = req.body;

    pool.query('INSERT INTO autor (nome,pais) VALUES ($1,$2) RETURNING *', [nome,pais], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`Autor cadastrado!: ${result.rows[0].id}`)
      })
};

const deleteAutor = (req,res) => {
    //Nome e país são strings; Id INT autoincrement
    const id = req.params.id;
  
    //Só vai ser possível deletar o autor se nenhum livro estiver nele!
    pool.query('DELETE FROM autor WHERE id = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(201).send("Autor de id "+id+ " deletado!");
      })
};

module.exports = {
    postAutor,
    getAutores,
    deleteAutor,
    buscaAutorById
};
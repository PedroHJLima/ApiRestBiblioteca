const pool = require("../data-base.js");

async function getEditoras (req,res) {
    pool.query('SELECT * FROM editoras', (error, result) => {
        if (error) {
          throw error;
        }
        res.status(200).send(result.rows);
      })
};


async function postEditora (req,res) {
    const {nome} = req.body;

    pool.query('INSERT INTO editoras (nome) VALUES ($1) RETURNING *', [nome], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`Editora criada!: ${result.rows[0].id}`)
      })
};

async function putEditora (req,res) {
  const {id,nome} = req.body;

  pool.query('UPDATE editoras SET nome = $1 WHERE id = $2 RETURNING *', [nome,id], (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Editora alterada!: ${result.rows[0].nome}`)
    })
};

async function deleteEditora (req,res) {
    //Recebe o ID a partir do request
    const id = req.params.id;
  
    //Só vai ser possível deletar a editora se nenhum livro estiver nela!
    pool.query('DELETE FROM editoras WHERE id = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(200).send("Editora de id "+id+ " deletada!");
      })
  };

module.exports = {
    postEditora,
    getEditoras,
    deleteEditora,
    putEditora
};

const pool = require("../data-base.js");

const getEditoras = (req,res) => {
    pool.query('SELECT * FROM editora', (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows);
      })
};


const postEditora = (req,res) => {
    const {nome} = req.body;

    pool.query('INSERT INTO editora (nome) VALUES ($1) RETURNING *', [nome], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`Editora criada!: ${result.rows[0].id}`)
      })
};

const deleteEditora = (req,res) => {
    //Recebe o ID a partir do request
    const id = req.params.id;
  
    //Só vai ser possível deletar a editora se nenhum livro estiver nela!
    pool.query('DELETE FROM editora WHERE id = $1',[id], (error,result) => {
        if (error) {
          throw error;
        }
        res.status(201).send("Editora de id "+id+ " deletada!");
      })
  };

module.exports = {
    postEditora,
    getEditoras,
    deleteEditora
};

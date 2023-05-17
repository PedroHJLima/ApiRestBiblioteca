const pool = require("../data-base.js");

const getAutores = (req,res) => {
    pool.query('SELECT * FROM autor', (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(result.rows);
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

module.exports = {
    postAutor,
    getAutores
};
const pool = require("../data-base.js");
const queries = require("../queries/usuarioQueries")

//Busca os usuários na database e devolve como json
const getUsuarios = (req,res) => {
    pool.query("SELECT * FROM clientes", (error, result) => {
        if (error){
             throw error;
        }
        res.status(200).json(result.rows)
    })
};

//Posta os usuários na database e devolve um json do usuario criado
const postUsuarios = (req,res) => {
    const { matricula, nome, telefone } = request.body

    pool.query('INSERT INTO clientes (matricula, nome, telefone) VALUES (matricula = $1,nome = $2, telefone= $3) RETURNING *', [matricula, nome, telefone], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`User added with ID: ${results.rows[0].id}`)
      })
};


module.exports= {
    getUsuarios,
    postUsuarios
};
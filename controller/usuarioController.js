const pool = require("../data-base.js");
const queries = require("../queries/usuarioQueries.js")

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
    const {matricula, nome, telefone } = req.body;

    pool.query('INSERT INTO clientes (matricula, nome, telefone) VALUES ($1,$2,$3) RETURNING *', [matricula, nome, telefone], (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`Usuário adicionado, matrícula: ${result.rows[0].matricula}`)
      })
};

const deletaUsuario = (req, res) => {
    

}


module.exports= {
    getUsuarios,
    postUsuarios,
    deletaUsuario
};
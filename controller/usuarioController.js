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

const deletaUsuario = (req, res) => {
    

}


module.exports= {
    getUsuarios,
    postUsuarios,
    deletaUsuario
};
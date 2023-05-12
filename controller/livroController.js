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


module.exports= {
    getLivros,
    getLivrosById
};
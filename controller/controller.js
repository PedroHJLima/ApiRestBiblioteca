const pool = require("../data-base");

const getLivros = (req,res) => {
    pool.query("SELECT * FROM livros", (erro, result) => {
        if(erro) throw new Error(msg);
        res.status(200).json(result.rows);
    })
};

module.exports= {
    getLivros
};
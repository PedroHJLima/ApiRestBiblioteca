const pool = require("../data-base.js");

const getLivros = (req,res) => {
    pool.query("SELECT * FROM livros", (error, result) => {
        if (error){
             throw error;
        }
        res.status(200).json(result.rows)
    })
};


module.exports= {
    getLivros
};
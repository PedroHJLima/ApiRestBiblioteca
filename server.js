const express = require('express');
const app = express();

const livroRota = require('./rotas/rotas.js')

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello World");
});

app.use("/api/livros", livroRota);

app.listen (3000, () => { 
    console.log("Servidor Iniciado");
})
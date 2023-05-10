const express = require('express');
const app = express();

const livroRota = require('./rotas/livroRota.js')
const usuarioRota = require("./rotas/usuarioRota")

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello World");
});

app.use("/api/livros", livroRota);
app.use("/api/usuarios",usuarioRota)

app.listen (3000, () => { 
    console.log("Servidor Iniciado");
})
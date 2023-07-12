const express = require('express');
const app = express();

const livroRota = require('./rotas/livroRota.js')
const usuarioRota = require("./rotas/usuarioRota")
const editoraRota = require("./rotas/editoraRota")
const autorRota = require("./rotas/autorRota")
const loginRota = require('./rotas/loginRota')


app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello World");
});

app.use("/api/login", loginRota);

app.get("/",(req,res) => {
    res.send("Tem chave");
});
app.use("/api/livros", livroRota);
app.use("/api/usuarios",usuarioRota);
app.use("/api/editoras",editoraRota);
app.use("/api/autores",autorRota);

app.listen (3001, () => { 
    console.log("Servidor Iniciado");
})
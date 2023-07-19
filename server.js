const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

const livroRota = require('./rotas/livroRota.js')
const usuarioRota = require("./rotas/usuarioRota")
const editoraRota = require("./rotas/editoraRota")
const autorRota = require("./rotas/autorRota")
const loginRota = require('./rotas/loginRota')

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
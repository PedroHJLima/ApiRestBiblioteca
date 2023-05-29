const express = require('express');
const app = express();

const livroRota = require('./rotas/livroRota.js')
const usuarioRota = require("./rotas/usuarioRota")
const editoraRota = require("./rotas/editoraRota")
const autorRota = require("./rotas/autorRota")
const authMiddleware = require('./middleware/middleware.js')


app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello World");
});

app.use(authMiddleware.verificarToken);

app.get("/",(req,res) => {
    res.send("Tem chave");
});
app.use("/api/livros", livroRota);
app.use("/api/usuarios",usuarioRota);
app.use("/api/editora",editoraRota);
app.use("/api/autores",autorRota)

app.listen (3000, () => { 
    console.log("Servidor Iniciado");
})
const jwt = require('jsonwebtoken');

async function autenticar(req, res) {    
    //{usuario:'admin', senha:'12345'}
    const login = req.body;
    
    if(login && login.usuario=='admin' && login.senha=='12345') {
        const tokenX = jwt.sign({
            userId: 1,
            username: 'admin'
          }, 'Sen@crs2023', { expiresIn: '1h' });
          res.status(201).json({token: tokenX});
    }
    else {
        res.status(401).json({erro: "Usuario ou senha invalidos"});
    }
        
}

module.exports = {
    autenticar
}

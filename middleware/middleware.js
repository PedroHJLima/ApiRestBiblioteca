const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.get('auth');

    if(token){
        //verificar token
        try {
            const data = jwt.verify(token, 'senac');
            if(data) {
                console.log("Payload: ", data);
                next();
            }
            else {
                res.status(401).json({erro: "Token invalido"});
            }
        }catch (err){ 
            res.status(401).json({erro: "Token invalido"});
        }
    }
    else {
        res.status(401).json({erro: "Token invalido"});
    }
    
}

module.exports = {
    verificarToken
}

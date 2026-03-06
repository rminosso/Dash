const crypto = require("crypto");
var empresaModel = require("../models/empresaModel");

function token(req, res) {
    var tokenJson = { token: crypto.randomBytes(32).toString("hex") }
    return res.json(tokenJson)
}
async function verificarToken(req, res){
    var token = req.params.token    
    var consultaToken = await empresaModel.verificarToken(token)

    console.log("CONSULTA: " + consultaToken);
    if (consultaToken) {
        res.status(200).json(consultaToken)
        
    }
}
async function cadastrar(req, res) {

    var cnpj = req.body.cnpjServer
    var razaoSocial = req.body.razaoSocialServer
    var telefoneContato = req.body.telefoneContatoServer
    var email = req.body.emailServer
    var senha = req.body.senhaServer
    var token = req.body.tokenServer
    
    if (!cnpj) {
        return res.status(400).json({ erro: "O campo cnpj está undefined!" })
    } else if (!razaoSocial) {
        return res.status(400).json({ erro: "O campo razaoSocial está undefined!" })
    }
    else if (!telefoneContato) {
        return res.status(400).json({ erro: "O campo telefoneContato está undefined!" })
    }
    else if (!email) {
        return res.status(400).json({ erro: "O campo email está undefined!" })
    }
    else if (!senha) {
        return res.status(400).json({ erro: "O campo senha está undefined!" })
    }
    else if (!token) {
        return res.status(400).json({ erro: "O campo token está undefined!" })
    }
    else {
        const cadastroEmpresa = await empresaModel.cadastrar(
            cnpj,
            razaoSocial,
            telefoneContato,
            email,
            senha,
            token
        )
        console.log("Resultado: ", cadastroEmpresa);
        if (cadastroEmpresa) {
            return res.status(200).json({mensagem: "Empresa cadastrada com sucesso!"})   
        }
    }
}
module.exports = {
    token,
    cadastrar,
    verificarToken
};

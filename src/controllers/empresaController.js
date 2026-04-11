var empresaModel = require("../models/empresaModel");

async function cadastrar(req, res) {
    var nome = req.body.nome;
    var responsavel = req.body.res;
    var cnpj = req.body.cnpj;

    if (cnpj == undefined) {
        return res.status(400).json({ erro: "O campo CNPJ está vazio!" });
    } else if (responsavel == undefined) {
        return res.status(400).json({ erro: "O campo Responsável está vazio!" });
    } else if (nome == undefined) {
        return res.status(400).json({ erro: "O campo Nome da Empresa está vazio!" });
    } else {
        empresaModel.cadastrar(nome, responsavel, cnpj)
            .then(function (resultado) {
                console.log("Cadastro realizado com sucesso no banco!");
                res.status(201).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrarEnd(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    var cep = req.body.cep;
    var logradouro = req.body.logradouro;
    var numero = req.body.numero;
    var complemento = req.body.complemento;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var uf = req.body.uf

    if (cep == undefined) {
        res.status(400).send("Seu Cep está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu Logradouro está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu Numero está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Seu Complemento está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu Bairro está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua Cidade está undefined!");
    } else if (uf == undefined) {
        res.status(400).send("Seu UF está undefined!");
    } else {
        empresaModel.cadastrarEnd(fkEmpresa, cep, logradouro, numero, complemento, bairro, cidade, uf)
            .then(function (resultado) {
                console.log("Endereço cadastrado com sucesso!");
                res.status(201).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function cadastrarContato(req, res) {
    var celular = req.body.celular;
    var fixo = req.body.fixo;
    var email = req.body.email;
    var fkEmpresa = req.body.fkEmpresa;
    
    if (celular == undefined) {
        return res.status(400).json({ erro: "O campo Telefone Celular está vazio!" });
    } else if (fixo == undefined) {
        return res.status(400).json({ erro: "O campo Telefone Fixo está vazio!" });
    } else if (email == undefined) {
        return res.status(400).json({ erro: "O campo Email está vazio!" });
    } else if (fkEmpresa == undefined) {
        return res.status(400).json({ erro: "O campo fkEmpresa está vazio!" });
    } else {
        empresaModel.cadastrarContato(celular, fixo, email, fkEmpresa)
            .then(function (resultado) {
                console.log("Cadastro realizado com sucesso no banco!");
                res.status(201).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    cadastrarEnd,
    cadastrarContato
};

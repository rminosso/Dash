var configModel = require("../models/configModel");

function buscarinfo(req, res) {
    var idUsuario = req.body.idUsuario;
    configModel.buscarinfo(idUsuario)
        .then(function (resultadoBuscar) {
            if (resultadoBuscar.length > 0) {
                console.log("TUDO CERTO")
                return res.status(200).json(resultadoBuscar)

            } else {
                throw new Error("Erro Ao Buscar Informações");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao buscar informações! Erro: ",
            erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
  }

  function buscarempresa(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    configModel.buscarempresa(fkEmpresa)
        .then(function (resultadoBuscar) {
            if (resultadoBuscar.length > 0) {
                console.log("TUDO CERTO")
                return res.status(200).json(resultadoBuscar)

            } else {
                throw new Error("Erro Ao Buscar Informações");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao buscar informações! Erro: ",
            erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
  }

    function buscarendereco(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    configModel.buscarendereco(fkEmpresa)
        .then(function (resultadoBuscar) {
            if (resultadoBuscar.length > 0) {
                console.log("TUDO CERTO")
                return res.status(200).json(resultadoBuscar)

            } else {
                throw new Error("Erro Ao Buscar Informações");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao buscar informações! Erro: ",
            erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
  }

   function editarendereco(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    var idEndereco = req.body.idEndereco;
    var cep = req.body.cep;
    var logradouro = req.body.logradouro;
    var numero = req.body.numero;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var uf = req.body.uf;
    var complemento = req.body.complemento;

    configModel.editarendereco(fkEmpresa,idEndereco,cep,logradouro,numero,bairro,cidade,uf,complemento)
        .then(function (resultadoBuscar) {
            if (resultadoBuscar.length > 0) {
                console.log("TUDO CERTO")
                return res.status(200).json(resultadoBuscar)

            } else {
                throw new Error("Erro Ao Editar Informações");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao editar informações! Erro: ",
            erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
  }

module.exports = {
    buscarinfo,
    buscarempresa,
    buscarendereco,
    editarendereco
}
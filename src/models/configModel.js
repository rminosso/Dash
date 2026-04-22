var database = require("../database/config")

function buscarinfo(idUsuario) {
    var instrucaoSql = `
            SELECT *, DATE_FORMAT(dataAtualizacao, '%Y-%m-%dT%H:%i:%s') as dataAtualizacao FROM usuario WHERE idUsuario = ${idUsuario};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function buscarempresa(fkEmpresa) {
    var instrucaoSql = `
            SELECT nomeEmpresa,cnpj FROM cadastroEmpresa WHERE idcadastroEmpresa = ${fkEmpresa};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function buscarendereco(fkEmpresa) {
    var instrucaoSql = `
            SELECT * FROM endereco WHERE fkEmpresa = ${fkEmpresa} and fkDisplay is NULL;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function editarendereco(fkEmpresa, idEndereco, cep, logradouro, numero, complemento, bairro, cidade, uf) {
    var instrucaoSql = `     
         UPDATE endereco SET cep = '${cep}',logradouro = '${logradouro}',numero = ${numero},complemento = '${complemento}',bairro = '${bairro}',cidade = '${cidade}', uf = '${uf}' WHERE idEndereco = ${idEndereco} and fkEmpresa =' ${fkEmpresa}'; 
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

module.exports = {
    buscarinfo,
    buscarempresa,
    buscarendereco,
    editarendereco
};
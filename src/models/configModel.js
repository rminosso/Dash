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
            SELECT * FROM endereco WHERE fkEmpresa = ${fkEmpresa} and fkServidor is NULL;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}


module.exports = {
    buscarinfo,
    buscarempresa,
    buscarendereco
};
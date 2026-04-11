var database = require("../database/config");

function cadastrar(nome, responsavel, cnpj) {
    var instrucaoSql = `
        INSERT INTO cadastroEmpresa (nomeResponsavel, nomeEmpresa, cnpj, statusCliente) 
        VALUES ('${responsavel}', '${nome}', '${cnpj}', 'Ativo');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarEnd(fkEmpresa, cep, logradouro, numero, complemento, bairro, cidade, uf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkEmpresa, cep , logradouro, numero, complemento, bairro, cidade, uf);

    var instrucaoSql = `
    INSERT INTO endereco (fkEmpresa, cep, logradouro, numero, complemento, bairro, cidade, uf
    ) VALUES ('${fkEmpresa}','${cep}','${logradouro}','${numero}','${complemento}','${bairro}','${cidade}','${uf}');

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarContato(celular, fixo, email, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", celular, fixo, email, fkEmpresa);
    var instrucaoSql = `
        INSERT INTO contato (fkEmpresa, telefoneFixo, telefoneCelular, email
        ) VALUES ( '${fkEmpresa}','${fixo}' ,'${celular}' ,'${email}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    cadastrarEnd,
    cadastrarContato
};
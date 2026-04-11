function upload(nomeArquivo, extensaoArquivo) {
    if (nomeArquivo.length === 0 || !nomeArquivo) {
        return "Nome do arquivo inválido!";
    }

    if (extensaoArquivo !== ".pem") {
        return "Extensão em formato incompatível!";
    }

    return true
}

module.exports = upload;
CREATE DATABASE vooh;
USE vooh;

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    fkEmpresa INT NOT NULL UNIQUE,
	cep VARCHAR(14) NOT NULL,
	logradouro VARCHAR(40) NOT NULL,
	numero INT NOT NULL,
	complemento VARCHAR(40),
	bairro VARCHAR(40) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    uf CHAR(2) NOT NULL
);

CREATE TABLE cadastroEmpresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    fkEndereco INT,
	nomeResponsavel VARCHAR(50) NOT NULL,
    nomeEmpresa VARCHAR(50) DEFAULT NULL,
	cnpj VARCHAR(14) NOT NULL UNIQUE,
    codigoAcesso VARCHAR(45),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    statusCliente VARCHAR(10),
    CONSTRAINT chkCliente
			CHECK (statusCliente IN ('Ativo', 'Inativo')),
	CONSTRAINT fkEndereco_empresa
			FOREIGN KEY (fkEndereco)
				REFERENCES endereco(idEndereco)
);

CREATE TABLE contato (
	idContato INT NOT NULL AUTO_INCREMENT,
    fkEmpresa INT NOT NULL,
		CONSTRAINT chave_compostaContato
			PRIMARY KEY(idContato, fkEmpresa),
    DD1 CHAR(3),
    DDD CHAR(3),
    telefoneFixo CHAR(10) UNIQUE,
    telefoneCelular CHAR(10) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
		CONSTRAINT fkEmpresa_contato
			FOREIGN KEY (fkEmpresa) 
				REFERENCES cadastroEmpresa(idEmpresa)
);

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkEmpresa INT NOT NULL,
    fkSuperior INT NOT NULL,
    nome VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    dataNascimento DATE NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    senha VARCHAR(20) NOT NULL,
    statusUsuario VARCHAR(10),
	dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    tipoUsuario CHAR(15),
    documentoIdetificacao VARCHAR(20),
		CONSTRAINT chkUsuario 
			CHECK (statusUsuario IN ('Ativo', 'Inativo')),
		CONSTRAINT chk_usuario 
			CHECK (tipoUsuario IN ('Gestor', 'Funcionário')),
		CONSTRAINT fkCadastroEmpresa 
			FOREIGN KEY (fkEmpresa) 
				REFERENCES cadastroEmpresa(idEmpresa),
		CONSTRAINT fkusuarioSuperior
			FOREIGN KEY (fkSuperior) 
				REFERENCES usuario(idUsuario)
);

CREATE TABLE grupo (
	idGrupo INT PRIMARY KEY,
    nome VARCHAR(45),
    descricao VARCHAR(45)
);

CREATE TABLE display (
	idDisplay INT NOT NULL auto_increment,
    fkEmpresa INT NOT NULL,
		CONSTRAINT chave_compostaServidor
			PRIMARY KEY(idDisplay, fkEmpresa),
	fkGrupo INT,
    fkEndereco INT,
	nome VARCHAR(45),
    numeroIdentificacao VARCHAR(45),
    sistemaOperacional VARCHAR(45),
    enderecoIP VARCHAR(100),
		CONSTRAINT fkEmpresa_display
			FOREIGN KEY (fkEmpresa)
				REFERENCES cadastroEmpresa(idEmpresa),
		CONSTRAINT fkgrupo_display
			FOREIGN KEY (fkGrupo)
				REFERENCES grupo(idGrupo),
		CONSTRAINT fkendereco_display
			FOREIGN KEY (fkEndereco)
				REFERENCES endereco(idEndereco)
);

CREATE TABLE componente (
	idComponente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    tipo VARCHAR(45),
    medida VARCHAR(45) NOT NULL
);

CREATE TABLE display_componente (
	fkDisplay INT NOT NULL,
    fkEmpresa INT NOT NULL,
	fkComponente INT NOT NULL,
		CONSTRAINT chaveComposta_servidorComponente
			PRIMARY KEY (fkDisplay, fkEmpresa, fkComponente),
	minimo FLOAT,
    maximo FLOAT,
		CONSTRAINT fkDisplay_displayComponente
			FOREIGN KEY (fkDisplay)
				REFERENCES display(idDisplay),
		CONSTRAINT fkEmpresa_displayComponente
			FOREIGN KEY (fkEmpresa)
				REFERENCES cadastroEmpresa(idEmpresa),
		CONSTRAINT fkComponente_displayComponente
			FOREIGN KEY (fkComponente)
				REFERENCES componente(idComponente)
);
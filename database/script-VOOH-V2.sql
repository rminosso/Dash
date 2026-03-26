CREATE DATABASE vooh;
USE vooh;

CREATE TABLE cadastroEmpresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	nomeResponsavel VARCHAR(50) NOT NULL,
    nomeEmpresa VARCHAR(50) DEFAULT NULL,
	cnpj VARCHAR(14) NOT NULL UNIQUE,
    codigoAcesso VARCHAR(45),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    statusCliente VARCHAR(10),
    CONSTRAINT chkCliente
			CHECK (statusCliente IN ('Ativo', 'Inativo'))
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

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    fkEmpresa INT NOT NULL UNIQUE,
	cep VARCHAR(14) NOT NULL,
	logradouro VARCHAR(40) NOT NULL,
	numero INT NOT NULL,
	complemento VARCHAR(40),
	bairro VARCHAR(40) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    uf CHAR(2) NOT NULL,
		CONSTRAINT fkEmpresa_endereco
			FOREIGN KEY (fkEmpresa) 
				REFERENCES cadastroEmpresa(idEmpresa)
);

CREATE TABLE display (
	idDisplay INT NOT NULL auto_increment,
    fkEmpresa INT NOT NULL,
		CONSTRAINT chave_compostaServidor
			PRIMARY KEY(idDisplay, fkEmpresa),
	nome VARCHAR(45),
    numeroIdentificacao VARCHAR(45),
    sistemaOperacional VARCHAR(45),
    enderecoIP VARCHAR(100),
		CONSTRAINT fkEmpresa_display
			FOREIGN KEY (fkEmpresa)
				REFERENCES cadastroEmpresa(idEmpresa)
);

CREATE TABLE componente (
	idComponente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    tipo VARCHAR(45),
    medida VARCHAR(45) NOT NULL,
    biblioteca VARCHAR(45) NOT NULL,
    parametro VARCHAR(45)
);

CREATE TABLE display_componente (
	fkDisplay INT NOT NULL,
    fkEmpresa INT NOT NULL,
	fkComponente INT NOT NULL,
		CONSTRAINT chaveComposta_servidorComponente
			PRIMARY KEY (fkDisplay, fkEmpresa, fkComponente),
	limite INT NOT NULL, 
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


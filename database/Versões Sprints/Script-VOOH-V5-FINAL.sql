CREATE DATABASE vooh;
USE vooh;

CREATE TABLE cadastroEmpresa (
	idcadastroEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	nomeResponsavel VARCHAR(50) NOT NULL,
    nomeEmpresa VARCHAR(50) DEFAULT NULL,
	cnpj VARCHAR(14) NOT NULL UNIQUE,
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    statusCliente VARCHAR(10)
);

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    codigoAcesso VARCHAR(45),
    fkEmpresa INT NOT NULL,
    fkSuperior INT,
    nome VARCHAR(50),
    email VARCHAR(100) NOT NULL UNIQUE,
    dataNascimento DATE NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    senha VARCHAR(20),
    statusUsuario VARCHAR(25),
	dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    tipoUsuario CHAR(25),
    documentoIdetificacao VARCHAR(20),
		CONSTRAINT chkCliente 
			CHECK (statusUsuario IN ('Ativo', 'Inativo')),
		CONSTRAINT chk_usuario 
			CHECK (tipoUsuario IN ('Gestor', 'Funcionario', 'Suporte')),
		CONSTRAINT fkCadastroEmpresa 
			FOREIGN KEY (fkEmpresa) 
				REFERENCES cadastroEmpresa(idcadastroEmpresa),
		CONSTRAINT fkusuarioSuperior
			FOREIGN KEY (fkSuperior) 
				REFERENCES usuario(idUsuario)
);

select*from usuario;

INSERT INTO cadastroEmpresa 
(nomeResponsavel, nomeEmpresa, cnpj, statusCliente)
VALUES 
('Carlos Silva', 'Tech Solutions', '12345678000199', 'Ativo');

INSERT INTO usuario
(fkEmpresa, codigoAcesso, fkSuperior, nome, email, dataNascimento, cpf, senha, statusUsuario, tipoUsuario, documentoIdetificacao)
VALUES
(1,'ACESSO123', 1, 'Carlos Silva', 'carlos@techsolutions.com', '1985-06-15', '12345678901', 'senha123', 'Ativo', 'Gestor', 'RG1234567');

INSERT INTO usuario
(fkEmpresa, codigoAcesso, fkSuperior, email, dataNascimento, cpf, statusUsuario, tipoUsuario, documentoIdetificacao)
VALUES
(1,'337', 1,'valete@techsolutions.com', '2002-06-15', '12345678902', 'Ativo', 'Funcionario', 'RG1234567');

INSERT INTO usuario
(fkEmpresa, codigoAcesso, fkSuperior, nome, email, dataNascimento, cpf, senha ,statusUsuario, tipoUsuario, documentoIdetificacao)
VALUES
(1, NULL, 1, 'Guilherme Ornaghi', 'guilherme@vooh.com', '2006-07-16', '12345672222', 'senha123', 'Ativo', 'Suporte', 'RG1254678');

select* from usuario;

CREATE TABLE contato (
    idContato INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    fkEmpresa INT NOT NULL,
    telefoneFixo CHAR(12) NOT NULL UNIQUE,
    telefoneCelular CHAR(12) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
		CONSTRAINT fkEmpresa_contato
			FOREIGN KEY (fkEmpresa) 
				REFERENCES cadastroEmpresa(idcadastroEmpresa)
);

CREATE TABLE grupo (
	idGrupo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    descricao VARCHAR(45)
);

INSERT INTO grupo (idGrupo,nome,descricao) VALUES (
 1,"Laranja","Displays localizados na zona sul"
 );

CREATE TABLE display (
	idDisplay INT NOT NULL AUTO_INCREMENT,
    fkEmpresa INT NOT NULL,
		CONSTRAINT chave_compostaServidor
			PRIMARY KEY(idDisplay, fkEmpresa),
	fkGrupo INT NOT NULL,
	nome VARCHAR(45),
    numeroIdentificacao VARCHAR(45),
    sistemaOperacional VARCHAR(45),
    enderecoIP VARCHAR(100),
		CONSTRAINT fkEmpresa_display
			FOREIGN KEY (fkEmpresa)
				REFERENCES cadastroEmpresa(idcadastroEmpresa),
		CONSTRAINT fkgrupo_display
			FOREIGN KEY (fkGrupo)
				REFERENCES grupo(idGrupo)
);

select * from display;

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    fkEmpresa INT NOT NULL,
    fkDisplay INT UNIQUE,
	cep VARCHAR(14) NOT NULL,
	logradouro VARCHAR(40) NOT NULL,
	numero INT NOT NULL,
	complemento VARCHAR(40),
	bairro VARCHAR(40) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    uf CHAR(2) NOT NULL,
		CONSTRAINT fkEmpresa_endereco
			FOREIGN KEY (fkEmpresa) 
				REFERENCES cadastroEmpresa(idcadastroEmpresa),
	CONSTRAINT fkServidor_endereco
			FOREIGN KEY (fkDisplay) 
				REFERENCES display (idDisplay)             
);


CREATE TABLE componentes (
	idComponente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    tipo VARCHAR(45),
    medida VARCHAR(45) NOT NULL,
    biblioteca VARCHAR(45) NOT NULL,
    parametro VARCHAR(45)
);

insert into componentes values 
(1,'cpu','processador','GHZ','psutil','.cpu'),
(2,'ram','armazenamento','GB','psutil','.memory'),
(3,'disco','armazenamento','TB','psutil','.disk');

CREATE TABLE display_componentes (
    fkDisplay INT NOT NULL,
    fkEmpresa INT NOT NULL,
    fkComponente INT NOT NULL,
        CONSTRAINT chaveComposta_servidorComponente
            PRIMARY KEY (fkDisplay, fkEmpresa, fkComponente),
    limite_min INT , 
    limite_max INT ,
        CONSTRAINT fkServidor_servidorComponente
            FOREIGN KEY (fkDisplay)
                REFERENCES display(idDisplay),
        CONSTRAINT fkEmpresa_servidorComponente
            FOREIGN KEY (fkEmpresa)
                REFERENCES cadastroEmpresa(idcadastroEmpresa),
        CONSTRAINT fkComponente_servidorComponente
            FOREIGN KEY (fkComponente)
                REFERENCES componentes(idComponente)
);

select * from usuario;
select * from cadastroEmpresa;
SELECT * from endereco;

-- Empresa
INSERT INTO cadastroEmpresa 
(nomeResponsavel, nomeEmpresa, cnpj, statusCliente)
VALUES 
('Ana Souza', 'Digital Corp', '98765432000188', 'Ativo');

-- Contato da empresa
INSERT INTO contato 
(fkEmpresa, telefoneFixo, telefoneCelular, email)
VALUES 
(2, '011133334444', '011999998888', 'contato@digitalcorp.com');

-- Endereço da empresa
INSERT INTO endereco 
(fkEmpresa, fkDisplay, cep, logradouro, numero, complemento, bairro, cidade, uf)
VALUES 
(2, NULL, '01310100', 'Avenida Paulista', 1000, 'Sala 42', 'Bela Vista', 'São Paulo', 'SP');

-- Servidor
INSERT INTO display 
(fkEmpresa, nome, numeroIdentificacao, sistemaOperacional, enderecoIP)
VALUES 
(2, 'Servidor Principal', 'SRV-001', 'Ubuntu 22.04', '192.168.1.10');

-- Componentes do servidor
INSERT INTO display_componentes 
(fkDisplay, fkEmpresa, fkComponente, limite_min, limite_max)
VALUES 
(1, 2, 1, 10, 90),  -- CPU
(1, 2, 2, 20, 85),  -- RAM
(1, 2, 3, 5, 80);   -- Disco

-- Gestor (necessário antes por causa do fkSuperior)
INSERT INTO usuario
(fkEmpresa, codigoAcesso, fkSuperior, nome, email, dataNascimento, cpf, senha, statusUsuario, tipoUsuario, documentoIdetificacao)
VALUES
(2, 'GEST001', 1, 'Ana Souza', 'ana@digitalcorp.com', '1990-03-20', '98765432100', 'senha123', 'Ativo', 'Gestor', 'RG9876543');


-- Usuário Suporte
INSERT INTO usuario
(fkEmpresa, codigoAcesso, fkSuperior, nome, email, dataNascimento, cpf, senha, statusUsuario, tipoUsuario, documentoIdetificacao)
VALUES
(2, 'SUP001', 2, 'Pedro Lima', 'pedro@digitalcorp.com', '1995-08-10', '11122233344', 'senha456', 'Ativo', 'Suporte', 'RG1122334');

-- Display associado a grupo
INSERT INTO display 
(fkEmpresa, fkGrupo, nome, numeroIdentificacao, sistemaOperacional, enderecoIP)
VALUES 
(2, 1,'Servidor Principal Laranja', 'SRV-002', 'Ubuntu 23.04', '192.168.1.10');

SELECT idUsuario, nome, email, fkEmpresa as empresaId, tipoUsuario FROM usuario WHERE email = 'pedro@digitalcorp.com' AND senha = 'senha456';

SELECT 
d.idDisplay,
e.nomeEmpresa,
g.nome AS nomeGrupo,
g.descricao AS descricaoGrupo
FROM grupo AS g
	JOIN display AS d ON g.idGrupo = d.fkGrupo
		JOIN cadastroEmpresa AS e ON d.fkEmpresa = e.idcadastroEmpresa;

select*from cadastroEmpresa;
select * from contato;
select * from usuario;
select * from display_componentes;
select * from display;

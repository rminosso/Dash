/**
 * Script de criação de tabelas
 *
 * Banco de Dados: VOOH
 *
 * */

-- Criar o banco de dados
CREATE DATABASE vooh;

-- Usar o banco de dados
USE vooh;

-- Endereço
/*
 * Campos:
 *
 * - ID do endereço
 * - Logradouro do endereço
 * - Número do endereço
 * - Bairro do endereço
 * - Cidade do endereço
 * - UF do endereço
 * - Complemento
 * */
CREATE TABLE endereco (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID do endereço
    cep VARCHAR(20) NOT NULL, -- CEP do endereço
	logradouro VARCHAR(50) NOT NULL, -- Logradouro do endereço
	numero VARCHAR(10) NOT NULL, -- Número do endereço
	bairro VARCHAR(50) NOT NULL, -- Bairro do endereço
	cidade VARCHAR(50) NOT NULL, -- Cidade do endereço
	uf CHAR(2) NOT NULL, -- UF do endereço
	complemento VARCHAR(20), -- Complemento do endereço
	CONSTRAINT chkUf
		CHECK (uf IN (
			'AC', 'AL', 'AM', 'AP', 'BA',
			'CE', 'DF', 'ES', 'GO', 'MA',
			'MG', 'MS', 'MT', 'PA', 'PB',
			'PE', 'PI', 'PR', 'RJ', 'RN',
			'RO', 'RR', 'RS', 'SC', 'SE',
			'SP', 'TO'
		)
	)
);

-- Empresa
/*
 * Campos:
 *
 * - ID da empresa
 * - Nome do responsável
 * - Nome da empresa
 * - CNPJ da empresa
 * - Código de acesso
 * - Status da empresa
 * - Data e hora de cadastro
 * - Data e hora de atualização
 * - FK do endereço
 * */
 
CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID da Empresa
    fk_endereco INT, -- FK endereço
	nome_responsavel VARCHAR(50) NOT NULL, -- Nome do responsável
	nome_empresa VARCHAR(50) DEFAULT NULL, -- Nome da empresa
	cnpj VARCHAR(14) NOT NULL UNIQUE, -- CNPJ da empresa
	codigo_acesso VARCHAR(45) NOT NULL, -- Código de acesso
	status_empresa VARCHAR(10) NOT NULL DEFAULT 'Ativa', -- Status da empresa
	data_hora_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP, -- Data e hora de cadastro
	data_hora_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP
		ON UPDATE CURRENT_TIMESTAMP, -- Data e hora de atualização
    urlWEBHOOK VARCHAR(255),
	CONSTRAINT fkEnderecoEmpresa
		FOREIGN KEY (fk_endereco) REFERENCES endereco (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT chkStatusEmpresa
		CHECK(status_empresa IN ('Ativa', 'Inativa', 'Suspensa')) -- Check de status
);

-- Contato
/*
 * Campos:
 *
 * - ID do contato
 * - Código de país (DDI)
 * - Código de região (DDD)
 * - Telefone fixo
 * - Telefone celular
 * - E-mail
 * - FK da empresa
 * */
 
CREATE TABLE contato (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID do contato
	ddi CHAR(3), -- DDI
	ddd CHAR(3), -- DDD
	telefone_fixo VARCHAR(15), -- Telefone fixo
	telefone_celular VARCHAR(15), -- Telefone celular
	email VARCHAR(100) NOT NULL UNIQUE, -- E-mail
	fk_empresa INT, -- FK da empresa
	CONSTRAINT fkEmpresaContato
		FOREIGN KEY (fk_empresa) REFERENCES empresa (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Usuário
/*
 * Campos:
 *
 * - ID do usuário
 * - Código de acesso
 * - Nome do usuário
 * - Sobrenome do usuário
 * - E-mail do usuário
 * - Data de nascimento do usuário
 * - CPF do usuário
 * - Documento de identificação do usuário - Substituto do CPF
 * - Tipo de usuário
 * - Senha de acesso do usuário
 * - Hash da senha de acesso - Desejável de implementação
 * - Status do usuário
 * - Data e hora de cadastro
 * - Data e hora de atualização
 * - FK da empresa
 * - FK do superior do usuário
 * */
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID do Usuário
    fk_empresa INT, -- FK da empresa
	nome VARCHAR(50) NOT NULL, -- Nome do usuário
	sobrenome VARCHAR(50) NOT NULL, -- Sobrenome do usuário
	email VARCHAR(100) NOT NULL UNIQUE, -- E-mail do usuário
	data_nascimento DATE NOT NULL, -- Data de nascimento
	cpf CHAR(11) NOT NULL UNIQUE, -- CPF do usuário
	tipo VARCHAR(10) NOT NULL, -- Tipo de usuário
	senha VARCHAR(16) NOT NULL, -- Senha
	-- hashSenha VARCHAR(255) NOT NULL, -- Hash da senha
	status_usuario VARCHAR(10) NOT NULL DEFAULT 'Ativo',
	data_hora_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP, -- Data e hora de cadastro
	data_hora_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP
		ON UPDATE CURRENT_TIMESTAMP, -- Data e hora de atualização
	CONSTRAINT fkEmpresaUsuario
		FOREIGN KEY (fk_empresa) REFERENCES empresa (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	fk_superior INT, -- FK do superior do usuário
	CONSTRAINT fkSuperior
		FOREIGN KEY (fk_superior) REFERENCES usuario (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT chkStatusUsuario
		CHECK(status_usuario IN ('Ativo', 'Inativo', 'Suspenso')) -- Check de status
);

-- Zona
/**
 * Campos:
 *
 * - ID da Zona
 * - Nome da zona
 * - Descrição
 * */
CREATE TABLE zona (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID da zona
	nome VARCHAR(45), -- Nome da zona
	descricao VARCHAR(50) -- Descrição da zona
);

-- Componente
/*
 * Campos:
 *
 * - ID do componente
 * - Nome do componente
 * - Tipo do componente
 * - Unidade de medida do componente
 * */
CREATE TABLE componente (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID do componente
	nome VARCHAR(45) NOT NULL, -- Nome do componente
	tipo VARCHAR(50) NOT NULL, -- Tipo de componente
	unidade VARCHAR(5) -- Unidade de medida
);

-- Display
/*
 * Campos:
 *
 * - ID do display
 * - Nome do display
 * - Identificação
 * - Sistema Operacional
 * - Endereço de IPV4
 * - Endereço de MAC
 * - FK da empresa
 * - FK da zona
 * - FK do endereço
 * */
CREATE TABLE display (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID do display
	fk_empresa INT, -- FK da empresa
	fk_zona INT, -- FK da zona
	fk_endereco INT, -- FK do endereço
	nome VARCHAR(45) NOT NULL, -- Nome do display
	identificacao VARCHAR(45) NOT NULL, -- Identificação
	so VARCHAR(10) NOT NULL, -- Sistema Operacional
	ip VARCHAR(15) NOT NULL , -- Endereço IPV4
	mac VARCHAR(20) NOT NULL, -- Endereço MAC
	CONSTRAINT fkEmpresaDisplay
		FOREIGN KEY (fk_empresa) REFERENCES empresa (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fkZonaDisplay
		FOREIGN KEY (fk_zona) REFERENCES zona (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fkEnderecoDisplay
		FOREIGN KEY (fk_endereco) REFERENCES endereco (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT chkSistema
		CHECK (so IN ('Windows', 'Linux'))
);

-- Associativa - Display-Componente
/*
 * Campos:
 *
 * - FK do display
 * - FK do componente
 * - FK da empresa
 * - Mínimo
 * - Máximo
 * */
CREATE TABLE componente_display (
	fk_display INT NOT NULL, -- FK do display
	fk_componente INT NOT NULL, -- FK do componente
	fk_empresa INT NOT NULL, -- FK da empresa
	minimo DECIMAL(6,2), -- Limite mínimo
	maximo DECIMAL(6,2), -- Limite máximo
	CONSTRAINT fkDisplayComponente
		FOREIGN KEY (fk_display) REFERENCES display (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fkComponente
		FOREIGN KEY (fk_componente) REFERENCES componente (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fkEmpresaComponente
		FOREIGN KEY (fk_empresa) REFERENCES empresa (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	PRIMARY KEY (fk_display, fk_componente, fk_empresa)
);


-- Alertas
/*
 * Campos:
 *
 * - PK do alerta
 * - FK do display
 * - FK do componente
 * - FK da empresa
 * - tipo
 * - status
 * - data_hora_emissao
 * - data_hora_solucao
 * */
 
 CREATE TABLE alertas (
	id INT PRIMARY KEY auto_increment,
    fk_display INT,
    fk_empresa INT,
    fk_componente INT,
    tipo CHAR(11),
    status_alerta VARCHAR(20),
    data_hora_emissao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_hora_solucao DATETIME DEFAULT CURRENT_TIMESTAMP,
		CONSTRAINT chkAlerta 
			CHECK (tipo IN ('Crítico', 'Ateção')),
	CONSTRAINT fkDisplay_Componente
		FOREIGN KEY (fk_display) REFERENCES display (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fk_Componente
		FOREIGN KEY (fk_componente) REFERENCES componente (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fk_EmpresaComponente
		FOREIGN KEY (fk_empresa) REFERENCES empresa (id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);
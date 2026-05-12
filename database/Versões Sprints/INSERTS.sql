/**
 * Script de inserts de de tabelas
 *
 * Banco de Dados: VOOH
 *
 * */


USE vooh;

-- Insert de endereços
INSERT INTO endereco VALUES
(DEFAULT, '06263-200', 'Avenida Paulista', '1234', 'Bela Vista', 'São Paulo', 'SP', NULL),
(DEFAULT, '06263-200', 'Rua Boa Vista', '170', 'Centro', 'São Paulo', 'SP', NULL),
(DEFAULT, '06263-200', 'Avenida Ipiranga', '200', 'República', 'São Paulo', 'SP', NULL);

-- Insert de empresas
INSERT INTO empresa VALUES
(DEFAULT, 1, 'Bianca Fragoso', 'Tech Solutions Ltda', '04130682000108', 'ABC123', 'Ativa', DEFAULT, DEFAULT, "url");

-- Contato da empresa
INSERT INTO contato 
(fk_empresa, telefone_fixo, telefone_celular, email)
VALUES 
(2, '011133334444', '011999998888', 'contato@digitalcorp.com');

-- Insert de usuario
INSERT INTO usuario
(fk_empresa, fk_superior, nome, sobrenome, email, data_nascimento, cpf, senha, status_usuario, tipo)
VALUES
(1, 1, 'Carlos', 'Silva', 'carlos@techsolutions.com', '1985-06-15', '12345678901', 'senha123', 'Ativo', 'Gestor');


-- Insert de Zona
INSERT INTO zona (id, nome, descricao) VALUES (
 1,"Laranja","Displays localizados na zona sul"
 );

-- Insert de componente 
insert into componente values 
(1,'cpu','processador','GHZ'),
(2,'ram','armazenamento','GB'),
(3,'disco','armazenamento','TB');

-- Insert display
INSERT INTO display 
(fk_empresa, nome, identificacao, so, ip, mac)
VALUES 
(1, 'Servidor Principal', 'SRV-001', 'Linux', '192.168.1.10', '101010100');
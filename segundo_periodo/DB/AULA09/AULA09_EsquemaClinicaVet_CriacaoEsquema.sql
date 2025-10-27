-- CRIAÇÃO DE ESQUEMA E TABELAS
CREATE SCHEMA clinica_vet;
use clinica_vet;
-- DROP SCHEMA clinica_vet;

-- Tutor(id, cpf, nome, email, fone)]
-- DROP TABLE Tutor;
CREATE TABLE Tutor (
    id integer PRIMARY KEY auto_increment,    
    cpf varchar(12) NOT NULL UNIQUE,
	nome varchar(100) NOT NULL,
    email varchar(200) UNIQUE,
    fone varchar(16) NOT NULL
);

-- Tutor_endereço(id, id_resp, cep, rua, numero, complemento, cidade, uf)
-- DROP TABLE Tutor_endereco;
CREATE TABLE Tutor_endereco (
    id INT PRIMARY KEY auto_increment,
	id_tutor integer NOT NULL,
	cep varchar(12) NOT NULL,
    rua varchar(100),
    numero integer NOT NULL,
    complemento varchar(50),
    cidade varchar(50),
    uf varchar(2),
	FOREIGN KEY (id_tutor) REFERENCES Tutor (id)
);

-- Animal(id, id_resp, peso, raca, especie, cor, sexo, data_nasc)
-- DROP TABLE Animal;
CREATE TABLE Animal (
    id INT PRIMARY KEY auto_increment,
	id_tutor INT, -- NOT NULL
    nome VARCHAR(100) NOT NULL,
    peso decimal(5,2),
    raca VARCHAR(100) NOT NULL,
    especie VARCHAR(100),
	cor VARCHAR(100),
	sexo VARCHAR(10),
	data_nasc date,
    FOREIGN KEY (id_tutor) REFERENCES Tutor(id)
);

-- Veterinário(id, nome, crmv, email, fone, especialidade)
-- DROP TABLE Veterinario;
CREATE TABLE Veterinario (
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100),
    crmv VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(200) UNIQUE,
    fone VARCHAR(16),
	especialidade VARCHAR(100)
);

-- Veterinario_endereço(id, id_vet, cep, rua, numero, complemento, cidade, uf)
-- DROP TABLE Veterinario_endereço;
CREATE TABLE Veterinario_endereco (
    id INT PRIMARY KEY auto_increment,
	id_vet INT NOT NULL,
	cep VARCHAR(12),
    rua VARCHAR(100),
    numero INT,
    complemento VARCHAR(50),
    cidade VARCHAR(50),
    uf char(2),
	FOREIGN KEY (id_vet) REFERENCES Veterinario(id)
);

-- Consulta(id, id_vet, id_animal, dt, horario)
-- DROP TABLE Consulta;
CREATE TABLE Consulta (
    id INT PRIMARY KEY auto_increment,
	id_vet INT NOT NULL,
    id_animal INT NOT NULL,
    dt DATE NOT NULL,
    horario TIME NOT NULL,
    FOREIGN KEY (id_vet) REFERENCES Veterinario(id), 
    FOREIGN KEY (id_Animal) REFERENCES Animal(id) 
);

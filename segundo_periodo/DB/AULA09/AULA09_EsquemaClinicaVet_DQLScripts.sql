-- Consultas SQL
use clinica_vet;
SET SQL_SAFE_UPDATES = 0;

-- *** DQL - DATA QUERY LANGUAGE
-- select simples
SELECT * FROM Animal;
SELECT * FROM Tutor;


-- seleção
SELECT * FROM animal WHERE especie = 'cachorro';

SELECT * FROM animal WHERE especie != 'cachorro' AND data_nasc > '2020-01-01';

SELECT * FROM Tutor WHERE cpf = '12345678901' OR nome = 'João Silva';


-- projeção
SELECT nome, raca, peso FROM Animal;


-- like
SELECT * FROM Animal WHERE nome LIKE 'b%';
SELECT * FROM Animal WHERE nome LIKE '%bb%';
SELECT * FROM Animal WHERE nome LIKE '_a%';


-- distinct
SELECT DISTINCT raca FROM Animal;


-- order by
SELECT nome, raca, peso FROM Animal ORDER BY raca, peso;
SELECT nome, raca, peso FROM Animal WHERE raca = 'Poodle' ORDER BY raca, peso DESC;
SELECT nome, cpf FROM Tutor ORDER BY nome;


-- limit
SELECT nome, raca, peso FROM animal ORDER BY nome ;
SELECT nome, raca, peso FROM animal ORDER BY nome LIMIT 3 ; 
SELECT nome, raca, peso FROM animal ORDER BY nome LIMIT 5,3 ;



-- join usando where
SELECT t.nome, t.email, a.nome, a.raca 	
	FROM Tutor t, animal a	
	WHERE t.id = a.id_tutor;

SELECT t.nome AS NomeTutor, t.email, a.nome AS NomeAnimal, a.raca 	
	FROM Tutor t, animal a	
	WHERE t.id = a.id_tutor;


-- joins tipos
-- innner
SELECT t.nome, t.email, a.nome, a.raca 	
	FROM Tutor t    
	INNER JOIN Animal a ON (t.id = a.id_tutor);

-- left
SELECT t.nome, t.email, a.nome, a.raca 	
	FROM Tutor t    
	LEFT JOIN Animal a ON (t.id = a.id_tutor);

-- right
SELECT t.nome, t.email, a.nome, a.raca 	
	FROM Tutor t    
	RIGHT JOIN Animal a ON (t.id = a.id_tutor);

-- CROSS    
SELECT t.nome, t.email, a.nome, a.raca 
	FROM Tutor t    	
	CROSS JOIN Animal a ON (t.id = a.id_tutor);

SELECT t.nome, t.email, a.nome, a.raca 	
	FROM Tutor t    
	LEFT JOIN Animal a ON (t.id = a.id_tutor)
UNION
SELECT t.nome, t.email, a.nome, a.raca 	
	FROM Tutor t    
	RIGHT JOIN Animal a ON (t.id = a.id_tutor);
    
	
-- junçao de diversas tabelas
SELECT c.dt, c.horario, t.nome AS NomeTutor, t.fone, a.nome 
						AS NomeAnimal, v.nome AS NomeVet, v.especialidade 	
	FROM Consulta c    
	JOIN Animal a ON (a.id = c.id_animal)
    JOIN Veterinario v ON (v.id = c.id_vet)
    JOIN Tutor t ON (t.id = a.id_tutor) 
--    WHERE dt > '2024-09-01'
--    ORDER BY c.dt DESC;
;


-- UNION
SELECT * FROM pet WHERE especie = 'cachorro' 
	UNION 
SELECT * FROM pet WHERE peso < 10;

SELECT * FROM pet WHERE especie = 'cachorro' 
	UNION ALL
SELECT * FROM pet WHERE peso < 10;


-- MAX
SELECT MAX(peso) FROM Animal;

SELECT raca FROM Animal WHERE peso = (SELECT MAX(peso) FROM Animal);


-- MIN
SELECT MIN(peso) FROM Animal;

SELECT raca FROM Animal WHERE peso = (SELECT MIN(peso) FROM Animal);


-- SUM
SELECT SUM(peso) FROM Animal;


-- AVG
SELECT AVG(peso) FROM Animal;

SELECT raca FROM Animal WHERE peso > (SELECT AVG(peso) FROM Animal);


-- GROUP BY - COUNT
SELECT raca, COUNT(raca) FROM Animal GROUP BY raca;


-- HAVING
SELECT raca, COUNT(raca) 
	FROM Animal 
	GROUP BY raca 
	HAVING raca != 'Poodle';
    
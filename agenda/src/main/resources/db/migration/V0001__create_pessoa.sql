create table pessoa 
(
	pes_id			serial			not null	primary key,
	pes_nome		varchar(60),
	pes_cpf_cnpj	varchar(18),
	pes_telefone	varchar(15),
	pes_email		varchar(60),
	pes_funcao		varchar(30),
	pes_login		varchar(30),
	pes_senha		varchar(128),
	pes_perfil		varchar(30)
);

insert into pessoa (pes_nome, pes_cpf_cnpj, pes_telefone, pes_email, pes_funcao, pes_login, pes_senha, pes_perfil)
             values ('Joao da Silva', '111.111.111-11', '(62)9999-8888', 'joao@teste.com', 'Professor', 'joaosilva', '123456', 'Interno');
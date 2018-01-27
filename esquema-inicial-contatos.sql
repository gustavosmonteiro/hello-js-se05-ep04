create table contato(
  id_contato integer not null primary key autoincrement,
  nome_contato varchar(255) not null,
  data_criacao_contato timestamp not null default current_timestamp,
  telefone_contato varchar(255)
);


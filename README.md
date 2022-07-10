# Desafio Multiplier Integração

## Desenvolvido em Node, o desafio consiste em quatro etapas:
- Criar um Banco de dados PostgreSQL
- Criar um Banco de dados MySQL
- Criar uma api para consumir o banco de dados Mysql utilizando Sequelize como ORM
- Criar um serviço cron utilizando node-schedule para buscar dados na API e salvar no banco de dados PostgreSQL

### Requisitos para teste da aplicação:
- Node.js
- MySQL
- PostgreSQL
- Clone do projeto

### Inicialização:
1. Abra o projeto em um editor de programação
2. Instale os modulos utilizados com 'npm install'
3. Configure o arquivo .env utilizando o arquivo example.env
4. Opte pelo comando 'node reset', para resetar e ou recriar os bancos de dados mysql e postgres 
5. Utilize do comando 'npm start' para rodar a aplicação

### Banco de dados:
- Categorias
1. codigo
2. titulo
3. status

- Produtos
1. codigo
2. nome
3. descricao
4. valor
5. status
6. idCategoria

- Invetários
1. quantidade
2. reserva
3. status
4. idProduto

### Rotas:
```
_ /categorias _
[GET] '/' - INDEX
[GET] '/:id' - SHOW
[POST] '/:id' - STORE
[PATCH] '/:id' - UPDATE
[DELETE] '/:id' - DELETE


_ /produtos _ 
[GET] '/' - INDEX
[GET] '/:id' - SHOW
[POST] '/:id' - STORE
[PATCH] '/:id' - UPDATE
[DELETE] '/:id' - DELETE


_ /categorias/:id/estoque _
[GET] '/' - INDEX
[PATCH] '/:id' - UPDATE
[DELETE] '/:id' - DELETE
```

### Modulos:
- **EXPRESS**  Para inicializar o servidor como demais funções
- **SEQUELIZE**  ORM de conexão entre banco de dados
- **MYSQL2**  Para utilizar o MySql
- **NODEMON**  Realizar alterações e correções apenas salvando os arquivos [DEV]
- **POSTGRES**  Pacote de modulos para Postgres
- **PG**  Pacote faltante de modulos Postgres para solucionar alguns erros que encontrei no percurso
- **NODE-CRON**  Modulo utilizado para rodar alguma aplicação em um horário especifico
- **DOT-ENV**  Usado para facilitar a recriação do projeto em ambiente de desenvolvimento e testes

### Dificuldades

- Nunca havia mechido com banco de dados PostgreSQL
- Primeira vez integrando backup entre banco de dados
- Erros com portas e modulos faltantes do PostgreSQL
- Sem comandos nativos para fazer a transferencia de arquivos, foram 4 dias apenas na etapa de integração, devido a erros, discordancias de formato de data e hora

### Complemento 

- Após algum tempo estudando Node, percebo que existe ainda um leque muito grande inesplorado para aprender
- Foi de grande valor de estudo este projeto em questão, desenvolvi habilidades e proficiencias que antes não tinha
- Mesmo com dificuldades em algumas partes do projeto a questão de forçar os erros a retornarem um resultado tornaram o projeto algo sólido, que dificilmente poderia ser esquecido, um conhecimento maior que qualquer estudo até hoje.

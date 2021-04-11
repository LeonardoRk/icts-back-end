# icts-back-end
Projeto back-end de servidor api em nodejs

foi utilizado o sequelizer para criar as tabelas de banco.

Para instalar as dependências
> npm install

 
 
Para configurar o banco de dados, no arquivo api/config/config.json em development colocar as credenciais do banco.
  
    
Foi utilizado o docker mysql no meu caso
> docker run --name cont-mysql2 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=icts -p 33306:3306  -d mysql:latest


Para criar as tabelas no banco, após configurar host, user e password rodar no terminal
> npx sequelize-cli db:migrate

  
  
Para iniciar o projeto
> npm run start

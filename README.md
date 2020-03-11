# LinkAPI_Back-End

Projeto focado em construir API's usando Node.Js, fazendo consulta, inserção e integração entre os sistemas Pipedrive e Bling.

## Tecnologias utilizadas:

- Express
  > É um framework para Node. js.
  
- Axios
  > Consultas em API's externas.
  
- dotenv
  > Gerenciar parametros em geral.
  
- xmlbuilder
  > Auxiliar na geração do xml encoded.
  
- Sequelize
  > ORM (Object-Relational Mapper) para Node.
  
- Banco NoSQL MongoDB.
  > Banco não relacional MongoDB Atlas.
  
- mongoose
  >  Biblioteca do Nodejs para modelar os dados do MongoDB.
  
- nodemon
  > Em modo Dev, é um file watcher que roda internamente o próprio comando node.
  
- sucrase
  > É uma alternativa ao Babel que permite um desenvolvimento muito rápido.


## Comandos Projeto

- Rodando servidor yarn dev
  > Para debug rodar yarn dev:debug e iniciar o debug em seguida.

## Ajustes
- Ajustar o arquivo .env com os dados da url e do token dos sistemas Pipedrive e Bling
  > **Nota:** Caso o mesmo não seja configurado, as informações terão que ser inseridas manualmente nos Controllers

## API's
Foram criadas 5 rotas na aplicação, que são:

  - **get('/deals') :** retorna todos os acordos do Pipedrive com status = won (ganho).
  - **get(/products/:id) :** retorna todos os acordo nas quais o produto informado está anexado.
  - **post('/order/:id') :** envia um xml para o Bling com o acordo escolhido, gerando assim um pedido de venda.
  - **post('/bling') :** envia os pedidos do Bling para o banco de dados MongoDB.
  - **get('/bling') :** retorna os pedidos gravados no MongoDB com as informações **valor** e **data**.
 

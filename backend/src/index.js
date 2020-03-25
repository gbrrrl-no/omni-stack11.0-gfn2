const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
 * Método HTTP:
 * 
 * GET    : Buscar/listar uma informação do Backend
 * POST   : Criar uma informação e botar no Backend
 * PUT    : Quando queremos alterar uma informação no Backend
 * DELETE : Deletar uma informação no Backend
 * 
 */

 /**
  * 
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após um simbolo de interrogação "?" (Filtros, Paginação)
  * Route Params: Parâmetros usados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */



app.listen(3333);
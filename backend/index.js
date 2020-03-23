const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: 'Semana Omni-Stack 11.0',
    aluno: 'Gabriel Nóbrega',
    idade: 20
  });
})

app.listen(3333);
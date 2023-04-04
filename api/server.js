import express from 'express';
import db from './src/db.js';
import routes from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

db.sync()
  .then(() => {
    console.log('O Banco de dados foi criado!');
  })
  .catch((error) => {
    console.log('Houve um erro ao criar o banco de dados', error);
  });

app.use(express.json());
app.use('/', routes);


app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import c from 'chalk';
import testRouter from '../routes/test.js';
import path from 'node:path'
import db from '../models/index.js';

const { log } = console;
const app = express();
db.sequelize.sync();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', './views');

log(c.blue(process.env.PORT));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve() + '/build/index.html');
});

testRouter.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});

app.listen(PORT, () => {
  log(c.yellow(`Server listening on ${PORT}`));
})
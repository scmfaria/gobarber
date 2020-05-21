import 'dotenv/config';

import express from 'express'; // add dependencia SUCRASE para permitir o javascript node importar lib dessa forma com o import
import 'express-async-errors';
import routes from './routes';
import path from 'path';
import Youch from 'youch';

// sentry - usado para tratamento de erros
import * as Sentry from '@sentry/node'; 
import sentryConfig from './config/sentry';

import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(
      '/files', 
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    // express.static - lib que serve para enviar arquivos estaticos, como exemplo acesso em um link de imagem, etc
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    // o express entende que quando um middleware recebe uma funcao de 4 parametros
    // quer dizer que é um middleware de tratamento de erro
    // ou seja, os erros que acontecerem dentro da aplicacao vao cair nesse middleware aqui
    this.server.use(async (err, req, res, next) => {
      if(process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

module.exports = new App().server;

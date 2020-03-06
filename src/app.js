import express from 'express'; // add dependencia SUCRASE para permitir o javascript node importar lib dessa forma com o import
import routes from './routes';
import path from 'path';

import './database';

class App {
  constructor() {
    this.server = express();
    
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files', 
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    // express.static - lib que serve para enviar arquivos estaticos, como exemplo acesso em um link de imagem, etc
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;

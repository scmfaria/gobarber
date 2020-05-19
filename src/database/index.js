// esse arquivo que vai realizar a conexao com o banco de dados e carregar todos os models da nossa aplicação

import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mondodb://localhost:27017/gobarber',
      { userNewUrlParser: true, useFindAndModify: true }
    );
  }
}

export default new Database();

// npm install factory-girl faker -D
// essas dependencias sao para pegar informacoes de forma aleatoria no teste
// cria registros aleatorios para os testes com base no Model

import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../src/app/models/User';

factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

export default factory;
import { Router } from 'express'; // serve para separar a parte de roteamento em outro arquivo

import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// aqui estou dizendo que todas as rotas que vem depois desse middleware vai usar ele!
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;

import { Router } from 'express'; // serve para separar a parte de roteamento em outro arquivo
import multer from 'multer';
import multerConfig from './config/multer';

import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// aqui estou dizendo que todas as rotas que vem depois desse middleware vai usar ele!
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

export default routes;

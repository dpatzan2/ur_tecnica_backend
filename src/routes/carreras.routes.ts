import { Router } from 'express';
import * as carreras from '../controllers/carreras.controller.js';

export const carrerasRouter = Router();

carrerasRouter.get('/', carreras.list);
carrerasRouter.post('/', carreras.create);

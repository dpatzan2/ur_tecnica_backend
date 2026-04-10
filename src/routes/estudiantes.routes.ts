import { Router } from 'express';
import * as estudiantes from '../controllers/estudiantes.controller.js';

export const estudiantesRouter = Router();

estudiantesRouter.get('/', estudiantes.list);
estudiantesRouter.post('/', estudiantes.create);
estudiantesRouter.put('/:id', estudiantes.update);
estudiantesRouter.delete('/:id', estudiantes.remove);

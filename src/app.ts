import cors from 'cors';
import express, { type ErrorRequestHandler } from 'express';
import { carrerasRouter } from './routes/carreras.routes.js';
import { estudiantesRouter } from './routes/estudiantes.routes.js';

export function createApp() {
  const app = express();

  const origin = process.env.CORS_ORIGIN;
  app.use(
    cors(
      origin
        ? { origin }
        : {
            origin: true,
          },
    ),
  );
  app.use(express.json());

  app.use('/carreras', carrerasRouter);
  app.use('/estudiantes', estudiantesRouter);

  const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: 'Error interno del servidor.' });
  };
  app.use(errorHandler);

  return app;
}

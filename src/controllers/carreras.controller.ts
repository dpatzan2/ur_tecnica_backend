import type { Request, Response } from 'express';
import { Carrera } from '../models/index.js';

export async function list(_req: Request, res: Response): Promise<void> {
  const rows = await Carrera.findAll({ order: [['id', 'ASC']] });
  res.json(rows);
}

export async function create(req: Request, res: Response): Promise<void> {
  const nombre = req.body?.nombre;
  if (typeof nombre !== 'string' || nombre.trim() === '') {
    res.status(400).json({ message: 'El campo nombre es obligatorio.' });
    return;
  }
  const row = await Carrera.create({ nombre: nombre.trim() });
  res.status(201).json(row);
}

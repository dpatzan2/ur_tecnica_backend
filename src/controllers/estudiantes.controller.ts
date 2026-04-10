import type { Request, Response } from 'express';
import { Carrera, Estudiante } from '../models/index.js';

function parseBody(req: Request): {
  ok: true;
  data: {
    nombre: string;
    apellido: string;
    email: string;
    fecha_nacimiento: string | null;
    carrera_id: number;
  };
} | { ok: false; message: string } {
  const { nombre, apellido, email, fecha_nacimiento, carrera_id } = req.body ?? {};

  if (typeof nombre !== 'string' || nombre.trim() === '') {
    return { ok: false, message: 'El campo nombre es obligatorio.' };
  }
  if (typeof apellido !== 'string' || apellido.trim() === '') {
    return { ok: false, message: 'El campo apellido es obligatorio.' };
  }
  if (typeof email !== 'string' || email.trim() === '') {
    return { ok: false, message: 'El campo email es obligatorio.' };
  }
  if (carrera_id === undefined || carrera_id === null || carrera_id === '') {
    return { ok: false, message: 'El campo carrera_id es obligatorio.' };
  }
  const cid = Number(carrera_id);
  if (Number.isNaN(cid)) {
    return { ok: false, message: 'carrera_id debe ser un número.' };
  }

  let fecha: string | null = null;
  if (fecha_nacimiento !== undefined && fecha_nacimiento !== null && fecha_nacimiento !== '') {
    if (typeof fecha_nacimiento !== 'string') {
      return { ok: false, message: 'fecha_nacimiento debe ser una fecha (YYYY-MM-DD) o vacío.' };
    }
    fecha = fecha_nacimiento.trim();
  }

  return {
    ok: true,
    data: {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      email: email.trim(),
      fecha_nacimiento: fecha,
      carrera_id: cid,
    },
  };
}

const includeCarrera = {
  model: Carrera,
  as: 'carrera' as const,
  attributes: ['id', 'nombre'],
};

export async function list(_req: Request, res: Response): Promise<void> {
  const rows = await Estudiante.findAll({
    include: [includeCarrera],
    order: [['id', 'ASC']],
  });
  res.json(rows);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = parseBody(req);
  if (!parsed.ok) {
    res.status(400).json({ message: parsed.message });
    return;
  }

  const carrera = await Carrera.findByPk(parsed.data.carrera_id);
  if (!carrera) {
    res.status(400).json({ message: 'La carrera indicada no existe.' });
    return;
  }

  const row = await Estudiante.create({
    nombre: parsed.data.nombre,
    apellido: parsed.data.apellido,
    email: parsed.data.email,
    fecha_nacimiento: parsed.data.fecha_nacimiento,
    carrera_id: parsed.data.carrera_id,
  });

  const withCarrera = await Estudiante.findByPk(row.id, { include: [includeCarrera] });
  res.status(201).json(withCarrera);
}

export async function update(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ message: 'ID inválido.' });
    return;
  }

  const parsed = parseBody(req);
  if (!parsed.ok) {
    res.status(400).json({ message: parsed.message });
    return;
  }

  const carrera = await Carrera.findByPk(parsed.data.carrera_id);
  if (!carrera) {
    res.status(400).json({ message: 'La carrera indicada no existe.' });
    return;
  }

  const row = await Estudiante.findByPk(id);
  if (!row) {
    res.status(404).json({ message: 'Estudiante no encontrado.' });
    return;
  }

  await row.update({
    nombre: parsed.data.nombre,
    apellido: parsed.data.apellido,
    email: parsed.data.email,
    fecha_nacimiento: parsed.data.fecha_nacimiento,
    carrera_id: parsed.data.carrera_id,
  });

  const updated = await Estudiante.findByPk(id, { include: [includeCarrera] });
  res.json(updated);
}

export async function remove(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ message: 'ID inválido.' });
    return;
  }

  const row = await Estudiante.findByPk(id);
  if (!row) {
    res.status(404).json({ message: 'Estudiante no encontrado.' });
    return;
  }

  await row.destroy();
  res.status(204).send();
}

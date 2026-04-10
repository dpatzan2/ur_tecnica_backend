USE ur_tecnica;

INSERT INTO carreras (nombre) VALUES
  ('Ingeniería en Sistemas'),
  ('Medicina'),
  ('Derecho'),
  ('Psicología');

INSERT INTO estudiantes (nombre, apellido, email, fecha_nacimiento, carrera_id) VALUES
  ('Ana', 'Ixcol', 'aixcol@gmail.com', '2001-05-12', 1),
  ('Carlos', 'Martínez', 'cmartinez@gmail.com', '1999-11-03', 1),
  ('María', 'García', 'mgarcia@gmail.com', '2000-02-28', 2),
  ('Diego', 'Patzan', 'dpatzan@gmail.com', '1998-07-15', 3),
  ('Fernando', 'Marroquin', 'fmarroquin@gmail.com', NULL, 4);
import { sequelize } from '../db/connection.js';
import { Carrera, initCarrera } from './Carrera.js';
import { Estudiante, initEstudiante } from './Estudiante.js';

initCarrera(sequelize);
initEstudiante(sequelize);

Carrera.hasMany(Estudiante, { foreignKey: 'carrera_id', as: 'estudiantes' });
Estudiante.belongsTo(Carrera, { foreignKey: 'carrera_id', as: 'carrera' });

export { Carrera, Estudiante, sequelize };

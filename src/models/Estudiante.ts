import type { Sequelize } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export class Estudiante extends Model {
  declare id: number;
  declare nombre: string;
  declare apellido: string;
  declare email: string;
  declare fecha_nacimiento: Date | null;
  declare carrera_id: number;
}

export function initEstudiante(sequelize: Sequelize): typeof Estudiante {
  Estudiante.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      carrera_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'estudiantes',
      timestamps: false,
    },
  );
  return Estudiante;
}

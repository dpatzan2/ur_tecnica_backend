import type { Sequelize } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export class Carrera extends Model {
  declare id: number;
  declare nombre: string;
}

export function initCarrera(sequelize: Sequelize): typeof Carrera {
  Carrera.init(
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
    },
    {
      sequelize,
      tableName: 'carreras',
      timestamps: false,
    },
  );
  return Carrera;
}

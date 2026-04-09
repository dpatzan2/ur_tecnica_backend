'use strict';

/** @param {import('sequelize').QueryInterface} queryInterface */
/** @param {import('sequelize').Sequelize} Sequelize */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'estudiantes',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        apellido: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        fecha_nacimiento: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        carrera_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'carreras', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        },
      },
      { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('estudiantes');
  },
};

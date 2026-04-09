'use strict';

/** @param {import('sequelize').QueryInterface} queryInterface */
/** @param {import('sequelize').Sequelize} Sequelize */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'carreras',
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
      },
      { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('carreras');
  },
};

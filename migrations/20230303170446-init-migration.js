'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      image: Sequelize.DataTypes.STRING,
      title: Sequelize.DataTypes.STRING,
      price: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      oldPrice: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      credit: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      advantages: {
        type: Sequelize.DataTypes.JSON,
        allowNull: true,
        defaultValue: null
      },
      disAdvantages: {
        type: Sequelize.DataTypes.JSON,
        allowNull: true,
        defaultValue: null
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })

    await queryInterface.createTable('reviews', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      courseId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      rating: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropAllTables()
  }
};

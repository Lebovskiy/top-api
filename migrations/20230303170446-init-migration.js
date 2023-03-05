'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      }, { transaction })

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
      }, { transaction })

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
        userId: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          defaultValue: null,
          references: {
            model: 'users',
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
      }, { transaction })

      await transaction.commit()
    }
    catch (err){
      await transaction.rollback()
      throw new Error(err)
    }
  },

  async down (queryInterface) {
    await queryInterface.dropAllTables()
  }
};

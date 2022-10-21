'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ranks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Ranks.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: "cascade",
        onUpdate: "cascade"
      });
      models.Ranks.belongsTo(models.Categories, {
        foreignKey: 'categoryId',
        onDelete: "cascade",
        onUpdate: "cascade"
      });
    }
  }
  Ranks.init({
    rankId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.STRING
    },
    categoryId: {
      type: Sequelize.INTEGER
    },
    score: {
      type: Sequelize.INTEGER
    },
    rank: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Ranks',
  });
  return Ranks;
};
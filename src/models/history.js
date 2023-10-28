'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  MedicalHistory.init(
    {
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      doctorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      appointmentDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      diagnosis: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      prescription: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
    sequelize,
    modelName: 'MedicalHistory',
  });
  return MedicalHistory;
};
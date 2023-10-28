'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Schedule.init(
    {
      doctorId: {
        type: DataTypes.INTEGER
      },
      clinicId: {
        type: DataTypes.INTEGER
      },
      timeSlot: {
        type: DataTypes.ENUM(
            '8:00 - 9:00',
            '9:00 - 10:00',
            '10:00 - 11:00',
            '11:00 - 12:00',
            '12:00 - 13:00',
            '13:00 - 14:00',
            '15:00 - 16:00',
            '16:00 - 17:00'
          ),
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
      },
      appointmentDate: {
        type: DataTypes.DATEONLY
      },
      status: {
        type: DataTypes.ENUM('available', 'booked', 'completed', 'canceled'),
        defaultValue: 'available',
      },
    },
    {
    sequelize,
    modele: 'Schedule',
  });
  return Schedule;
};
// 03_postgres_sequelize/user.model.js
// Sequelize User model aligned with the chapter example.

const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;

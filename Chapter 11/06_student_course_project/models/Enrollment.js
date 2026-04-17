// 06_student_course_project/models/Enrollment.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Student = require('./Student');
const Course = require('./Course');

const Enrollment = sequelize.define('Enrollment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  semester: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  tableName: 'enrollments'
});

Student.belongsToMany(Course, { through: Enrollment, foreignKey: 'studentId' });
Course.belongsToMany(Student, { through: Enrollment, foreignKey: 'courseId' });

module.exports = Enrollment;

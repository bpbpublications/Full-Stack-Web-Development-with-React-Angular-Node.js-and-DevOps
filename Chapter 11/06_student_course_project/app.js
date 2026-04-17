// 06_student_course_project/app.js

require('dotenv').config();
const express = require('express');
const { sequelize, initDatabase } = require('./config/database');

// Import models so associations are registered
require('./models/Student');
require('./models/Course');
require('./models/Enrollment');

const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);

app.get('/', (req, res) => {
  res.send('Student Course Registration API');
});

async function start() {
  await initDatabase();
  await sequelize.sync({ alter: true });
  app.listen(PORT, () => {
    console.log(`Student Course API running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start app:', err);
});

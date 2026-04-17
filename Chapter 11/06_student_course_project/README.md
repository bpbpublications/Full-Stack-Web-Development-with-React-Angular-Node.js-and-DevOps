06_student_course_project – Student Course Registration API

Capstone project for Chapter 11. This is a simple but realistic backend using
Express + Sequelize + PostgreSQL.

Main features (from the chapter's project description):
- Manage students and courses
- Enroll students into courses
- Fetch courses for a student and students for a course
- Use transactions when creating enrollments (optional extension)

Files:
- config/database.js     – Sequelize instance
- models/Student.js
- models/Course.js
- models/Enrollment.js   – junction table model
- routes/students.js
- routes/courses.js
- routes/enrollments.js
- app.js                 – main Express app

Install dependencies:
  npm install express sequelize pg pg-hstore dotenv

Run:
  1. Create a PostgreSQL database: student_course_db
  2. Copy .env.example to .env and update credentials
  3. node app.js

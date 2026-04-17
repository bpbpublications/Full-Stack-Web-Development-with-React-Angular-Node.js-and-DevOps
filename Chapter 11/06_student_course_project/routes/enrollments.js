// 06_student_course_project/routes/enrollments.js

const express = require('express');
const Enrollment = require('../models/Enrollment');
const Student = require('../models/Student');
const Course = require('../models/Course');

const router = express.Router();

// POST /enrollments – enroll a student in a course
router.post('/', async (req, res) => {
  try {
    const { studentId, courseId, semester } = req.body;
    if (!studentId || !courseId || !semester) {
      return res.status(400).json({ error: 'studentId, courseId, and semester are required' });
    }
    const enrollment = await Enrollment.create({ studentId, courseId, semester });
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /students/:id/courses – courses for a student
router.get('/students/:id/courses', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: Course
    });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student.Courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /courses/:id/students – students in a course
router.get('/courses/:id/students', async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id, {
      include: Student
    });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course.Students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

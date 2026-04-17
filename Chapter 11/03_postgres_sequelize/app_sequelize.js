// 03_postgres_sequelize/app_sequelize.js
// Express API layered on Sequelize User model (CRUD endpoints).

require('dotenv').config();
const express = require('express');
const { sequelize, connectDB } = require('./db');
const User = require('./user.model');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function init() {
  await connectDB();
  await sequelize.sync({ alter: true });
}

init();

// POST /users – create
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /users – list
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /users/:id – single
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /users/:id – update
app.put('/users/:id', async (req, res) => {
  try {
    const [count] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (!count) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updated = await User.findByPk(req.params.id);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /users/:id – delete
app.delete('/users/:id', async (req, res) => {
  try {
    const count = await User.destroy({
      where: { id: req.params.id }
    });
    if (!count) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sequelize API listening on port ${PORT}`);
});

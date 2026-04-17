// 05_transactions/transaction_example.js
// Sequelize transaction, adapted from the chapter's code.

require('dotenv').config();
const { sequelize, connectDB } = require('../03_postgres_sequelize/db');
const { User, Task } = require('./models');

async function main() {
  await connectDB();
  await sequelize.sync({ alter: true });

  const result = await sequelize.transaction(async (t) => {
    const user = await User.create(
      { username: 'bob' },
      { transaction: t }
    );

    await Task.create(
      { title: 'Initial Task', userId: user.id },
      { transaction: t }
    );

    return user;
  });

  console.log('Transaction created user with id =', result.id);
}

main().catch((err) => {
  console.error('Transaction failed:', err);
});

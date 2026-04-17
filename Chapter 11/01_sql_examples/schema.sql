-- 01_sql_examples/schema.sql
-- User and Orders tables similar to the examples in the chapter.

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  total NUMERIC(10, 2) NOT NULL,
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);

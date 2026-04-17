-- 01_sql_examples/queries.sql
-- Basic SQL queries aligned with the chapter narrative.

-- Insert a user
INSERT INTO users (name, email)
VALUES ('Rupesh', 'rupesh@example.com');

-- Insert an order
INSERT INTO orders (user_id, total, status)
VALUES (1, 1299.50, 'PAID');

-- Fetch all users
SELECT id, name, email, created_at
FROM users;

-- Fetch all orders with user name (JOIN)
SELECT
  o.id,
  o.total,
  o.status,
  u.name AS user_name
FROM orders AS o
JOIN users AS u
  ON o.user_id = u.id;

-- Update an order status
UPDATE orders
SET status = 'SHIPPED'
WHERE id = 1;

-- Delete an order
DELETE FROM orders
WHERE id = 1;

-- 04_indexing_and_queries/postgres_indexes.sql
-- Basic PostgreSQL index examples corresponding to the chapter text.

-- Single-column B-tree index
CREATE INDEX idx_users_email
ON users (email);

-- Compound index on status and created_at
CREATE INDEX idx_orders_status_created_at
ON orders (status, created_at);

-- Example query that can use the compound index
SELECT id, total, status, created_at
FROM orders
WHERE status = 'PAID'
ORDER BY created_at DESC;

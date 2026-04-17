// 04_indexing_and_queries/mongo_indexes.js
// MongoDB index creation commands (run in the Mongo shell or driver).

// Single-field index on email
db.users.createIndex({ email: 1 }); // ascending

// Compound index on status and createdAt
db.users.createIndex({ status: 1, createdAt: -1 }); // compound

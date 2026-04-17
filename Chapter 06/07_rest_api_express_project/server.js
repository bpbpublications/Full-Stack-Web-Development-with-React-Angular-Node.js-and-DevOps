/**
 * REST API mini-project (Express)
 * - CRUD endpoints: /api/products
 * - Simple auth-like demo: /api/login (sets a cookie)
 * - Uses middleware: JSON parsing, request logging, error handling
 *
 * Run:
 *   npm run start:rest
 */
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const { notFound } = require("./src/middleware/notFound");
const { errorHandler } = require("./src/middleware/errorHandler");
const productsRouter = require("./src/routes/products");
const authRouter = require("./src/routes/auth");
const healthRouter = require("./src/routes/health");

const app = express();
const PORT = 3007;

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`REST API at http://localhost:${PORT}`));

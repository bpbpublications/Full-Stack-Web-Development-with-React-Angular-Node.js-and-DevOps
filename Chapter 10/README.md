Chapter 10 – Backend Development with Express.js (Code Bundle)

This bundle collects all key code examples from Chapter 10 in runnable form.
Each folder corresponds to a major section of the chapter. A final file also
includes all raw extracted snippets from the book so that no example is lost.

Folder overview:

01_node_basics/         – Node.js async I/O and basic HTTP server
02_express_basics/      – Minimal Express app, routes, query & route params
03_router_middleware/   – Express Router, logging middleware, custom middleware
04_rest_api_ecommerce/  – Small e-commerce REST API with /products endpoints
05_error_handling/      – Error-handling middleware and 404 handler
06_validation_security/ – express-validator example, security middleware sketch
07_auth_jwt/            – JWT login, auth middleware, role-based authorization
08_project_structure/   – app.js + server.js modular structure example
99_raw_snippets/        – chapter10_all_code_snippets_raw.txt (verbatim-ish text
                          extracted from the PDF so every code line appears)

Usage:

- These files are plain Node.js/Express examples. For each mini project,
  install dependencies as indicated in comments (e.g., express, express-validator,
  jsonwebtoken, bcrypt, morgan, cors, dotenv).
- Run using `node filename.js` from the project folder.

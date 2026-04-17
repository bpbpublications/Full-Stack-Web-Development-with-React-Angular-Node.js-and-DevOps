/**
 * Static web server for the CORS demo client.
 * Run:
 *   npm run start:cors:web
 */
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3006;

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => console.log(`CORS web client at http://localhost:${PORT}`));

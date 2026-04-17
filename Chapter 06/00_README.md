# Chapter 6 — Web Technology Fundamentals (Code Bundle)

This bundle matches **Chapter 6: Web Technology Fundamentals** in the book, focusing on:
HTTP basics, request–response flow, headers, cookies/sessions, CORS, REST API design,
and a hands-on **Node.js + Express** web server project. fileciteturn33file2L15-L42

## Prerequisites
- Node.js (recommended: Node 18+)
- npm (comes with Node)

## Setup
```bash
cd chapter_06_code
npm install
```

## How to run examples
Each folder is independent. Start the server, then use the included curl scripts or open the HTML files.

### Quick start
```bash
node 01_http_basics/server-http.js
```
Then visit:
- http://localhost:3000/
- http://localhost:3000/hello?name=Rupesh

## Ports used
- 3000: Basic HTTP server (Node `http`)
- 3001: Request–response logging server (Express)
- 3443: HTTPS demo server (Node `https`)
- 3002: Cookies demo (Express + cookie-parser)
- 3003: Sessions demo (Express + express-session)
- 3004: Headers demo (Express)
- 3005: CORS API server (Express + cors)
- 3006: CORS web client static server (Express)
- 3007: REST API mini-project (Express)

## Notes
- The HTTPS demo needs a local certificate. Follow `03_https_demo/generate-cert.md`.
- The REST mini-project uses an **in-memory** data store (no DB) to keep things simple.

Happy building!

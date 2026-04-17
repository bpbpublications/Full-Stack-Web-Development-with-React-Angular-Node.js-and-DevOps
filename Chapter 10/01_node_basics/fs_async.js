// 01_node_basics/fs_async.js
// Asynchronous (non-blocking) file read example.
// Mirrors the explanation in Chapter 10 about Node's event-driven I/O.

const fs = require('fs');

console.log('Start reading file...');

fs.readFile('data.txt', 'utf8', (err, content) => {
  if (err) {
    throw err;
  }
  console.log('File contents:', content);
});

console.log('This runs before file is read');

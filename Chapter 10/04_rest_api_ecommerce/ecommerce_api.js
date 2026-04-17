// 04_rest_api_ecommerce/ecommerce_api.js
// RESTful /products API similar to the e-commerce example in Chapter 10.
// Demonstrates JSON parsing, GET collection, and POST creation.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// In-memory "database"
let products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 }
];

app.use(express.json());

// GET /products returns all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products creates a new product
app.post('/products', (req, res) => {
  const newProduct = req.body;

  if (!newProduct || !newProduct.name || typeof newProduct.price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  const nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const productToInsert = { id: nextId, ...newProduct };
  products.push(productToInsert);

  // 201 = Created
  res.status(201).json(productToInsert);
});

// GET /products/:id - fetch single product
app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Ecommerce API listening on port ${PORT}`);
});

const router = require("express").Router();
const store = require("../data/products");

// GET /api/products
router.get("/", (req, res) => {
  const tag = req.query.tag;
  const items = store.list();
  const filtered = tag ? items.filter(p => (p.tags || []).includes(tag)) : items;
  res.json(filtered);
});

// GET /api/products/:id
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const p = store.getById(id);
  if (!p) return next(Object.assign(new Error("Product not found"), { statusCode: 404 }));
  res.json(p);
});

// POST /api/products
router.post("/", (req, res, next) => {
  const { name, price, tags } = req.body || {};
  if (!name || typeof name !== "string") {
    return next(Object.assign(new Error("name is required (string)"), { statusCode: 400 }));
  }
  const numericPrice = Number(price);
  if (Number.isNaN(numericPrice) || numericPrice < 0) {
    return next(Object.assign(new Error("price must be a non-negative number"), { statusCode: 400 }));
  }
  const created = store.create({ name, price: numericPrice, tags: Array.isArray(tags) ? tags : [] });
  res.status(201).json(created);
});

// PUT /api/products/:id (replace/update)
router.put("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const patch = req.body || {};
  const updated = store.update(id, patch);
  if (!updated) return next(Object.assign(new Error("Product not found"), { statusCode: 404 }));
  res.json(updated);
});

// DELETE /api/products/:id
router.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const ok = store.remove(id);
  if (!ok) return next(Object.assign(new Error("Product not found"), { statusCode: 404 }));
  res.status(204).end();
});

module.exports = router;

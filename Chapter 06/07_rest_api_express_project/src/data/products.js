// In-memory data store (for learning)
let nextId = 4;

const products = [
  { id: 1, name: "Notebook", price: 49.0, tags: ["stationery"] },
  { id: 2, name: "Mouse", price: 599.0, tags: ["electronics"] },
  { id: 3, name: "Coffee Mug", price: 199.0, tags: ["kitchen"] }
];

function list() { return products; }

function getById(id) { return products.find(p => p.id === id); }

function create(input) {
  const p = { id: nextId++, ...input };
  products.push(p);
  return p;
}

function update(id, patch) {
  const p = getById(id);
  if (!p) return null;
  Object.assign(p, patch);
  return p;
}

function remove(id) {
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return false;
  products.splice(idx, 1);
  return true;
}

module.exports = { list, getById, create, update, remove };

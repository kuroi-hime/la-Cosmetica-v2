const BASE_URL = "http://localhost:8000/api";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/produits`);
  if (!res.ok) throw new Error("Error fetching products");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
}

export async function getTopProducts() {
  const res = await fetch(`${BASE_URL}/statistiques/most-ordered`);
  return res.json();
}

export async function getVentes() {
  const res = await fetch(`${BASE_URL}`);
  return res.json();
}


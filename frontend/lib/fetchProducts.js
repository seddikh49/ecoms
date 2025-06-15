export async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/product/list", {
    cache: "no-store"
  });
  const data = await res.json();
  return data.products || [];
}
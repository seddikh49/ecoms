export async function fetchProducts() {
  const res = await fetch("https://backend.kamsed.com/api/product/list", {
    cache: "no-store"
  });
  const data = await res.json();
  return data.products || [];
}
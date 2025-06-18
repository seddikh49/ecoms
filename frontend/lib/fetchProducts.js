export async function fetchProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ بدون await


  const res = await fetch(`${apiUrl}/api/product/list`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.products || [];
}
export async function fetchProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ بدون await


  const res = await fetch(`${apiUrl}/api/product/list`, {
    cache: "no-store",
    headers: {
    Origin: 'http://localhost:3002', // تحديد Origin يدويًا
  },
  });

  const data = await res.json();
  console.log(data)
  return data.products || [];
}

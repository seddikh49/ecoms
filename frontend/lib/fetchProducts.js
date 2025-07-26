export async function fetchProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/product/list`, {
      cache: "no-store",
      headers: { 'X-API-Key': process.env.SERVER_API_KEY }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data.products || [];
  
  } catch (error) {
    console.error("حدث خطأ أثناء جلب المنتجات:", error);
    return [];
  }
}
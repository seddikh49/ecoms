import { Youtube,Tiktok, Facebook, Instagram, } from "lucide-react";

 export const navLinks = ['home', 'collection', 'about', 'contact'];

 export const socialLinks = [
    {
        title : "Youtube",
        href : "https://www.youtube.com",
        icon : <Youtube className="w-5 h-5 "/>
    },
     {
        title : "Facebook",
        href : "https://www.facebook.com",
        icon : <Facebook className="w-5 h-5 "/>
    },
     {
        title : "Instagram",
        href : "https://www.instagram.com",
        icon : <Instagram className="w-5 h-5 "/>
    },
  
 ]



 export async function fetchCategories() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ بدون await


  const res = await fetch(`${apiUrl}/api/category/list`, {
    cache: "no-store",
    headers: { 'X-API-Key': process.env.SERVER_API_KEY }
  });

  const data = await res.json();

  return data.categories || [];
}



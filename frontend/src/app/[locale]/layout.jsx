
import { ShopProvider } from './context/shopContext';
import { Cairo } from 'next/font/google';
import { fetchProducts } from '../../../lib/fetchProducts';
import { ToastContainer } from 'react-toastify';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import axios from 'axios';
import Footer from "./components/Footer"
import Script from 'next/script'; // مكون Script الصحيح

const inter = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-cairo',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const products = await fetchProducts();

  return (
    <html lang={locale} className=''>
      <head>
        {/* يمكن إضافة Favicon أو أكواد ثابتة هنا */}
      </head>
      <body className={inter.className}>
        
        {/* Facebook Pixel Code بطريقة صحيحة باستخدام next/script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1759769671274615');
              fbq('track', 'PageView');
            `,
          }}
        />


        
        
        {/* Image Pixel لغير الجافاسكربت */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1759769671274615&ev=PageView&noscript=1"
          />
        </noscript>

        {/* باقي التطبيق */}
        <ToastContainer />
        <div className=''>
          <ShopProvider initialProducts={products}>
            <NextIntlClientProvider>
              <Header />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </ShopProvider>
        </div>
      </body>
    </html>
  );
}
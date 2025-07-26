
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../../@/components/ui/button';
import Container from './components/Container'
import ProductGrid from "./components/ProductGrid"

import HomeBanner from './components/HomeBanner'


export const metadata = {
  title: "Kamsed Store - متجر كامسد",
  description: "متجر كامسد وجهتك المثالية للتسوق الإلكتروني، حيث نوفر منتجات مختارة بعناية وجودة عالية، مع تجربة تسوق سهلة وآمنة وخدمة عملاء متميزة.",
};


export default async function Home() {


  return (

    <div className='' >
      <Container className='py-10'>
        <HomeBanner />
        <ProductGrid slicer={4} />
      </Container>
    </div>
  );
}



import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../../@/components/ui/button';
import Container from './components/Container'
import ProductGrid from "./components/ProductGrid"

import HomeBanner from './components/HomeBanner'


export const metadata = {
  title: "kamsed-store - متجر كامسد"
};




export default async function Home() {


  return (

    <div className='' >
      <Container className='py-10'>
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}


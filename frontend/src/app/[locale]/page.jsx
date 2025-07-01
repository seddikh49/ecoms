
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import HomeProducts from './components/HomeProducts';
import { Button } from '../../../@/components/ui/button';
import Container from './components/Container'

export const metadata = {
  title: "kamsed-store - متجر كامسد"
};




export default async function Home() {


  return (

    <div className='' >
          <Container>
    
         <div>Home page</div>
         <div>RIGHT</div>
       </Container>
      {/* <Hero /> */}
     {/* <HomeProducts/> */}
    </div>
  );
}


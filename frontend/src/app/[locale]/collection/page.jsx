

import Container from '../components/Container'


import axios from "axios";
import HomeBanner from '../components/HomeBanner';
import ProductGrid from '../components/ProductGrid';

export const metadata = {
    title: 'المنتجات | موقعنا',
};

export default async function Collection() {



    return (
        <>
            <Container className='py-10 '>
               
                <ProductGrid />
            </Container>
        </>
    )
}


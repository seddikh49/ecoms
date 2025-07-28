
import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import { fetchCategories, quickLinksData } from '../../../../constants/index'
import FooterBottom from './FooterBottom'




const Footer = async () => {



  const categories = await fetchCategories();


  return (
    <div className='bg-white border-t' >

      <Container>
        <FooterTop />
        <FooterBottom categories={categories}/>
      </Container>

    </div>
  )
}

export default Footer



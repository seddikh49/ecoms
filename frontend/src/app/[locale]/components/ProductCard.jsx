import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PriceView from './PriceView'
import BuyButton from './BuyButton'
import { motion } from 'framer-motion'
const ProductCard = ({ product }) => {

  return (
    <motion.div
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    transition={{duration:0.5}}
    className='rounded-lg text-sm overflow-hidden group '>
      <div className=' overflow-hidden'>
        {product?.image && (
          <Link href={`collection/${product.name}`}>
            <Image
              src={product.image[0]}
              width={500}
              height={500}
              alt='productImage'
              priority
              className='w-full  object-contain overflow-hidden group-hover:scale-105 hoverEffect '
              />
          </Link>
        )}
      </div>
      <div className='py-3 px-2  flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-t-none '>
        <h2 className='font-semibold text-lg line-clamp-1 text-black'>{product.name} </h2>
        <p className='line-clamp-1'>{product.description}</p>
        <PriceView price={product.price}/>
        <BuyButton productName={product.name}/>
      </div>

    </motion.div>
  )
}

export default ProductCard

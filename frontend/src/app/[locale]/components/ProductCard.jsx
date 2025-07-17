import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {

  return (
    <div>
      <div className=''>
        {product?.image && (
          <Link href={`collection/${product.id}`}>
            <Image
              src={product.image[0]}
              width={400}
              height={400}
              alt='product'
              priority
              className='w-full h-72 object-contain'
              />
            

          </Link>
        )}

      </div>

    </div>
  )
}

export default ProductCard

import React from 'react'
import { Button } from '../../../../@/components/ui/button'
import Link from 'next/link'

const BuyButton = ({productName}) => {

  return (
    <Link href={`collection/${productName}`}>
      <Button className={"w-full font-semibold tracking-wide bg-transparent  text-black  shadow-none hoverEffect border border-black/30 hover:text-white"}>
       شراء المنتج
      </Button>
    </Link>
  )
}

export default BuyButton

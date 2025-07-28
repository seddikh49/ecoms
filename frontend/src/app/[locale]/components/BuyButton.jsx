
import { useTranslations } from 'next-intl';
import React from 'react'
import { Button } from '../../../../@/components/ui/button'
import Link from 'next/link'

const BuyButton = ({ productName }) => {
  const t = useTranslations()
  return (
    <Link href={`collection/${productName}`}>
      <Button className={"w-full font-semibold tracking-wide bg-transparent  text-black  shadow-none hoverEffect border border-black/30 hover:text-white"}>
        {t("buyBtn")}
      </Button>
    </Link>
  )
}

export default BuyButton

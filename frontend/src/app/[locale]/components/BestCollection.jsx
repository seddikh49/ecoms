import React from 'react'
import { useTranslations } from 'next-intl';
const BestCollection = () => {
      const t = useTranslations()
  
  return (
    <div >
      {t('bestCollection')}
    </div>
  )
}

export default BestCollection

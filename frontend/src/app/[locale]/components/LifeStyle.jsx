import React from 'react'
import { useTranslations } from 'next-intl';


const LifeStyle = () => {
    const t = useTranslations()
    return (
        <div className='text-center xl:text-xl lg:text-lg md:text-[19px] sm:text-[17px] max-w-96 xm:text-[12px]'>{t('lifeStyle')}</div>
    )
}

export default LifeStyle

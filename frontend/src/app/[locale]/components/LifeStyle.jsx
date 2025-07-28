import React from 'react'
import { useTranslations } from 'next-intl';


const LifeStyle = () => {
    const t = useTranslations()
    return (
        <div>{t('lifeStyle')}</div>
    )
}

export default LifeStyle

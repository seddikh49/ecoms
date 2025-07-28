import React from 'react'
import Title from './Title'
import BestCollection from './BestCollection'
import LifeStyle from './LifeStyle'

const HomeBanner = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 tracking-widest'>
      <Title className={'xl:text-4xl uppercase font-bold text-center text-black'}>
        <BestCollection />
      </Title>
      <LifeStyle />
    </div>
  )
}

export default HomeBanner

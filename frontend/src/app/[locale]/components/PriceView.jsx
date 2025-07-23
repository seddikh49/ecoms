import React from 'react'

const PriceView = ({price}) => {
    const formatted = price.toLocaleString('ar-DZ', {
  style: 'currency',
  currency: 'DZD'
})
  return (
    <div className='flex gap-1 '>
       <h1 className=' text-md font-semibold text-black'>{formatted}</h1> 
    </div>
  )
}

export default PriceView

import React from 'react'

const Title = ({children,className}) => {
  return (
    <div className={`text-2xl font-semibold ${className} `}>
      {children}
    </div>
  )
}

export default Title

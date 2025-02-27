import React, { ReactNode } from 'react'

interface CardProps{
  children: ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='w-full'>
        <div className="bg-white px-4 py-3 rounded-lg">
          {children}
        </div>
    </div>
  )
}

export default Card
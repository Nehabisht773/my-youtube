import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className='py-2 px-5 m-3 bg-gray-100 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
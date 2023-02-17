import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-row flex-wrap'>
        {Array(20).fill("").map((e, index)=>(<div key={index} className='w-72 h-72 bg-gray-200 m-3'></div>))}
    </div>
  )
}

export default Shimmer
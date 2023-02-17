import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  //Early return
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
        <ul className='pt-10'>
        <li  className='text-xl'><Link to="/">Home</Link></li>
        <li  className='text-xl'>Shorts</li>
        <li  className='text-xl'>Your videos</li>
        <li  className='text-xl'>Show more</li>
      </ul>
      <h1 className='font-bold pt-10 text-xl'>Subscriptions</h1>
      <ul className='pt-1'>
        <li className='text-xl'>Brahmakumaris</li>
        <li className='text-xl'>Republic World</li>
        <li className='text-xl'>Spinnin Records</li>
        <li className='text-xl'>India Today</li>
        <li className='text-xl'>Let's Crack </li>
        <li className='text-xl'>Kanak's Kitchen</li>
        <li className='text-xl'>Bhakti Marga</li>
        <li className='text-xl'>Show 201 more</li>

      </ul>
      <h1 className='font-bold pt-10 text-xl'>Watch Later</h1>
      <ul className='pt-1'>
        <li className='text-xl'>Music</li>
        <li className='text-xl'>Sports</li>
        <li className='text-xl'>Gaming</li>
        <li className='text-xl'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_RESULTS_API, SEARCH_SUGGESTIONS } from '../utils/constants';
import { cacheResults,searchVideos,searchString } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery , setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)

  

  const searchCache = useSelector(store => store.search);

  const dispatch= useDispatch();

  useEffect(()=>{
   const timer =  setTimeout(()=>
   {
    if(searchCache[searchQuery])
      setSuggestions(searchCache[searchQuery]);
    else
      getSearchSuggestions()
   }, 200);
   return () => {
    clearTimeout(timer)
   }
  }, [searchQuery])


 async  function getSearchResults(){
    const data = await  fetch(SEARCH_RESULTS_API+searchQuery)
    const json = await data.json()
    dispatch(searchVideos(json?.items))
  }


  const getSearchSuggestions = async () =>{
  console.log("API Call - "+ searchQuery)
  const data = await fetch(SEARCH_SUGGESTIONS+searchQuery)
  const json = await data.json()
  setSuggestions(json[1])
  dispatch(cacheResults({
    [searchQuery]:json[1],
  }))
  }

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
    <img className='h-8 cursor-pointer'
    alt ="menu" 
    onClick = {()=>toggleMenuHandler()}
    src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png">
    </img>
    <a href="/">
    <img className='h-20 pb-4 mx-4 -mt-4 cursor-pointer '
    alt="youtube-logo"
    src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png">
    </img>
    </a>
    </div>
    <div className='col-span-10 px-10'>
      <input 
      type="text" 
      className='w-1/2 border border-gray-400 p-2 rounded-l-full'
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      onFocus={(e)=>setShowSuggestions(true)}
      onBlur={(e)=>setShowSuggestions(true)}
      />
      <button 
      onClick={()=>getSearchResults()}
      className='border border-gray-400 rounded-r-full px-5 py-2 bg-gray-100'>
       Search
      </button>
    {showSuggestions && <div className='absolute bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg cursor-pointer'>
        <ul>
          {suggestions.map(s=>
                      <li  key={s} onClick={()=>{
                        setSearchQuery(s);
                        dispatch(searchString(s))
                        setShowSuggestions(false)}}
                      className='py-2 shadow-sm hover:bg-gray-100'>{s}</li>
                      )}
        </ul>
      </div>}
    </div>
    <div className='col-span-1 float-right'>
      <img className='h-10'
      alt="user-icon"
      src="https://cdn-icons-png.flaticon.com/512/25/25634.png">
      </img>
    </div>
    </div>
  )
}

export default Head
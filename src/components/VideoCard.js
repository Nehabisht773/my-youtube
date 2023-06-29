import React from 'react'

const VideoCard = ({info}) => {
  console.log(info)
    const {snippet , statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-80 shadow-lg'>

        <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}></img>
        <div className='py-2 flex flex-row justify-between'>
        <img className='rounded-full w-12 h-12 mx-2' alt="thumbnail" src={thumbnails.medium.url}></img>
    
        <ul className='col-span-10'>
            <li className='py-1 font-sans font-medium'>{title}</li>
            <li className='font-sans flex'>{channelTitle} 
            <img alt="verfied-icon" className='w-4 h-4 mx-1 mt-[6px]'
            src="https://png.pngtree.com/element_our/png/20181205/valid-vector-icon-png_260889.jpg"></img>
            </li>
            <li className='font-sans'>{statistics?.viewCount} views</li>
        </ul>
       </div>
    </div>
  )
}

export const WatchPageVideoCard = ({info}) => {
  const {snippet , statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;

return (
  <div className='p-2 m-2 shadow-lg flex flex-row'>
      <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}></img>
      <ul className='px-3'>
          <li className='font-bold py-2'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
      </ul>
  </div>
)
}

//higher order component
export const AdVideoCard= ({info}) =>{
  return (
  <div className='p-1 m-1 border-red-900 border-4'>
    <div>Ad</div>
    <VideoCard info={info}/>
  </div>)
}


export default VideoCard
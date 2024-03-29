import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import { Link } from 'react-router-dom';
import {WatchPageVideoCard} from './VideoCard';

const WatchPage = () => {

const [searchParams] = useSearchParams();
console.log(searchParams.get("v"))

  const dispatch = useDispatch();
  const allVideos = useSelector(store=> store.app.allVideos)
  console.log(allVideos )
  console.log(allVideos.length )



  useEffect(()=>{
  dispatch(closeMenu())
  },[])

  return (
    <div className='flex flex-row justify-center'>
    <div className='flex flex-col'>
    <div className='px-5'>
        <iframe 
        width="1000" 
        height="600" 
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
    <div>
    {allVideos.length>0 && allVideos.map(video=>(
       <Link  key={video.id} to={`/watch?v=${video.id}`}><WatchPageVideoCard info={video}/></Link> 
    )) 
    }
    </div>
    </div>
  )
}

export default WatchPage
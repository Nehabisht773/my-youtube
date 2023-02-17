import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard , { AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { loadAllVideos } from '../utils/appSlice';
import { searchVideos } from '../utils/searchSlice';
import Shimmer from './Shimmer';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const searchResult = useSelector(store => store.search.searchResults);
    useEffect(()=>{
    if(searchResult?.length<1)
    getVideos();
    else{
    console.log("I am here")
    setVideos(searchResult)
    }
    }, [searchResult])

    const dispatch = useDispatch();

    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_API_URL)
        const json = await data.json()
        console.log("First")
        setVideos(json?.items)
        dispatch(searchVideos([]))
        dispatch(loadAllVideos(json?.items))
    }

    // if(videos.length<1) return null

  return (videos.length===0) ? <Shimmer/> : (
    <div className='flex flex-wrap justify-center'>
    {videos[48] && <AdVideoCard info={videos[48]}/>}
    {videos.map(video=>(
       <Link  key={video.etag} to={`/watch?v=${video.id}`}><VideoCard info={video}/></Link> 
    )) 
    }
    </div>
  )
}

export default VideoContainer
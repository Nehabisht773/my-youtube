import React from 'react'
import { COMMENTS_DATA } from '../utils/constants';

const Comment = ({data}) =>{
    const {name , text } = data;


return <div className='flex shadow-sm bg-gray-100 px-2 rounded-xl my-2'>
    <img className='w-8 h-8' 
    alt="user"
    src="https://cdn-icons-png.flaticon.com/512/25/25634.png">
    </img>
    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
    </div>
}

const CommentsList = ({comments}) =>{
//Disclaimer : Don't use indexes as keys
return comments.map((comment, index)=> 
( 
<div key={index}>
       <Comment data={comment}/> 
        <div className='pl-5 border border-l-black ml-5'>
          <CommentsList comments={comment.replies}/>
       </div>
</div>
))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
    <h1 className='text-2xl font-bold'>
        Comments:
    </h1>
    <CommentsList comments={COMMENTS_DATA}/>
    </div>
  )
}

export default CommentsContainer
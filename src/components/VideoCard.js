import React from 'react'

const VideoCard = ({videoInfo}) => {
    const {snippet , statistics} = videoInfo;
    const {channelTitle, title,thumbnails} = snippet;  
    
    return(
    
        <div className='p-2 m-2 w-80 shadow-lg py-2'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <p>{channelTitle}</p>
        <p className='font-bold'>{title}</p>
        <p>{statistics.viewCount},{statistics.likeCount}</p>
       </div>
       
    )
}

export default VideoCard

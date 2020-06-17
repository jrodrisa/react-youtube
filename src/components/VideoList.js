import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const data = Array.from(videos);
    
    const renderedVideos =  data.map((video) => {
        console.log(video.id);
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />

    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;
import React from 'react';
import VideoItem from './VideoItem';
import "../style/grid.scss"

const Grid = ({videos , handleVideoSelect, horizontal}) => {
    const data = Array.from(videos);
    
    const renderedVideos =  data.map((video) => {
        console.log(video.id);
        return <VideoItem horizontal={horizontal} key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />

    });

    return <div className='video-grid'>{renderedVideos}</div>;
};
export default Grid;
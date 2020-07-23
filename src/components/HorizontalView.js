import React from 'react';
import VideoItem from './VideoItem';

const HorizontalView = ({videos , handleVideoSelect}) => {
    const data = Array.from(videos);
    
    const renderedVideos =  data.map((video) => {
        console.log(video.id);
        return <div>
        <p>HorizontalView</p><VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        </div>

    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default HorizontalView;
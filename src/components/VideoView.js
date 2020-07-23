import React from "react"
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const VideoView = ({selectedVideo, handleVideoSelect, videos}) => {
    return (
        [<div className='ui grid'>
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />

                </div>
                <div className="five wide column">
                    <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
                </div>
            </div>
        </div>]
    )
}

export default VideoView;

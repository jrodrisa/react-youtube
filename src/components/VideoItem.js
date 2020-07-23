import React from 'react';
import { Image } from 'semantic-ui-react';
import '../style/videoItem.scss';


const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div className='video-item' onClick={() => handleVideoSelect(video)}>

            <div className='image-container'>
                <Image src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                <div className='time-label'>
                    <span>05:22</span>
                </div>
            </div>
            <div className='content video-info'>
                <div className='header semi-bold show-max-two-lines'>{video.snippet.title}</div>
                <div className='video-preview-metadata-container'>
                    <div className='channel-title'>{video.snippet.channelTitle}</div>
                    <div>
                        <span>{video.snippet.publishedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default VideoItem;
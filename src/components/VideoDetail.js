import React, {useState} from 'react';
import CommentList from "./CommentList"
import { Button, Icon, Label } from 'semantic-ui-react'

const VideoDetail = ({video}) => {
    const [count, setCount] = useState(0)

    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    

    const handleLike = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDislike = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>

            <div>
                <Button.Group>
                    <Button onClick={handleLike} icon>
                        <Icon name='thumbs up outline' />
                        Like
                    </Button>
                    <Button.Or />
                    <Button positive as='div' labelPosition='right'>
                    <Button onClick={handleDislike} icon>
                        <Icon name='thumbs down outline' />
                        Dislike
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {count}
                    </Label>
                    </Button>
                </Button.Group>
            </div>
            

            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                
            </div>
            <CommentList/>
        </div>

    )
}

export default VideoDetail;
import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import youtube from '../apis/youtube';
import VideoView from './VideoView';
import Grid from './Grid';
import VideoList from './VideoList';
import { response } from "./constants";

const App = () => {

  const [videos, setVideos] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleSubmit = async (termFromSearchBar) => {
      setVideos(response.data.items)
      console.log(response)
      console.log(response.data.items)

    // try {
                
    //   const response = await youtube.get('/search', {
    //   params: {
    //       q: termFromSearchBar
    //   }
    //   })           
    //   setVideos(response.data.items)
    //   console.log(response)
    //   console.log(response.data.items)
    // }
    // catch (error) {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log('Error', error.message);
    //   }
    //   console.log(error.config);
    // };
  };

  const videoProva = response.data.items;
  
  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }


  return (
    <div className='ui container' style={{ marginTop: '1em' }}>
      <HeaderNav handleFormSubmit={handleSubmit}/>
      
      {selectedVideo
        ?
        <VideoView
          selectedVideo={selectedVideo}
          handleVideoSelect={handleVideoSelect}
          videos={videoProva}
        />
        :
        videos
        ?
        <VideoList
          horizontal={'horizontal'}
          handleVideoSelect={handleVideoSelect}
          videos={videos}
        /> 
        :
        <Grid
          horizontal={null}
          handleVideoSelect={handleVideoSelect}
          videos={videoProva}
        />        
      }

    </div>
  )
}

export default App;
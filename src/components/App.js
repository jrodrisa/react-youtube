import React, {useState} from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {

    const [videos, setVideos] = useState('');
    const [selectedVideo, setSelectedVideo] = useState('');

    const handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        setVideos(response.data.items)
        console.log(videos)

    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video)
    }


    return (
        <div className='ui container' style={{marginTop: '1em'}}>
            <SearchBar handleFormSubmit={handleSubmit}/>
            <div className='ui grid'>
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList handleVideoSelect={handleVideoSelect} videos={{videos}}/>
                    </div>
                </div>
            </div>
        </div>
    )


}

// class App extends React.Component {
//     state = {
//         videos: [],
//         selectedVideo: null
//     }

//     handleSubmit = async (termFromSearchBar) => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: termFromSearchBar
//             }
//         })
//         this.setState({
//             videos: response.data.items    
//         })
//         console.log(this.state.videos)
//     };
//     handleVideoSelect = (video) => {
//         this.setState({selectedVideo: video})
//     }

//     render() {
//         return (
//             <div className='ui container' style={{marginTop: '1em'}}>
//                 <SearchBar handleFormSubmit={this.handleSubmit}/>
//                 <div className='ui grid'>
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>
//                         <div className="five wide column">
//                             <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default App;
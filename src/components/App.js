import React, { useState } from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoView from './VideoView';
import Grid from './Grid';
import HorizontalView from './HorizontalView';

const App = () => {

  const [videos, setVideos] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleSubmit = async (termFromSearchBar) => {
    try {
      const response = {
        "kind": "youtube#searchListResponse",
        "etag": "lWHY6hn3oQcwKVa8Jrp_ZUXnnNU",
        "nextPageToken": "CAUQAA",
        "regionCode": "ES",
        "pageInfo": {
          "totalResults": 1000000,
          "resultsPerPage": 5
        },
        "data": {
          "items": [
            {
              "kind": "youtube#searchResult",
              "etag": "gWmHOAABUpIA9ev7CkCzgBrCYPI",
              "id": {
                "kind": "youtube#video",
                "videoId": "QW28YKqdxe0"
              },
              "snippet": {
                "publishedAt": "2020-06-29T15:02:43Z",
                "channelId": "UCaO6TYtlC8U5ttz62hTrZgg",
                "title": "NiziU  『Make you happy』 M/V",
                "description": "NiziU Pre-Debut Digital Mini Album 『Make you happy』 M/V 2020.06.30 Tuesday 0:00 ON AIR iTunes & Apple Music: https://apple.co/3if4Uqg Spotify: ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/QW28YKqdxe0/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/QW28YKqdxe0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/QW28YKqdxe0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "JYP Entertainment",
                "liveBroadcastContent": "none",
                "publishTime": "2020-06-29T15:02:43Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "LV49X890XklU2m55agQGfPSnQmc",
              "id": {
                "kind": "youtube#video",
                "videoId": "9laXWoqdCYc"
              },
              "snippet": {
                "publishedAt": "2020-06-27T22:45:00Z",
                "channelId": "UCBJeMCIeLQos7wacox4hmLQ",
                "title": "Lazio 2-1 Fiorentina | Lazio Keep Title Hopes Alive with a Late Victory! | Serie A TIM",
                "description": "Lazio comes back after conceding to a brilliant solo Franck Ribery goal, to win 2-1 against Fiorentina with goals from Ciro Immobile and Luis Alberto | Serie A ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/9laXWoqdCYc/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/9laXWoqdCYc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/9laXWoqdCYc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Serie A",
                "liveBroadcastContent": "none",
                "publishTime": "2020-06-27T22:45:00Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "Zkh7C8eMdBa1Bmx_CidnZ7ArkoU",
              "id": {
                "kind": "youtube#video",
                "videoId": "cFJWYsoxmvo"
              },
              "snippet": {
                "publishedAt": "2020-06-27T18:20:59Z",
                "channelId": "UCg3_C7BwcV0kBlJbBFHTPJQ",
                "title": "Miley Cyrus Performs &quot;Help!&quot; | Global Goal: Unite for Our Future",
                "description": "Miley Cyrus performs \"Help!\" during Global Goal: Unite for Our Future on June 27. Global Citizen is a social action platform...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/cFJWYsoxmvo/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/cFJWYsoxmvo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/cFJWYsoxmvo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Global Citizen",
                "liveBroadcastContent": "none",
                "publishTime": "2020-06-27T18:20:59Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "NcNU1yaaAO-eCn-r-I8bOD-eFsw",
              "id": {
                "kind": "youtube#video",
                "videoId": "JBFPP_BG-qo"
              },
              "snippet": {
                "publishedAt": "2020-06-29T12:58:49Z",
                "channelId": "UCB_qr75-ydFVKSF9Dmo6izg",
                "title": "2020 F1 Opening Titles!",
                "description": "F1 is finally ready to return! Take a look at the brand-new opening sequence, racing through history as the sport celebrates its 70th anniversary. For more F1® ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/JBFPP_BG-qo/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/JBFPP_BG-qo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/JBFPP_BG-qo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "FORMULA 1",
                "liveBroadcastContent": "none",
                "publishTime": "2020-06-29T12:58:49Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "qkq4khCA-CJ-y85AF0MsE_pbEkw",
              "id": {
                "kind": "youtube#video",
                "videoId": "85s3XIF-pSc"
              },
              "snippet": {
                "publishedAt": "2020-06-29T22:49:08Z",
                "channelId": "UCbZwpdul2Oa5Fl6hxllcSzA",
                "title": "Questlove + Black Thought – Live Intro Performance | 2020 Roots Picnic Virtual Experience",
                "description": "Questlove and Black Thought kick off the initial performance for the 2020 Roots Picnic Virtual Experience. Watch the rest of the artist performances here: ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/85s3XIF-pSc/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/85s3XIF-pSc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/85s3XIF-pSc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "The Roots",
                "liveBroadcastContent": "none",
                "publishTime": "2020-06-29T22:49:08Z"
              }
            }
          ]
        }
      }
      
      // response = await youtube.get('/search', {
      // const params: {
      //     q: termFromSearchBar
      // }
      // })           
      setVideos(response.data.items)
      console.log(response)
      console.log(response.data.items)
    }
    catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    };
  };

  const videoProva = [
    {
      "kind": "youtube#searchResult",
      "etag": "gWmHOAABUpIA9ev7CkCzgBrCYPI",
      "id": {
        "kind": "youtube#video",
        "videoId": "QW28YKqdxe0"
      },
      "snippet": {
        "publishedAt": "2020-06-29T15:02:43Z",
        "channelId": "UCaO6TYtlC8U5ttz62hTrZgg",
        "title": "NiziU  『Make you happy』 M/V",
        "description": "NiziU Pre-Debut Digital Mini Album 『Make you happy』 M/V 2020.06.30 Tuesday 0:00 ON AIR iTunes & Apple Music: https://apple.co/3if4Uqg Spotify: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QW28YKqdxe0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QW28YKqdxe0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QW28YKqdxe0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "JYP Entertainment",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-29T15:02:43Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "LV49X890XklU2m55agQGfPSnQmc",
      "id": {
        "kind": "youtube#video",
        "videoId": "9laXWoqdCYc"
      },
      "snippet": {
        "publishedAt": "2020-06-27T22:45:00Z",
        "channelId": "UCBJeMCIeLQos7wacox4hmLQ",
        "title": "Lazio 2-1 Fiorentina | Lazio Keep Title Hopes Alive with a Late Victory! | Serie A TIM",
        "description": "Lazio comes back after conceding to a brilliant solo Franck Ribery goal, to win 2-1 against Fiorentina with goals from Ciro Immobile and Luis Alberto | Serie A ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9laXWoqdCYc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9laXWoqdCYc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9laXWoqdCYc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Serie A",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-27T22:45:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Zkh7C8eMdBa1Bmx_CidnZ7ArkoU",
      "id": {
        "kind": "youtube#video",
        "videoId": "cFJWYsoxmvo"
      },
      "snippet": {
        "publishedAt": "2020-06-27T18:20:59Z",
        "channelId": "UCg3_C7BwcV0kBlJbBFHTPJQ",
        "title": "Miley Cyrus Performs &quot;Help!&quot; | Global Goal: Unite for Our Future",
        "description": "Miley Cyrus performs \"Help!\" during Global Goal: Unite for Our Future on June 27. Global Citizen is a social action platform...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/cFJWYsoxmvo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/cFJWYsoxmvo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/cFJWYsoxmvo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Global Citizen",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-27T18:20:59Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "NcNU1yaaAO-eCn-r-I8bOD-eFsw",
      "id": {
        "kind": "youtube#video",
        "videoId": "JBFPP_BG-qo"
      },
      "snippet": {
        "publishedAt": "2020-06-29T12:58:49Z",
        "channelId": "UCB_qr75-ydFVKSF9Dmo6izg",
        "title": "2020 F1 Opening Titles!",
        "description": "F1 is finally ready to return! Take a look at the brand-new opening sequence, racing through history as the sport celebrates its 70th anniversary. For more F1® ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/JBFPP_BG-qo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/JBFPP_BG-qo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/JBFPP_BG-qo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FORMULA 1",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-29T12:58:49Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "qkq4khCA-CJ-y85AF0MsE_pbEkw",
      "id": {
        "kind": "youtube#video",
        "videoId": "85s3XIF-pSc"
      },
      "snippet": {
        "publishedAt": "2020-06-29T22:49:08Z",
        "channelId": "UCbZwpdul2Oa5Fl6hxllcSzA",
        "title": "Questlove + Black Thought – Live Intro Performance | 2020 Roots Picnic Virtual Experience",
        "description": "Questlove and Black Thought kick off the initial performance for the 2020 Roots Picnic Virtual Experience. Watch the rest of the artist performances here: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/85s3XIF-pSc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/85s3XIF-pSc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/85s3XIF-pSc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Roots",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-29T22:49:08Z"
      }
    }
  ];
  
  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }


  return (
    <div className='ui container' style={{ marginTop: '1em' }}>
      <SearchBar handleFormSubmit={handleSubmit} />
      {selectedVideo
        ?
        <VideoView
          selectedVideo={selectedVideo}
          handleVideoSelect={handleVideoSelect}
          videos={videos}
        />
        :
        videos
        ?
        <HorizontalView
          handleVideoSelect={handleVideoSelect}
          videos={videoProva}
        /> 
        :
        <Grid 
          handleVideoSelect={handleVideoSelect}
          videos={videoProva}
        />
        
      }

    </div>
  )
}

export default App;
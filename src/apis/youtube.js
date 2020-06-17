import axios from 'axios';
const KEY = 'AIzaSyBLY54CW3l8eG-feKq2KepyetXI54OQuGU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
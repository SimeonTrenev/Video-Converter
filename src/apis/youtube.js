import axios from 'axios';

const KEY = 'AIzaSyCqvIJjWbkq8WHX9qYOoHEYJ9wN2uTHPnY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
        type: 'video'
    }

});

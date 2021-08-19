import axios from 'axios';

const API = {
    music: axios.create({
        baseURL: 'https://api.happi.dev/v1/music/',
        headers: {
            'x-happi-key': '83e6d8pl85EFdMhzvnTxFrqNsBkHHmEH9dfA5BRRQblKVcZEVCquBYQC'
        }
    }),
    giphy: axios.create({
        baseURL: 'https://api.giphy.com/v1/gifs/',
        headers: {
            'api_key': 'lPrSjJo6qBjvuzvwnO6ubEY1FMZOJbOD'
        }
    })
};

export default API;

import axios from 'axios';

export const key = '137c24b1ea919bfdee796660f1df243d533628d5'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`

    }
})

export default api;


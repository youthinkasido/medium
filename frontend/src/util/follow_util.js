import axios from 'axios';

export const follow = data => {
    return axios.post('/api/follows/', data);
}

export const unfollow = data => {
    debugger
    return axios.delete('/api/follows/', data);
}
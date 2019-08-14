import axios from 'axios';

export const follow = follow => {
    return axios.post('/api/follows/', follow);
}

export const unfollow = id => {
    return axios.delete(`/api/follows/${id}`, id);
}
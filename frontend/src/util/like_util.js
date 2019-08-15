import axios from 'axios'

export const like = (data) =>{ // data consists of likerId, and likedStory which are both just ID's.
    return axios.patch('api/likes/like', data)
}

export const unlike = (data) => {
    return axios.patch('api/likes/unlike', data)
}
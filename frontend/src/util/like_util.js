import axios from 'axios'



export const like = (data) =>{ // data consists of likerId, and likedStory which are both just ID's.
    return axios.post('api/likes/', data)
}

export const unlike = (data) => {
    return axios.delete('api/likes/', data)
}
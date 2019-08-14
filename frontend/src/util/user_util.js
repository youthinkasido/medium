import axios from 'axios'

export const fetchAllUsers = () => {
 return axios.get('api/users')
}


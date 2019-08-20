import axios from "axios";

export const fetchAllUsers = () => {
  return axios.get("api/users");
};

export const fetchUser = id => {
  return axios.get(`api/users/${id}`, id);
};


export const createUserAvatar = user => {
  return axios.post(`api/users/${user.id}`, user);
}

export const updateUser = user => {
  return axios.patch(`api/users/${user.id}`, user);
}
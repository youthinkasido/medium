import axios from "axios";

export const fetchAllUsers = () => {
  return axios.get("api/users");
};

export const fetchUser = id => {
  return axios.get(`api/users/${id}`, id);
};

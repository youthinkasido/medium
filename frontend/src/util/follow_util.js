import axios from "axios";

export const follow = data => {
  return axios.patch("/api/follows/follow", data);
};

export const unfollow = data => {
  return axios.patch("/api/follows/unfollow", data);
};

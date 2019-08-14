import axios from "axios";

export const getStories = () => {
  return axios.get("/api/stories");
};

export const getStory = id => {
  return axios.get(`/api/stories/${id}`);
};

export const getUserStories = id => {
  return axios.get(`/api/stories/user/${id}`);
};

export const createStory = data => {
  return axios.post("/api/stories/", data);
};

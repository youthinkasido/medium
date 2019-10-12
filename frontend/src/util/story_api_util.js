import axios from "axios";

export const getStories = searchInput => {
  return axios.get("/api/stories", {
    params: {
      searchInput
    }
  });
};

export const getStory = id => {
  return axios.get(`/api/stories/${id}`, id);
};

export const getUserStories = id => {
  return axios.get(`/api/stories/user/${id}`);
};

export const createStory = data => {
  return axios.post("/api/stories/", data);
};

export const deleteStory = id => {
  return axios.delete(`/api/stories/`, { params: { id } });
};

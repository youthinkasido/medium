import axios from "axios";

export const fetchStoryComments = id => {
  return axios.get(`/api/stories/${id}/comments`, id);
};

export const createStoryComment = comment => {
  return axios.post(`/api/comments`, comment);
};

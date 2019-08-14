import * as APIUtil from "../util/story_api_util";

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_USER_STORIES = "RECEIVE_USER_STORIES";
export const RECEIVE_NEW_STORY = "RECEIVE_NEW_STORY";

export const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

export const receiveUserStories = stories => ({
  type: RECEIVE_USER_STORIES,
  stories
});

export const receiveNewStory = story => {
  return {
    type: RECEIVE_NEW_STORY,
    story
  };
};

export const fetchStories = () => dispatch =>
  APIUtil.getStories()
    .then(stories => {
      dispatch(receiveStories(stories));
    })
    .catch(err => console.log(err));

export const fetchUserStories = id => dispatch =>
  APIUtil.getUserStories(id)
    .then(stories => dispatch(receiveUserStories(stories)))
    .catch(err => console.log(err));

export const createStory = data => dispatch =>
  APIUtil.createStory(data)
    .then(story => dispatch(receiveNewStory(story)))
    .catch(err => console.log(err));

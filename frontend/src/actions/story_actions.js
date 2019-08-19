import * as APIUtil from "../util/story_api_util";

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_NEW_STORY = "RECEIVE_NEW_STORY";
export const RECEIVE_NEW_STORY_IMAGE = "RECEIVE_NEW_STORY_IMAGE";

export const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

export const receiveStory = story => {
  return {
    type: RECEIVE_STORY,
    story
  };
};

export const receiveNewStory = story => {
  return {
    type: RECEIVE_NEW_STORY,
    story
  };
};

export const receiveNewStoryImageURL = imageURL => {
  return {
    type: RECEIVE_NEW_STORY_IMAGE,
    imageURL
  };
};

export const fetchStories = () => dispatch =>
  APIUtil.getStories()
    .then(stories => {
      dispatch(receiveStories(stories));
    })
    .catch(err => console.log(err));

export const fetchStory = id => dispatch =>
  APIUtil.getStory(id)
    .then(story => {
      dispatch(receiveStory(story));
    })
    .catch(err => console.log(err));

export const fetchUserStories = id => dispatch =>
  APIUtil.getUserStories(id)
    .then(stories => dispatch(receiveStories(stories)))
    .catch(err => console.log(err));

export const createStory = data => dispatch => { 
  debugger
  return APIUtil.createStory(data)
    .then(story => dispatch(receiveNewStory(story)))
    .catch(err => console.log(err));
}

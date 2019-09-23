import * as APIUtil from "../util/story_api_util";

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_NEW_STORY = "RECEIVE_NEW_STORY";
export const RECEIVE_NEW_STORY_IMAGE = "RECEIVE_NEW_STORY_IMAGE";
export const REMOVE_NEW_STORY_IMAGE = "REMOVE_NEW_STORY_IMAGE";
export const REMOVE_DELETED_STORY = "REMOVE_DELETED_STORY";

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

export const removeNewStoryImageURL = () => {
  return {
    type: REMOVE_NEW_STORY_IMAGE
  };
};

export const removeDeletedStory = id => {
  return { type: REMOVE_DELETED_STORY, id };
};

export const fetchStories = searchInput => dispatch => {
  return APIUtil.getStories(searchInput)
    .then(stories => {
      dispatch(receiveStories(stories));
    })
    .catch(err => console.log(err));
};

export const fetchStory = id => dispatch => {
  return APIUtil.getStory(id)
    .then(story => {
      dispatch(receiveStory(story));
    })
    .catch(err => console.log(err));
};

export const fetchUserStories = id => dispatch => {
  return APIUtil.getUserStories(id)
    .then(stories => dispatch(receiveStories(stories)))
    .catch(err => console.log(err));
};

export const createStory = data => dispatch => {
  return APIUtil.createStory(data)
    .then(story => dispatch(receiveNewStory(story)))
    .catch(err => console.log(err));
};

export const deleteStory = id => dispatch => {
  return APIUtil.deleteStory(id)
    .then(id => dispatch(removeDeletedStory(id)))
    .catch(err => console.log(err));
};

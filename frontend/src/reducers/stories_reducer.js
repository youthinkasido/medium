import {
  RECEIVE_STORIES,
  RECEIVE_NEW_STORY,
  RECEIVE_STORY,
  RECEIVE_NEW_STORY_IMAGE,
  REMOVE_NEW_STORY_IMAGE,
  REMOVE_DELETED_STORY
} from "../actions/story_actions";
import merge from "lodash/merge";

const storiesReducer = (
  state = { all: [], user: {}, story: {}, new: undefined, imageURL: "" },
  action
) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_STORIES:
      newState.all = action.stories.data;
      return newState;
    case RECEIVE_STORY:
      newState.story = action.story.data;
      return newState;
    case RECEIVE_NEW_STORY:
      newState.new = action.story.data;
      return newState;

    case RECEIVE_NEW_STORY_IMAGE:
      newState.imageURL = action.imageURL;
      return newState;

    case REMOVE_NEW_STORY_IMAGE:
      newState.imageURL = "";
      return newState;

    case REMOVE_DELETED_STORY:
      for (let i = 0; i < newState.all.length; i++) {
        const story = newState.all[i];
        if (action.id.data === story._id) {
          newState.all.splice(i, 1);
          break;
        }
      }
      return newState;
    default:
      return state;
  }
};

export default storiesReducer;

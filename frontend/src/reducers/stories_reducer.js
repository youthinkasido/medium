import {
  RECEIVE_STORIES,
  RECEIVE_USER_STORIES,
  RECEIVE_NEW_STORY
} from "../actions/story_actions";

const storiesReducer = (
  state = { all: [], user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_STORIES:
      newState.all = action.stories.data;
      return newState;
    case RECEIVE_USER_STORIES:
      newState.user = action.stories.data;
      return newState;
    case RECEIVE_NEW_STORY:
      newState.new = action.story.data;
      return newState;
    default:
      return state;
  }
};

export default storiesReducer;

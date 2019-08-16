import {
  RECEIVE_STORIES,
  RECEIVE_NEW_STORY,
  RECEIVE_STORY
} from "../actions/story_actions";

const storiesReducer = (
  state = { all: [], user: {}, story: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
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
    default:
      return state;
  }
};

export default storiesReducer;

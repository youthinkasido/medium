import { connect } from "react-redux";
import NewStory from "./new_story";
import {
  createStory,
  removeNewStoryImageURL
} from "../../actions/story_actions";

const mapStateToProps = state => {
  return {
    sessionId: state.session.user.id,
    imageURL: state.entities.stories.imageURL
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStory: story => dispatch(createStory(story)),
    removeNewStoryImageURL: () => dispatch(removeNewStoryImageURL())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);

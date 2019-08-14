import { connect } from "react-redux";
import NewStory from "./new_story";
import { createStory } from "../../actions/story_actions";

const mapStateToProps = state => {
  return {
    sessionId: state.session.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStory: story => dispatch(createStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);

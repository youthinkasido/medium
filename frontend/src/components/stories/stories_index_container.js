import { connect } from "react-redux";
import StoryIndex from "./stories_index";
import { fetchStories } from "../../actions/story_actions";

const mapStateToProps = state => {
  return {
    sessionId: state.session.user.id,
    stories: state.entities.stories.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStories: story => dispatch(fetchStories(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);

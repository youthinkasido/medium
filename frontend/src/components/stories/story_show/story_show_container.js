import { connect } from "react-redux";
import StoryShow from "./story_show";
import { fetchStory } from "../../../actions/story_actions";

const mapStateToProps = state => {
  debugger;
  return {
    sessionId: state.session.user.id,
    stories: state.entities.stories.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStory: story => dispatch(fetchStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);

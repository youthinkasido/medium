import { connect } from "react-redux";
import StoryShow from "./story_show";
import { fetchStory } from "../../../actions/story_actions";
import { fetchUser } from "../../../actions/user_actions";

const mapStateToProps = state => {

  return {
    sessionId: state.session.user.id,
    story: state.entities.stories.all,
    author: state.entities.users.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStory: story => dispatch(fetchStory(story)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);

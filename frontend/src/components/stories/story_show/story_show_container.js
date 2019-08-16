import { connect } from "react-redux";
import StoryShow from "./story_show";
import { fetchStory } from "../../../actions/story_actions";
import { fetchUser } from "../../../actions/user_actions";
import { fetchStoryComments } from "../../../actions/comment_actions";

const mapStateToProps = state => {
  return {
    sessionId: state.session.user.id,
    story: state.entities.stories.story,
    author: state.entities.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStory: story => dispatch(fetchStory(story)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchStoryComments: id => dispatch(fetchStoryComments(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);

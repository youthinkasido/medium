import { connect } from "react-redux";
import StoryShow from "./story_show";
import { fetchStory } from "../../../actions/story_actions";
import { fetchUser } from "../../../actions/user_actions";
import { follow, unfollow } from '../../../actions/follow_actions';

const mapStateToProps = state => {
  return {
    sessionUser: state.session.user,
    story: state.entities.stories.story,
    author: state.entities.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStory: story => dispatch(fetchStory(story)),
    fetchUser: id => dispatch(fetchUser(id)),
    follow: data => dispatch(follow(data)),
    unfollow: data => dispatch(unfollow(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);

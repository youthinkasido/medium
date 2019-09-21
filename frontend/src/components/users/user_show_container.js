import { connect } from "react-redux";
import UserShow from "./user_show";
import {
  fetchUser,
  createUserAvatar,
  updateUser
} from "../../actions/user_actions";
import { fetchUserStories, deleteStory } from "../../actions/story_actions";
import { follow, unfollow } from "../../actions/follow_actions";

const mapStateToProps = ({ session, entities }) => {
  return {
    currentUser: session.user,
    author: entities.users.user,
    stories: entities.stories.all,
    avatarURL: entities.users.user.avatarURL,
    description: entities.users.user.description
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserStories: id => dispatch(fetchUserStories(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    follow: data => dispatch(follow(data)),
    unfollow: data => dispatch(unfollow(data)),
    createUserAvatar: user => dispatch(createUserAvatar(user)),
    updateUser: user => dispatch(updateUser(user)),
    deleteStory: id => dispatch(deleteStory(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

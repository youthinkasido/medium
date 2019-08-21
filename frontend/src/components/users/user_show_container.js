import { connect } from "react-redux";
import UserShow from "./user_show";
import {
  fetchUser,
  createUserAvatar,
  updateUser
} from "../../actions/user_actions";
import {
  fetchUserStories
} from "../../actions/story_actions";
import { follow, unfollow } from "../../actions/follow_actions";

const mapStateToProps = ({ session, entities }) => {
  return {
    currentUser: session.user,
    author: entities.users.user,
    stories: entities.stories.all,
    avatarURL: entities.users.user.avatarURL
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserStories: id => dispatch(fetchUserStories(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    follow: data => dispatch(follow(data)),
    unfollow: data => dispatch(unfollow(data)),
    createUserAvatar: avatar => dispatch(createUserAvatar(avatar)),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

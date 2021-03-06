import { connect } from "react-redux";
import StoryIndex from "./stories_index";
import { fetchStories } from "../../../actions/story_actions";
import { fetchAllUsers } from '../../../actions/user_actions';
import { follow, unfollow } from '../../../actions/follow_actions';

const mapStateToProps = ({ session, entities }) => {
 
  return {
    sessionUser: session.user, 
    stories: entities.stories.all,
    users: entities.users.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStories: searchInput => dispatch(fetchStories(searchInput)),
    follow: data => dispatch(follow(data)),
    unfollow: data => dispatch(unfollow(data)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);

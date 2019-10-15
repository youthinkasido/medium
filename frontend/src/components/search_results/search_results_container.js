import SearchResults from "./search_results";
import { fetchStories } from "../../actions/story_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { follow, unfollow } from '../../actions/follow_actions';
import { connect } from "react-redux";

const mapStateToProps = ({ entities }) => {
  return {
    stories: entities.stories.all,
    users: entities.users.all,
    sessionUser: entities.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStories: searchInput => dispatch(fetchStories(searchInput)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    follow: data => dispatch(follow(data)),
    unfollow: data => dispatch(unfollow(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

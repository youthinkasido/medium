import SearchResults from "./search_results";
import { fetchStories } from "../../actions/story_actions";
import { connect } from "react-redux";

const mapStateToProps = ({ entities }) => {
  return {
    stories: entities.stories.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStories: searchInput => dispatch(fetchStories(searchInput))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

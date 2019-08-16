import { connect } from "react-redux";
import CommentsIndex from "./comments_index";

import {
  createStoryComment,
  fetchStoryComments
} from "../../actions/comment_actions";

const mapStateToProps = state => {
  return {
    comments: state.entities.comments.all,
    currentUser: state.session.user,
    story: state.entities.stories.story
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStoryComment: comment => dispatch(createStoryComment(comment)),
    fetchStoryComments: id => dispatch(fetchStoryComments(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);

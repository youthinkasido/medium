import { connect } from "react-redux";
import CommentsIndex from "./comments_index";
import {
  createStoryComment,
  fetchStoryComments
} from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    comments: state.entities.comments.all,
    comment: state.entities.comments.comment,
    currentUser: state.session.user,
    users: state.entities.users.all,
    story: state.entities.stories.story
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStoryComment: comment => dispatch(createStoryComment(comment)),
    fetchStoryComments: id => dispatch(fetchStoryComments(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);

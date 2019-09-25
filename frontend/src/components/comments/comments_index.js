import React, { Component } from "react";
import CommentIndexItem from "./comments_index_item";

export default class CommentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsLoaded: false
    };
  }

  componentDidMount() {
    this.props
      .fetchAllUsers()
      .then(() => this.props.fetchStoryComments(this.props.story._id))
      .then(() => {
        this.setState({ commentsLoaded: true });
        this.scrollTo();
      });
  }

  scrollTo() {
    document.querySelector(".comment-wrapper-container").scrollIntoView();
  }

  render() {
    if (this.props.comments.length === 0) {
      return null;
    }

    return (
      <div className="comment-index-container">
        <div className="comment-index">
          <ul className="comment-index-list">
            {this.props.comments.slice(0).reverse().map(comment => (
              <CommentIndexItem
                key={comment._id}
                comment={comment}
                users={this.props.users}
                currentUser={this.props.currentUser}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

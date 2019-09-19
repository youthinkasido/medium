import React, { Component } from "react";
import CommentIndexItem from "./comments_index_item";

export default class CommentIndex extends Component {
  componentDidMount() {
    this.props
      .fetchAllUsers()
      .then(() => this.props.fetchStoryComments(this.props.story._id));
  }

  render() {
    if (this.props.comments.length === 0) {
      return null;
    }

    return (
      <div className="comment-index-container">
        <div className="comment-index">
          <ul className="comment-index-list">
            {this.props.comments.map(comment => (
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

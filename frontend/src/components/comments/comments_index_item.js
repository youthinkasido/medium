import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./comments.css";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { comment, users } = this.props;
    let user = Object.values(users).find(user => user._id === comment.commenterId);
    return (
      <li className="comment-list-item">
        <div>
          <div className="comment-name-container">
            <p className="comment-name">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div className="comment-date-container">
            <p className="comment-date">
              {new Date(comment.date)
                .toString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}
            </p>
          </div>
          <div className="comment-body-container">
            <p className="comment-body">{comment.body}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(CommentsIndexItem);

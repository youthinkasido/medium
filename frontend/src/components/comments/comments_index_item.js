import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./comments.css";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { comment } = this.props;

    return (
      <li className="comment-list-item">
        <div>
          <div className="comment-name-container">
            <p className="comment-name">{comment._id}</p>
          </div>
          <div className="comment-date-container">
            <p className="comment-date">
              {new Date(comment.date)
                .toString()
                .split(" ")
                .slice(1, 3)
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

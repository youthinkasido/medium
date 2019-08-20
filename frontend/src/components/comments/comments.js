import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import CommentIndexContainer from "./comments_index_container";
import { Redirect, withRouter } from 'react-router-dom';
import "./comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      commenterId: props.currentUser.id,
      storyId: props.story._id,
      image: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      storyId: this.state.storyId,
      commenterId: this.state.commenterId,
      body: this.state.body
    };

    if (Object.values(this.props.currentUser).length > 0) {
      this.props.createStoryComment(comment);

      this.setState({
        body: ""
      });
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="comment-wrapper">
        <div className="comment-container">
          <div className="comment-content">
            <form className="comment-form" onSubmit={this.handleSubmit}>
              <div className="commenter-name">
                {this.props.currentUser.firstName}
              </div>
              <div className="comment-input-container">
                <Textarea
                  useCacheForDOMMeasurements
                  value={this.state.body}
                  onChange={this.update("body")}
                  className="comment-form-input"
                  placeholder="Write a response..."
                />
              </div>
              <button className="comment-button">Publish</button>
            </form>
          </div>
          <CommentIndexContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Comments);
import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import CommentIndexContainer from "./comments_index_container";
import "./comments.css";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      commenterId: props.currentUser.id,
      storyId: props.story._id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit() {
    const comment = {
      storyId: this.state.storyId,
      commenterId: this.state.commenterId,
      body: this.state.body
    };
    this.props.createStoryComment(comment);
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
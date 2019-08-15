import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import "./new_story.css"

export default class new_story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      errors: {}
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
    let story = {
      title: this.state.title,
      body: this.state.body,
      authorId: this.props.sessionId
    };

    this.props.createStory(story);
  }

  render() {
    return (
      <div className="story-form-container">
        <form className="story-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
            className="story-form-input story-form-title"
          />

          <Textarea
            useCacheForDOMMeasurements
            value={this.state.body}
            onChange={this.update("body")}
            className="story-form-input"
            placeholder="Tell your story..."
          />
        </form>
      </div>
    );
  }
}
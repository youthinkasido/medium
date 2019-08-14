import React, { Component } from "react";

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
            className="session-form-input"
          />

          <textarea
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Tell your story..."
            className="session-form-input"
          />

          <button>Publish now</button>
        </form>
      </div>
    );
  }
}

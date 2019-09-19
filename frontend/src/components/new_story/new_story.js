import React, { Component } from "react";
import "./new_story.css";
import NewStoryImageContainer from "./new_story_image_container";
import ReactQuill from "react-quill";
import { withRouter } from "react-router-dom";

class NewStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      model: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  componentDidMount() {
    debugger;
    this.setState({ model: "" });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleModelChange(model) {
    this.setState({
      model: model
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let story = {
      title: this.state.title,
      body: this.state.model,
      authorId: this.props.sessionId,
      imageURL: this.props.imageURL
    };

    this.props.createStory(story).then(() => {
      this.props.removeNewStoryImageURL();
      this.props.history.push(`/users/${story.authorId}`);
    });
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

          <ReactQuill
            value={this.state.model}
            onChange={this.handleModelChange}
            modules={NewStory.modules}
            formats={NewStory.formats}
          />

          <NewStoryImageContainer />

          <button className="publish-button">Publish</button>
        </form>
      </div>
    );
  }
}

NewStory.formats = [
  "header",
  "size",
  "bold",
  "italic",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
  "code",
  "align"
];

NewStory.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" }
    ],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["code-block"],
    ["clean"]
  ]
};

export default withRouter(NewStory);

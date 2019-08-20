import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import "./new_story.css";
import NewStoryImageContainer from "./new_story_image_container";
import ReactQuill from "react-quill";

export default class NewStory extends Component {
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

          <ReactQuill
            value={this.state.model}
            onChange={this.handleModelChange}
            modules={NewStory.modules}
            formats={NewStory.formats}
            // dangerouslySetInnerHTML={{ __html: this.props.value }}
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
    [
      { list: "ordered" },
      { list: "bullet" }
      // { indent: "-1" },
      // { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["code-block"],
    ["clean"]
  ]
};

// new FroalaEditor(".selector", {
//   enter: $.FroalaEditor.ENTER_BR
// });

{
  /* <FroalaEditor
  tag="textarea"
  config={{
    placeholderText: "this is content !",
    charCounterCount: false
    // enter: $.FroalaEditor.ENTER_BR
  }}
  model={this.state.model}
  onModelChange={this.handleModelChange}
  placeholder="Tell your story..."
/> */
}

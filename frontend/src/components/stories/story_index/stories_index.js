import React, { Component } from "react";
import StoryIndexItem from "./stories_index_item";

export default class new_story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      errors: {}
    };
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    if (this.props.stories.length === 0) {
      return null;
    }

    return (
      <div className="story-index-container">
        <div className="story-index">
          <ul className="story-index-list">
            {this.props.stories.map(story => (
              <StoryIndexItem key={story._id} story={story} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
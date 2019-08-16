import React, { Component } from "react";
import StoryIndexItem from "./stories_index_item";

export default class featured_stories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

  }

  componentDidMount() {
    this.props.fetchAllUsers();

    this.props.fetchStories();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    if (this.props.stories.length === 0 || this.props.users.length === 0) {
      return null;
    }

    return (
      <div className="featured-story-container">

      </div>
    );
  }
}

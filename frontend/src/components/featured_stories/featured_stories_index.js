import React, { Component } from "react";
import FeaturedStoryIndexItem from "./featured_stories_index_item";
import "./featured_stories.css";

export default class FeaturedStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

    this.topStories = this.topStories.bind(this);
  }

  toggle() {
    this.setState({
      toggle: true
    });
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  topStories() {
    return this.props.stories.sort((a, b) =>
      a.likerIds.length > b.likerIds.length ? -1 : 1
    );
  }

  render() {
    if (this.props.stories.length === 0 || this.props.users.length === 0) {
      return null;
    }

    const sorted = this.topStories().slice(0, 4);

    return (
      <div className="featured-story-container">
        <div className="featured-story-index">
          <h2 className="featured-header"> Featured Blogs </h2>
          <ul className="featured-story-index-list">
            {sorted.map((story, i) => (
              <FeaturedStoryIndexItem
                i={i}
                key={story._id}
                story={story}
                currentUser={this.props.sessionUser}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                toggle={this.toggle.bind(this)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import StoryIndexItem from "../stories/story_index/stories_index_item";
import "../stories/story_index/stories.css";
import "./search_results.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.props.fetchStories(parsed.query);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      this.props.fetchStories(parsed.query);
    }
  }

  toggle() {
    this.setState({
      toggle: true
    });
  }

  renderStoriesNotFound() {
    return (
      <div className="stories-not-found">
        <h1 className="stories-not-found__message">
          We did not find any stories that match your search :(
        </h1>
      </div>
    );
  }

  renderStories() {
    return (
      <div className="story-index-container">
        <div className="story-index story-results">
          <p className="story-results__number">
            Your search found {this.props.stories.length} results!
          </p>
          <ul className="story-index-list">
            {this.props.stories.map(story => (
              <StoryIndexItem
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

  render() {
    if (this.props.stories.length === 0) {
      return this.renderStoriesNotFound();
    } else return this.renderStories();
  }
}

export default withRouter(SearchResults);

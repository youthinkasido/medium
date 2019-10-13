import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import StoryIndexItem from "../stories/story_index/stories_index_item";
import "../stories/story_index/stories.css";

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

  toggle() {
    this.setState({
      toggle: true
    });
  }

  render() {
    debugger;
    return (
      <div className="story-index">
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
    );
  }
}

export default withRouter(SearchResults);

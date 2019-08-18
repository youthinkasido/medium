import React, { Component } from "react";
import StoryIndexItem from "./stories_index_item";
import FeaturedStoryContainer from "../../featured_stories/featured_stories_container";
import "./stories.css";
import throttle from "lodash/throttle";

export default class NewStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

    this.featuredListFixedOnScroll = this.featuredListFixedOnScroll.bind(this);
  }

  featuredListFixedOnScroll(e) {
    this.featuredList =
      this.featuredList || document.getElementById("featured");
    if (window.scrollY > 132) {
      this.featuredList.classList.add("fixed");
    } else {
      this.featuredList.classList.remove("fixed");
    }
  }

  componentDidMount() {
    window.addEventListener(
      "scroll",
      throttle(this.featuredListFixedOnScroll, 25)
    );
    this.props.fetchAllUsers();
    this.props.fetchStories();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.featuredListFixedOnScroll);
  }

  toggle() {
    this.setState({
      toggle: true
    });
  }

  render() {
    if (this.props.stories.length === 0 || this.props.users.length === 0) {
      return null;
    }

    return (
      <div>
        <div className="story-index-container">
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
          <div id="featured" className="something">
            <FeaturedStoryContainer
            // className="featured-story-container"
            />
          </div>
        </div>
      </div>
    );
  }
}

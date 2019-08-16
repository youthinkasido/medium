import React, { Component } from "react";
import StoryIndexItem from "./stories_index_item";
import FeaturedStoryContainer from "../../featured_stories/featured_stories_container";
import "./stories.css";

export default class NewStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const myScroll = debounce(function() {
      let featuredList = document.getElementById("featured");
      if (window.scrollY > 132) {
        featuredList.classList.add("fixed");
      } else {
        featuredList.classList.remove("fixed");
      }
    }, 5);

    window.addEventListener("scroll", myScroll);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchStories();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
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

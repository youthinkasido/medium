import React from "react";
import { withRouter } from "react-router-dom";
import "./story_show.css";
import Follow from "../../follows/follow";
import Like from "../../likes/like";


class StoryShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId).then(() => {
      this.props.fetchUser(this.props.story.authorId);
    });
  }

  toggle () {
    this.setState({
      toggle: true
    });
  }

  render() {
    const { story, author } = this.props;
    return (
      <div className="story-show-container">
        <div className="story-show-header">
          <h1 className="story-show-title">{story.title}</h1>
          <span className="story-show-name">
            {author.firstName} {author.lastName}
          </span>
          <Follow
            story={story}
            currentUser={this.props.sessionUser} // should be sessionUser ?
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            author={author} 
            toggle={this.toggle.bind(this)} 
          />
          <p className="story-show-timestamp">{story.created_at}</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt="city image"
          className="story-show-img"
        />
        <div className="story-show-content">{story.body}</div>
        <Like 
          story={story} 
          currentUser={this.props.sessionUser} // should be sessionUser ?
          like={this.props.like} 
          unlike={this.props.unlike} 
          toggle={this.toggle.bind(this)} 
        />
      </div>
    );
  }
}
export default withRouter(StoryShow);

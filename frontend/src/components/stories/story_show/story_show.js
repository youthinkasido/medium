import React from "react";
import { withRouter } from "react-router-dom";
import "./story_show.css";

class StoryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleFollow = this.handleFollow.bind(this);
  }
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId).then(() => {
      this.props.fetchUser(this.props.story.authorId);
    });
  }

  render() {
    const { story, author } = this.props;
    return (
      <div className="story-show-container">
        <div className="story-show-header">
          <h1 className="story-show-title">{story.title}</h1>
          <p className="story-show-email">{author.email} </p>
          <p className="story-show-timestamp">{story.created_at}</p>
          {/* <button onClick={this.handleFollow}>Follow</button> */}
        </div>
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt="city image"
          className="story-show-img"
        />
        <div className="story-show-content">{story.body}</div>
      </div>
    );
  }
}

export default withRouter(StoryShow);

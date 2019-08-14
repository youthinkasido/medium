import React from "react";
import { withRouter } from "react-router-dom";

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
      <div className="story-container">
        <div className="story-header">
          <h1>{story.title}</h1>
          <p>{author.email}</p>
          <p>{story.created_at}</p>
          {/* <button onClick={this.handleFollow}>Follow</button> */}
        </div>
        <div className="story-content">{story.body}</div>
      </div>
    );
  }
}

export default withRouter(StoryShow);

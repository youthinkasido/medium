import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./story_show.css";
import CommentsContainer from "../../comments/comments_container";

class StoryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsOpen: false
    };

    this.openComments = this.openComments.bind(this);
  }
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId).then(() => {
      this.props.fetchUser(this.props.story.authorId);
    });
  }

  openComments() {
    this.setState({ commentsOpen: true });
  }

  scrollTo() {
    document.querySelector(".view-comments").scrollIntoView();
  }

  render() {
    const { story, author } = this.props;
    return (
      <div>
        <div className="story-show-container">
          <div className="story-show-header">
            <h1 className="story-show-title">{story.title}</h1>
            <p className="story-show-name">
              {author.firstName} {author.lastName}
            </p>
            <p className="story-show-timestamp">{story.created_at}</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="city image"
            className="story-show-img"
          />
          <div className="story-show-content">{story.body}</div>
          <div className="view-comments-button-container">
            <button onClick={this.openComments} className="view-comments">
              See Comments
            </button>
          </div>
        </div>
        <div className="comment-wrapper-container">
          {this.state.commentsOpen ? (
            <Fragment>
              <CommentsContainer /> {this.scrollTo()}
            </Fragment>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(StoryShow);

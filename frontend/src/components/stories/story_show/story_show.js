import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import "./story_show.css";
import CommentsContainer from "../../comments/comments_container";
import Follow from "../../follows/follow";
import Like from "../../likes/like";

class StoryShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsOpen: false,
      toggle: false
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

  toggle() {
    this.setState({
      toggle: true
    });
  }

  render() {
    const { story, author } = this.props;
    return (
      <div>
        <div className="story-show-container">
          <div className="story-show-header">
            <h1 className="story-show-title">{story.title}</h1>
            <p className="story-show-name">
              <Link to={`/users/${author._id}`}>
                {author.firstName} {author.lastName}
              </Link>
            </p>

            <Follow
              story={story}
              currentUser={this.props.sessionUser}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              author={author}
              toggle={this.toggle.bind(this)}
              className="story-show-follow"
            />

            <p className="story-date">
              {new Date(story.created_at)
                .toString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}
            </p>
          </div>
          <img
            src={this.props.story.imageURL}
            alt="city image"
            className="story-show-img"
          />
          <div className="story-show-content">{story.body}</div>

          <Like
            story={story}
            currentUser={this.props.sessionUser}
            like={this.props.like}
            unlike={this.props.unlike}
            toggle={this.toggle.bind(this)}
          />

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

import React from "react";
import { withRouter } from "react-router";
import "./like.css";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: ""
    };
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    if (this.props.story.likerIds.includes(this.props.currentUser.id)) {
      this.setState({
        liked: true
      });
    } else {
      this.setState({
        liked: false
      });
    }
  }

  handleLike(e) {
    e.preventDefault();

    if (this.props.currentUser.id) {
      if (
        this.state.liked
      ) {
        this.props.toggle();

        let index = this.props.story.likerIds.indexOf(
          this.props.currentUser.id
        );
        this.props.story.likerIds.splice(index, 1);

        this.props
          .unlike({
            liker: this.props.currentUser.id,
            likedStory: this.props.story._id
          })
          .then(() => {
            this.setState({
              liked: false
            });
          });
      } else if (
        !this.state.liked
      ) {
        this.props.toggle();
        this.props.story.likerIds.push(this.props.currentUser.id);

        this.props
          .like({
            liker: this.props.currentUser.id,
            likedStory: this.props.story._id
          })
          .then(() => {
            this.setState({
              liked: true
            });
          });
      }
    } else {
      this.props.history.push("/signup");
    }
  }

  render() {
    if (!this.props.story.likerIds) {
      return null;
    }

    return (
      <div className="like">
        {this.state.liked ? (
          <div className="like-container">
            <button className="like-button" onClick={this.handleLike}>
              <img src="./liked.svg" className="like-img" alt="like" />
            </button>
            <strong className="claps">
              {this.props.story.likerIds.length} claps
            </strong>
          </div>
        ) : (
          <div className="like-container">
            <button className="like-button" onClick={this.handleLike}>
              <img src="./unliked.svg" className="like-img" alt="like" />
            </button>
            <strong className="claps">
              {this.props.story.likerIds.length} claps
            </strong>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Like);

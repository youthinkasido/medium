import React from "react";
import { withRouter } from "react-router";

class Follow extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.author.followerIds.includes(this.props.currentUser.id)) {
      this.state = {
        followed: true
      };
    } else {
      this.state = {
        followed: false
      };
    }

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      if (this.state.followed) {
        this.props
          .unfollow({
            follower: this.props.currentUser.id,
            followee: this.props.author._id
          })
          .then(() => {
            this.setState({
              followed: false
            });
          });
      } else {
        this.props
          .follow({
            follower: this.props.currentUser.id,
            followee: this.props.author._id
          })
          .then(() => {
            this.setState({
              followed: true
            });
          });
      }
    } else {
      this.props.history.push("/signup");
    }
  }

  render() {
    return (
      <div className="follow">
        {this.props.author.followerIds.includes(this.props.currentUser.id) ? ( // if the author is being followed by the current user
          <button onClick={this.handleFollow}>Unfollow</button> // unfollow the author when button clicked
        ) : (
          <button onClick={this.handleFollow}>Follow</button> // follow the author when button clicked
        )}
      </div>
    );
  }
}

export default withRouter(Follow);

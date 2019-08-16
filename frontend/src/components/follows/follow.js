import React from "react";
import { withRouter } from "react-router";

import "./follow.css";

class Follow extends React.Component {
  constructor(props) {
    super(props);

    // if (this.props.author.followerIds) {
    //   if (this.props.author.followerIds.includes(this.props.currentUser.id)) {
    //     this.state = {
    //       followed: true
    //     };
    //   } else {
    //     this.state = {
    //       followed: false
    //     };
    //   }
    // }

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();

    if (this.props.currentUser.id) {
      if (!this.state) {
        if (this.props.author.followerIds.includes(this.props.currentUser.id)) {
          this.state = {
            followed: true
          };
        } else {
          this.state = {
            followed: false
          };
        }
      }

      if (this.state.followed) {
        this.props.toggle();

        let index = this.props.author.followerIds.indexOf(
          this.props.currentUser.id
        );
        this.props.author.followerIds.splice(index, 1);

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
        this.props.toggle();
        this.props.author.followerIds.push(this.props.currentUser.id);

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
    if (!this.props.author.followerIds) {
      return null;
    }

    debugger;

    return (
      <div className="follow">
        {this.props.author.followerIds.includes(this.props.currentUser.id) ? (
          <button className="unfollow-button" onClick={this.handleFollow}>
            Unfollow
          </button>
        ) : (
          <button className="follow-button" onClick={this.handleFollow}>
            Follow
          </button>
        )}
      </div>
    );
  }
}

export default withRouter(Follow);

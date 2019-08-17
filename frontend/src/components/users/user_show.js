import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Follow from "../follows/follow";
import StoryIndexItem from "../stories/story_index/stories_index_item";
import "./user_show.css";

import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import config from "../firebase-config";


class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarURL: "",
      image: "",
      progress: 0
    };

    this.state = {
      toggle: false
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchUserStories(this.props.match.params.userId);
  }

  toggle() {
    this.setState({
      toggle: true
    });
  }

  handleUploadStart = () => {
    this.setState({
      progress: 0
    });
  };

  handleUploadSuccess = filename => {
    this.setState({
      image: filename,
      progress: 100
    });

    firebase
      .storage()
      .ref("avatarimage")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({
          avatarURL: url
        })
      )
      .then(() => this.props.receiveNewAvatarImageURL(this.state.avatarURL));
  };

  handleProgress = progress => {
    this.setState({
      progress: progress
    });
  };

  render() {
    let name;
    let fullName;

    // lower.charAt(0).toUpperCase() + lower.substring(1);
    if (this.props.author.firstName) {
      name = this.props.author.firstName[0].toUpperCase();

      let first =
        this.props.author.firstName.charAt(0).toUpperCase() +
        this.props.author.firstName.substring(1);
      let last =
        this.props.author.lastName.charAt(0).toUpperCase() +
        this.props.author.lastName.substring(1);
      fullName = first + " " + last;
    }

    return (
      <div>
        <div className="user-show-container">
          <div className="user-info-container">
            <div className="username">{fullName}</div>
            {/* <p className='user-description'>{this.props.author.description}</p> */}
            <div className="user-description-container">
              <FileUploader
                accept="image/*"
                name="image"
                storageRef={firebase.storage().ref("avatarimage")}
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />

              <p className="user-description">
                Hello, welcome to my wonderous blog of wonders. I like dogs and
                pizza and session tokens. I have a pretty cool authentic yo yo
                collection that is sure to impress even the toughest of critics!
              </p>

              <div className="avatar-container">
                {this.props.avatarURL ? <img src={this.props.avatarURL} />
                : <div className="first-letter"> 
                  {name}
                </div>
                }
              </div>
            </div>

            <div className="button-container">
              <Follow
                currentUser={this.props.currentUser}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                author={this.props.author}
                toggle={this.toggle.bind(this)}
              />
              <Link
                to="#"
                className={`edit-profile ${
                  this.props.currentUser.id === this.props.author._id
                    ? "reveal"
                    : "hide"
                }`}
              >
                Edit Profile
              </Link>
            </div>
          </div>
          <hr className="user-show-hr" />
          <div className="user-story-container">
            <div className="story-index">
              <ul className="user-story-list">
                {this.props.stories.map(story => (
                  <StoryIndexItem
                    key={story._id}
                    story={story}
                    currentUser={this.props.currentUser}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggle={this.toggle.bind(this)}
                  />
                ))}
              </ul>
            </div>
          </div>
          );
        </div>
      </div>
    );
  }
}

export default withRouter(UserShow);

import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Follow from "../follows/follow";
import StoryIndexItem from "../stories/story_index/stories_index_item";
import "./user_show.css";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";


class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarURL: "",
      image: "",
      progress: 0,
      toggle: false,
      id: this.props.author._id,
      description: "Bio has not been created.",
      class: "hide-input"
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
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
          avatarURL: url,
          firstName: this.props.author.firstName,
          lastName: this.props.author.lastName,
          email: this.props.author.email,
          id: this.props.author._id
        })
      )
      .then(() => this.props.createUserAvatar(this.state));
  };

  handleProgress = progress => {
    this.setState({
      progress: progress
    });
  };

  update (field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();

    let author = Object.assign({}, this.state);
    this.props.updateUser(author);

    this.setState({
      class: "hide-input"
    });
  }

  handleShow (e) {
    e.preventDefault();

    this.setState({
      class: "reveal-input"
    });
  }

  render() {
    let name;
    let fullName;

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
              <div
                className={`${
                  this.props.currentUser.id === this.props.author._id
                    ? "reveal"
                    : "hide"
                }`}
              >
                <FileUploader
                  accept="image/*"
                  name="image"
                  storageRef={firebase.storage().ref("avatarimage")}
                  onUploadStart={this.handleUploadStart}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
              </div>

              <p className="user-description">
                {this.props.author.description}
              </p>

              <form
                onSubmit={this.handleSubmit}
                className={`${
                  this.props.currentUser.id === this.props.author._id
                    ? "reveal"
                    : "hide"
                } ${this.state.class}`} 
              >
                <textarea
                  onChange={this.update("description")}
                  value={this.state.description}
                />
                <button className="update-profile">Update</button>
              </form>

              <div className="avatar-container">
                {this.props.avatarURL ? (
                  <img src={this.props.avatarURL} />
                ) : (
                  <div className="first-letter">{name}</div>
                )}
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
                  this.props.currentUser.id === this.props.author._id && this.state.class === "hide-input"
                    ? "reveal"
                    : "hide"
                }`} 
                onClick={this.handleShow} 
              >
                Edit Bio
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

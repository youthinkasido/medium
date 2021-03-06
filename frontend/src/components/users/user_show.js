import React from "react";
import { withRouter, Link } from "react-router-dom";
import Follow from "../follows/follow";
import UserStoryShow from "./user_story_show";
import "./user_show.css";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarURL: this.props.avatarURL,
      image: "",
      progress: 0,
      toggle: false,
      id: this.props.match.params.userId,
      description: this.props.description,
      class: "hide-input"
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchUserStories(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
      this.props.fetchUserStories(this.props.match.params.userId);
    }
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
      .then(() => {
        this.props.createUserAvatar(this.state);
      });
  };

  handleProgress = progress => {
    this.setState({
      progress: progress
    });
  };

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      class: "hide-input",
      description: e.target.textContent.slice(0, -6)
    });

    let author = Object.assign(this.state);
    this.props.updateUser(author);
  }

  handleShow(e) {
    e.preventDefault();

    this.userDescription = document.querySelector(".user-description");

    this.setState(
      {
        class: "reveal-input",
        description: this.userDescription.innerHTML
      },
      () => {
        this.bioInput.focus();
        this.bioInput.setSelectionRange(
          this.bioInput.value.length,
          this.bioInput.value.length
        );
      }
    );
  }

  renderFollow() {

    if (this.props.currentUser.id === this.props.match.params.userId) {
      return null;
    } else {
      return (
        <Follow
          currentUser={this.props.currentUser}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          author={this.props.author}
          toggle={this.toggle.bind(this)}
        />
      );
    }
  }

  render() {
    if (Object.values(this.props.author).length === 0) {
      return null;
    }

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
        <div>
          <div className="user-show-container">
            <div className="user-info-container">
              <div className="username">About {fullName}</div>
              {/* <p className='user-description'>{this.props.author.description}</p> */}
              <div className="user-description-container">
                <div
                  className={`${
                    this.props.currentUser.id === this.props.author._id
                      ? "reveal"
                      : "hide"
                    }`}
                ></div>

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
                    ref={textarea => {
                      this.bioInput = textarea;
                    }}
                    className="user-bio-textarea"
                    onChange={this.update("description")}
                    value={this.state.description}
                  />
                  <button className="update-profile">Update</button>
                </form>
              </div>
              <p className="follower-count">
                {`${this.props.author.followerIds.length} ${
                  this.props.author.followerIds.length > 1 ||
                    this.props.author.followerIds.length === 0
                    ? "followers"
                    : "follower"
                  }`}
              </p>
              <div className="button-container">
                {this.renderFollow()}
                <Link
                  to="#"
                  className={`edit-profile ${
                    this.props.currentUser.id === this.props.author._id &&
                      this.state.class === "hide-input"
                      ? "reveal"
                      : "hide"
                    }`}
                  onClick={this.handleShow}
                >
                  Edit Bio
                </Link>
              </div>
            </div>
            <div className="avatar-container">
              <div className="overlay">
                <div className="avatar-upload-button">
                  <FileUploader
                    accept="image/*"
                    name="image"
                    storageRef={firebase.storage().ref("avatarimage")}
                    onUploadStart={this.handleUploadStart}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                  />
                </div>
              </div>

              {this.props.avatarURL ? (
                <img src={this.props.avatarURL} alt="avatar" />
              ) : (
                  <div className="first-letter">{name}</div>
                )}
            </div>
          </div>
        </div>

        <div className="user-story-index-container">
          <div className="user-story-index">
            <ul className="user-story-index-list">
              {this.props.stories.map(story => (
                <UserStoryShow
                  avatar={this.props.avatarURL}
                  author={this.props.author}
                  key={story._id}
                  story={story}
                  currentUser={this.props.currentUser}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  toggle={this.toggle.bind(this)}
                  deleteStory={this.props.deleteStory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserShow);

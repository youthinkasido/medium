import React from "react";
import { withRouter } from "react-router-dom";
import "./user_show.css";
import renderHTML from "react-render-html";

class UserStoriesShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.deleteStory = this.deleteStory.bind(this);
  }

  handleClick() {
    this.props.history.push(`/stories/${this.props.story._id}`);
  }

  read(body) {
    let wordLength = body.split(" ").length;
    let float = wordLength / 3.3 / 60;
    let minutes = Math.floor(float);

    if (minutes === 0) {
      return "1 min";
    }

    return `${minutes} min read`;
  }

  deleteStory() {
    let modal = document.getElementsByClassName("delete-story-modal")[0];
    let close = document.getElementsByClassName("close")[0];
    let confirmDelete = document.getElementsByClassName(
      "confirm-delete-story"
    )[0];

    modal.style.display = "block";

    close.addEventListener("click", () => {
      modal.style.display = "none";
    });

    confirmDelete.addEventListener("click", () => {
      this.props.deleteStory(this.props.story._id);
      modal.style.display = "none";
    });
  }

  renderDeleteButton() {
    if (this.props.currentUser.id === this.props.author._id) {
      return (
        <div className="user-story-show-delete" onClick={this.deleteStory}>
          Delete
        </div>
      );
    }
    return null;
  }

  render() {
    const { title, body, created_at } = this.props.story;

    const { author } = this.props;

    let firstName, lastName;
    firstName = author.firstName
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    lastName = author.lastName
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    return (
      <li className="user-story-show-list">
        <div className="delete-story-modal">
          <div className="delete-story-modal-content">
            <div className="delete-story-modal-content-topbar">
              <h1 className="delete-story-modal-heading">Delete story?</h1>

              <span className="close">X</span>
            </div>

            <div className="delete-story-modal-content-bottombar">
              <p>
                Are you sure you want to delete this story? This action is
                permanent and cannot be undone.
              </p>
              <button className="confirm-delete-story">Delete Story</button>
            </div>
          </div>
        </div>

        <div className="user-story-show-container">
          <div className="user-story-show">
            <div className="user-story-show-header">
              <div className="user-story-show-name">
                {firstName} {lastName}
              </div>
              {this.renderDeleteButton()}
            </div>
            <div className="user-story-show-date">
              {new Date(created_at)
                .toString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}{" "}
              · {this.read(body)}
            </div>
            <div className="user-story-show-link" onClick={this.handleClick}>
              <div className="user-story-show-image-container">
                <img
                  src={`${this.props.story.imageURL}`}
                  alt=""
                  className="user-story-show-img"
                />
              </div>
              <div className="user-story-show-title-container">
                <h1 className="user-story-show-title">{title}</h1>
              </div>
              <div className="user-story-show-body">
                {renderHTML(
                  `${this.props.story.body
                    .toString()
                    .split(" ")
                    .slice(0, 20)
                    .join(" ")}`
                )}
              </div>
              <p className="user-read-more">Read more...</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(UserStoriesShow);

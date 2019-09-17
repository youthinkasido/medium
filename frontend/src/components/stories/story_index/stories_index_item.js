import React from "react";
import Follow from "../../follows/follow";
import { Link, withRouter } from "react-router-dom";
import "./stories.css";
import renderHTML from "react-render-html";

class StoriesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/stories/${this.props.story._id}`);
  }



  read(body) {
    let wordLength = body.split(" ").length;
    let float = wordLength / 3.3 / 60;
    let minutes = Math.floor(float);

    if (minutes === 0) {
      return "";
    }

    return minutes + " " + `${minutes > 1 ? "min" : "min"}` + " " + "read";
  }

  render() {
    const { _id, title, body, created_at, authorId } = this.props.story;

    let author;

    if (this.props.users) {
      let users = Object.values(this.props.users);

      for (let i = 0; i < users.length; i++) {
        if (users[i]._id === authorId) {
          author = users[i];
        }
      }
    }

    return (
      <li className="story-list-item">
        {!this.props.users ? (
          <div className="story">
            <div>
              <Link to={`/stories/${_id}`}>
                <h1 className="story-title">{title}</h1>
              </Link>

              <Link to={`/stories/${_id}`}>
                {renderHTML(
                  `${this.props.story.body
                    .toString()
                    .split(" ")
                    .slice(0, 20)
                    .join(" ")} ...`
                )}
              </Link>
              <p className="story-date">
                {new Date(created_at)
                  .toString()
                  .split(" ")
                  .slice(1, 4)
                  .join(" ")}
              </p>
              {this.read(body)}
            </div>

            <Link to={`/stories/${_id}`}>
              <img
                src={`${this.props.story.imageURL}`}
                alt=""
                className="story-img"
              />
            </Link>
          </div>
        ) : (
            <div className="story">
              <div>
                <Link to={`stories/${_id}`}>
                  <h1 className="story-title">{title}</h1>
                </Link>
                <Link to={`stories/${_id}`}>
                  <div className="story-body">
                    {renderHTML(
                      `${this.props.story.body
                        .toString()
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")} ...`
                    )}
                  </div>
                </Link>
                <div className="story-index-name">
                  <Link to={`/users/${author._id}`}>
                    {author.firstName} {author.lastName}
                  </Link>
                </div>
                <Follow
                  story={this.props.story}
                  currentUser={this.props.currentUser}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  author={author}
                  users={this.props.users}
                  toggle={this.props.toggle}
                />
                <p className="index-story-date">
                  {new Date(created_at)
                    .toString()
                    .split(" ")
                    .slice(1, 4)
                    .join(" ")}{" "}
                  · {this.read(body)}
                </p>
              </div>

              <Link to={`stories/${_id}`}>
                <img
                  src={`${this.props.story.imageURL}`}
                  alt=""
                  className="story-img"
                />
              </Link>
            </div>
          )}
      </li>
    );
  }
}

export default withRouter(StoriesIndexItem);

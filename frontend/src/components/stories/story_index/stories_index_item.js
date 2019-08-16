import React from "react";
import Follow from "../../follows/follow";
import { Link, withRouter } from "react-router-dom";
import "./stories.css";

class StoriesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/stories/${this.props.story._id}`);
  }

  render() {
    const { _id, title, body, created_at, authorId } = this.props.story;

    let author;
    let users = Object.values(this.props.users);

    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === authorId) {
        author = users[i];
      }
    }

    return (
      <li className="story-list-item">
        <div>
          <Link to={`stories/${_id}`}>
            <h1 className="story-title">{title}</h1>
          </Link>

          <Link to={`stories/${_id}`}>
            <p className="story-body">
              {body
                .split(" ")
                .slice(0, 25)
                .join(" ")}
            </p>
          </Link>
          <div className="index-author-follow">
          <p className="story-index-inline">{author.firstName} {author.lastName}</p>
          <Follow
            story={this.props.story}
            currentUser={this.props.currentUser}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            author={author}
            users={this.props.users}
            toggle={this.props.toggle}
          />
          </div>
          <p className="story-date">
            {new Date(created_at)
              .toString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}
          </p>
        </div>

        <Link to={`stories/${_id}`}>
          <img
            src="https://images.pexels.com/photos/2332257/pexels-photo-2332257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="city image"
            className="story-img"
          />
        </Link>
      </li>
    );
  }
}

export default withRouter(StoriesIndexItem);

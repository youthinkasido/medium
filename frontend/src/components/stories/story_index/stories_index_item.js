import React from "react";
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
    const { _id, title, body, created_at } = this.props.story;
    return (
      <li className="story-list-item" onClick={this.handleClick}>
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
          <p className="story-body">{new Date(created_at).toString()}</p>
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

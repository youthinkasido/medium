import React from "react";
import { Link } from "react-router-dom";
import "./stories.css";

export default class StoriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { _id, title, body, created_at } = this.props.story;
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

import React from "react";
import "./stories.css";

export default function StoriesIndexItem(props) {
  return (
    <li className="story-list-item">
      <div>
        <h1 className="story-title">{props.story.title}</h1>
        <p className="story-body">{props.story.body}</p>
        <p className="story-body">{new Date(props.story.created_at).toString()}</p>
      </div>
      <img
        src="https://images.pexels.com/photos/2332257/pexels-photo-2332257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="city image"
        className="story-img"
      />
    </li>
  );
}

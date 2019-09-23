import React, { Component } from "react";
import "./search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      suggestions: [],
      stories: []
    };
    this.update = this.update.bind(this);
    // this.renderSuggestions = this.renderSuggestions.bind(this)
  }

  update(e, field) {
    this.setState(
      {
        [field]: e.target.value,
        suggestions: ""
      },
      () => this.props.fetchStories(this.state.searchInput)
    );
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="search"
          className="search-input"
          type="text"
          onChange={e => this.update(e, "searchInput")}
          value={this.state.searchInput}
        />
      </div>
    );
  }
}

export default Search;

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.update = this.update.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  update(e, field) {
    this.setState({
      [field]: e.target.value,
      suggestions: ""
    });
  }

  handleKeyDown(e) {
    debugger;
    if (e.key === "Enter") {
      this.props.history.push(`/search?query=${this.state.searchInput}`);
    }
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
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default withRouter(Search);

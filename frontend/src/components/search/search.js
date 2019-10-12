import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  update(e, field) {
    this.setState({
      [field]: e.target.value,
      suggestions: ""
    });
  }

  handleSearch() {
    debugger;
    this.props.history.push(`/search?query=${this.state.searchInput}`);
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
        <button onClick={this.handleSearch}>search</button>
      </div>
    );
  }
}

export default withRouter(Search);

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

class SearchResults extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.props.fetchStories(parsed.query);
  }

  render() {
    return <div>search results here</div>;
  }
}

export default withRouter(SearchResults);

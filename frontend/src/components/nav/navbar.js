import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNewStory = this.handleNewStory.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();

    this.setState({
      clicked: false
    });
    this.props.logout();
  }

  handleNewStory(e) {
    e.preventDefault();

    this.setState({
      clicked: false
    });
  }

  handleClick(e) {
    e.preventDefault();

    if (!this.state.clicked) {
      this.setState({
        clicked: true
      });
    } else {
      this.setState({
        clicked: false
      });
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">Well Done</div>
          {this.props.loggedIn ? (
            <div className="dropdown">
              <button className="dropbtn" onClick={this.handleClick}>
                <i className="fas fa-user-circle" />
              </button>
              <div
                className={`dropdown-content ${
                  this.state.clicked ? "reveal" : "hide"
                }`}
              >
                <div className="dropdown-logout">
                  <button onClick={this.handleLogout}>Sign out</button>
                </div>
                <div className="dropdown-logout">
                  <Link to={"/new-story"} onClick={this.handleNewStory}>New Story</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-auth-container">
              <div className="navbar-signin">
                <Link to={"/login"}>Sign In</Link>
              </div>
              <div className="navbar-signup">
                <Link to={"/signup"}>Get Started</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;

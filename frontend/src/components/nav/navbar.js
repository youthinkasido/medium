import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      reload: false,
      email: "",
      password: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNewStory = this.handleNewStory.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchCurrentUser(this.props.user.id);
  }

  handleLogout(e) {
    e.preventDefault();

    this.setState({
      clicked: false
    });

    this.props.logout();
    this.props.history.push("/");
  }

  handleNewStory(e) {
    e.preventDefault();

    this.setState({
      clicked: false
    });
    this.props.history.push("/new-story");
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

  handleProfile(e) {
    e.preventDefault();

    this.setState({
      clicked: false
    });


    this.props.history.push(`/users/${this.props.currentUser._id}`);
  }


  render() {
    document.addEventListener('click', (e) => {
      let dropdownContent = document.getElementById('dropdown-content')
      if (dropdownContent && e.target.id !== 'dropdown' && !dropdownContent.classList.contains('hide')) {
        this.setState({ clicked: false })
      }
    })

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <div className="navbar-logo">Well Done</div>
          </Link>
          {this.props.loggedIn ? (
            <div className="dropdown">
              <button className="dropbtn" onClick={this.handleClick}>
                {this.props.user && this.props.user.avatarURL ? (
                  <img id="dropdown"
                    className="nav-user-icon"
                    alt="avatar"
                    src={this.props.user.avatarURL}
                  />
                ) : (
                    <i id="dropdown" className="fas fa-user-circle" />
                  )}
              </button>
              <div id="dropdown-content"
                className={`dropdown-content ${this.state.clicked ? 'reveal' : 'hide'}`}

              >
                <div className="dropdown-item" onClick={this.handleNewStory}>
                  <button>New Story</button>
                </div>
                <div className="dropdown-item">
                  <button onClick={this.handleProfile}>Profile</button>
                </div>
                <div className="dropdown-item">
                  <button onClick={this.handleLogout}>Sign out</button>
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
      </nav >
    );
  }
}

export default withRouter(NavBar);

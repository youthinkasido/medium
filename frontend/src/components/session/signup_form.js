import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderEmailErrors() {
    return (
      <ul className="signup-errors">
        {Object.keys(this.state.errors).map((error, i) => {
          if (error === "email") {
            return <li key={`error-${i}`}>{this.state.errors[error]}</li>
          }
        })}
      </ul>
    );
  }

  renderPasswordErrors() {
    return (
      <ul className="signup-errors">
        {Object.keys(this.state.errors).map((error, i) => {
          if (error === "password") {
            return <li key={`error-${i}`}>{this.state.errors[error]}</li>
          }
        })}
      </ul>
    );
  }

  renderConfirmErrors() {
    return (
      <ul className="signup-errors">
        {Object.keys(this.state.errors).map((error, i) => {
          if (error === "password2") {
            return <li key={`error-${i}`}>{this.state.errors[error]}</li>
          }
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1 className="signup-header">Sign Up!</h1>
          <div className="session-form-container">
            <br />
            {this.renderEmailErrors()}
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              className="session-form-input"
            />
            <br />
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.update("firstName")}
              placeholder="First Name"
              className="session-form-input"
            />
            <br />
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.update("lastName")}
              placeholder="Last Name"
              className="session-form-input"
            />
            <br />
            {this.renderPasswordErrors()}
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              className="session-form-input"
            />
            <br />
            {this.renderConfirmErrors()}
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
              className="session-form-input"
            />
            <br />
            <input
              className="session-form-button"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);

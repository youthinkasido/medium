import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderEmailErrors = this.renderEmailErrors.bind(this);
    this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
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
      password: this.state.password
    };

    this.props.login(user);
  }

  renderEmailErrors() {
    return (
      <ul className="login-errors">
        {Object.keys(this.state.errors).map((error, i) => {
          if (error === "email") {
            return <li key={`error-${i}`}>{this.state.errors[error]}</li>;
          }
          return null;
        })}
      </ul>
    );
  }

  renderPasswordErrors() {
    return (
      <ul className="login-errors">
        {Object.keys(this.state.errors).map((error, i) => {
          if (error === "password") {
            return <li key={`error-${i}`}>{this.state.errors[error]}</li>;
          }
          return null;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1 className="login-header">Welcome Back!</h1>
          <div className="session-form-container">
            {this.renderEmailErrors()}
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
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
            <input
              type="submit"
              value="Submit"
              className="session-form-button"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);

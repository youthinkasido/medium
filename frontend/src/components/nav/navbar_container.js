import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    avatarURL: state.session.user.avatarURL

  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import { fetchAllUsers, fetchCurrentUser } from "../../actions/user_actions";

import NavBar from "./navbar";

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    avatarURL: state.entities.users.avatarURL,
    users: state.entities.users.all,
    user: state.session.user,
    currentUser: state.entities.users.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

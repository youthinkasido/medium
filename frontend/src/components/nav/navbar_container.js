import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAllUsers } from "../../actions/user_actions";

import NavBar from "./navbar";

const mapStateToProps = ({ session, entities }) => {
  return {
    loggedIn: session.isAuthenticated,
    avatarURL: session.user.avatarURL,
    users: entities.users.all,
    user: session.user
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

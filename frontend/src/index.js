import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";

import Root from "./components/root";

import configureStore from "./store/store";

import jwt_decode from "jwt-decode";

import { setAuthToken } from "./util/session_api_util";

import { logout } from "./actions/session_actions";
import { follow } from "./actions/follow_actions";
import { fetchAllUsers } from "./actions/user_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop
  const root = document.getElementById("root");
  window.follow = follow;
  window.fetchAllUsers = fetchAllUsers;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});

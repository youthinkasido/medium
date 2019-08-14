import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavbarContainer from "./nav/navbar_container";
import NewStoryContainer from "./new_story/new_story_container";
import StoriesIndexContainer from "./stories/stories_index_container";

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={StoriesIndexContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/new-story" component={NewStoryContainer} />
    </Switch>
  </div>
);

export default App;

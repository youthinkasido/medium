import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavbarContainer from "./nav/navbar_container";
import NewStoryContainer from "./new_story/new_story_container";
import StoriesIndexContainer from "./stories/story_index/stories_index_container";
import StoryShowContainer from "./stories/story_show/story_show_container";
import UserShowContainer from "./users/user_show_container";
import SearchResultsContainer from "./search_results/search_results_container";
import About from "./about/about";

const App = () => (
  <div>
    <NavbarContainer />
    <Route exact path="/stories/:storyId" component={StoryShowContainer} />
    <Switch>
      <Route exact path="/" component={StoriesIndexContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/search" component={SearchResultsContainer} />
      <ProtectedRoute exact path="/new-story" component={NewStoryContainer} />
      <Route exact path="/users/:userId" component={UserShowContainer} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>
);

export default App;

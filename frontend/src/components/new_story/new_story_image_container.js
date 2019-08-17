import { connect } from "react-redux";
import NewStoryImage from "./new_story_image";
import { receiveNewStoryImageURL } from "../../actions/story_actions";

const msp = state => {
  return {
    test: true
  };
};

const mdp = dispatch => {
  return {
    receiveNewStoryImageURL: imgURL => dispatch(receiveNewStoryImageURL(imgURL))
  };
};

export default connect(
  msp,
  mdp
)(NewStoryImage);

import React from "react";
import { withRouter } from "react-router-dom";

import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import config from "../firebase-config";

firebase.initializeApp(config);

class StoryImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      progress: "",
      imageURL: "",
      progress: 0
    };
  }

  handleUploadStart = () => {
    this.setState({
      progress: 0
    });
  };

  handleProgress = progress => {
    this.setState({
      progress: progress
    });
  };


  handleUploadSuccess = filename => {
    debugger;
    this.setState({
      image: filename,
      progress: 100
    });

    // if (filename.size)

    firebase
      .storage()
      .ref("storyimage")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({
          imageURL: url
        })
      )
      .then(() => this.props.receiveNewStoryImageURL(this.state.imageURL));
  };

  handleUploadError = () => { 
    alert('error')
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="progress-bar">
          <label>Progress</label>
          <p className="image-progress">{this.state.progress}%</p>
        </div>

        <br />
        <br />
        <br />

   

        {<div className={ this.state.image ? 'show-story-image': 'hide-story-image' }><img src={this.state.imageURL} /></div>}
        {/* {this.state.image && <img src={this.state.imageURL} />} */}
        <div className="file-uploader">
          <img src="./addimage.svg" />
          <FileUploader
            accept="image/*"
            name="image"
            storageRef={firebase.storage().ref("storyimage")}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            // onUploadError={this.handleUploadError}
            maxHeight={400}
            maxWidth={600}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(StoryImageUpload);

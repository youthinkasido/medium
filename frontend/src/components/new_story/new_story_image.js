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

  removePhoto = () =>{
    this.setState({
      image: "",
      imageURL: "",
      progress: 0
    })
  }

  render() {

    return (
      <div>
        {/* <div className="progress-bar">
          <label>Progress</label>
          <p className="image-progress">{this.state.progress}%</p>
        </div> */}
        {
          <div
            className={
              this.state.image && this.state.progress === 100
                ? "show-story-image"
                : "hide-story-image"
            }
          >
            <img src={this.state.imageURL} />
            <img src="./remove.svg" onClick={this.removePhoto} />
          </div>
        }

  
        <div className={this.state.image ? 'hide-camera': "show-add-photo"}>
          <img id="camera" src="./addimage.svg" />
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

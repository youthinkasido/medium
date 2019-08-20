import React from "react";
import { withRouter } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import config from "../firebase-config";
import { css } from "@emotion/core";
import { BarLoader } from "react-spinners";

firebase.initializeApp(config);

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class StoryImageUpload extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      image: "",
      imageURL: "",
      progress: 0
    };

    this.removePhoto = this.removePhoto.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    debugger;
    return true;
  }

  handleUploadStart = () => {
    this.setState({
      progress: 0,
      image: "",
      imageURL: "",
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

    let imageURL = this.state.imageURL

      //  this.setState({
      //    progress: 0,
      //    image: "",
      //    imageURL: ""
      //  });
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
      .then(() => {
        this.props.receiveNewStoryImageURL(imageURL);
      });
  }
  

  handleUploadError = () => { 
    alert('error')
  }


  removePhoto = () => {
    this.setState({
      image: "",
      imageURL: "",
      progress: 0
    }, () => {
      console.log(this.state)
    });

    debugger;
  }

  render() {
    return (
      <div>
        <div
          className={`progress-bar ${
            this.state.progress > 0 && this.state.progress < 100
              ? "reveal"
              : "hide-progress"
          }`}
        >
          <p className="image-progress">{this.state.progress}%</p>
        </div>
        <div className="sweet-loading">
          <BarLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={this.state.progress < 100 && this.state.progress > 0}
          />
        </div>
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

        <div
          className={this.state.image ? "hide-camera" : "show-add-photo"}
        >
          <img id="camera" src="./addimage.svg" />

          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            storageRef={firebase.storage().ref("storyimage")}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            // onUploadError={this.handleUploadError}
            // maxHeight={1100}
            // maxWidth={1100}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(StoryImageUpload);
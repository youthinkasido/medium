import React from 'react'
import {withRouter} from 'react-router-dom'

import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import config from '../firebase-config';


firebase.initializeApp(config);



class StoryImageUpload extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            image: '',
            progress: '',
            imageURL: '',
            progress: 0
        }
    }

    handleUploadStart = () => {
        this.setState({
            progress: 0
        })
    }

    handleUploadSuccess = filename => {

        this.setState({
            image: filename,
            progress: 100
        })
        
        firebase.storage().ref('storyimage').child(filename).getDownloadURL()
        .then(url => this.setState({
            imageURL: url
        }))
    }

    handleProgress = progress => {
        this.setState({
            progress:progress
        })
    }


    render(){

        console.log(this.state)
        return (
          <div>
            <label>Progress</label>
            <p className="image-progress">{this.state.progress}%</p>

            <br />
            <br />
            <br />

            <label>Image:</label>
            {this.state.image && <img src={this.state.imageURL} />}

            <FileUploader
              accept="image/*"
              name="image"
              storageRef={firebase.storage().ref("storyimage")}
              onUploadStart={this.handleUploadStart}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </div>
        );
    }
}

export default withRouter(StoryImageUpload)


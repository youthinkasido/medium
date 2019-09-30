# [WellDone](https://very-well-done-app.herokuapp.com/)
Well Done is an online publishing platform inspired by [Medium](https://medium.com/).

Well done was built with **React, Redux, MongoDB, Express.js, Axios, Webpack, Node.js and Google Firebase**.
  
## FEATURES

### Featured Stories
The Featured Stories Component fetches the most relevant stories by showing the most popular stories based on likes received.

```javascript 
      
topStories() {
  return this.props.stories.sort((a, b) =>
    a.likerIds.length > b.likerIds.length ? -1 : 1
  );
}
```

![splash](https://www.awesomescreenshot.com/upload//1054043/d9196127-a12b-43e8-4b1f-49cb002b3d2d.png)



### Comments
Users can comment on their favorite stories. Each new comment appears instantly by triggering the component to re-render by modifying the Redux comments slice of state.

```javascript 
     componentDidMount() {
        this.props
          .fetchAllUsers()
          .then(() => this.props.fetchStoryComments(this.props.story._id))
          .then(() => {
            this.setState({ commentsLoaded: true });
            this.scrollTo();
          });
      }
```
      
![comments](https://www.awesomescreenshot.com/upload//1054043/328bc2e4-65ba-43aa-49f8-e969df10d376.png)


### User Profile
Users can view their created stories, edit their bio, and upload an avatar photo.
Avatar photos are uploaded using react-firebase-file-uploader. A return URL is then stored in the MongoDB for later
reference of the photo.

```javascript 
     firebase
      .storage()
      .ref("avatarimage")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({
          avatarURL: url,
          firstName: this.props.author.firstName,
          lastName: this.props.author.lastName,
          email: this.props.author.email,
          id: this.props.author._id
        })
      )
      .then(() => {
        this.props.createUserAvatar(this.state);
      });
  };
```

![userProfile](https://www.awesomescreenshot.com/upload//1054043/34ed02de-d51c-4f99-5955-6f13a8b2b46d.png)



* Create a Story - Users can create a story with a rich text editor.

* User Authentication - Users can sign up, login or demo the site.

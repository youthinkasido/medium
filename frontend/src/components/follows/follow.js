import React from 'react';
import {withRouter} from 'react-router'

class Follow extends React.Component {
    constructor(props) {
        super(props);
        // check to see if author is followed by current user
        if (!this.props.author.followerIds.includes(this.props.currentUserId)) { // checks to see if the current user is following the auther already
            this.state = {
                followed: false
            }
        } else {
            this.state = {
                followed: true
            }
        };

        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(e) {
        debugger
        e.preventDefault();
       if (this.props.currentUser){
           
            if (this.state.followed) {
                
               
                debugger;
                this.props.unfollow({ // unfollow passed in from storyindexcontainer, passed inline through story index.
                    follower: this.props.currentUser.id, // gets currentUser from props passed in from StoryIndex / container
                    followee: this.props.author._id // gets currentUser from props passed in from StoryIndex / container
                })
                .then(() => {
                    this.setState({
                    followed: false
                    });
                });
            } else {
                debugger
                this.props.follow({
                    follower: this.props.currentUser.id, 
                    followee: this.props.author._id
                }).then(() => {
                    debugger
                    this.setState({
                        followed: true
                    });
                });
            };
        }else{
            this.props.history.push('/signup')
            
        }
        
    }

    render() {
        debugger
        return (
            <div className='follow'>
                {(this.props.author.followerIds.includes(this.props.currentUser.id)) ? ( // if the author is being followed by the current user
                    <button onClick={this.handleFollow}>Unfollow</button> // unfollow the author when button clicked
                ) : (
                    <button onClick={this.handleFollow}>Follow</button> // follow the author when button clicked
                )}
            </div >
        )
    }
}

export default withRouter(Follow)
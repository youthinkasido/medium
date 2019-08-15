import React from 'react';

class Like extends React.Component { // story: id, currentUser: id , like: , unlike: takes in liker and story id , comes in as prop
    constructor(props) {
        super(props);

        if (!this.props.story.likerIds.includes(this.props.currentUser.id)) {
            this.state = {
                liked: false
            }
        } else {
            this.state = {
                liked: true
            }
        };
        this.handleLike = this.handleLike.bind(this);
    }
    handleLike(e) {
        e.preventDefault();

        if (this.state.liked) {
            this.props.unlike({
                liker: this.props.currentUser.id,
                likedStory: this.props.story.id
            }).then(() => {
                this.setState({
                    liked: false
                });
            });
        } else {
            this.props.like({
                liker: this.props.currentUser.id,
                likedStory: this.props.story.id
            }).then(() => {
                this.setState({
                    liked: true
                });
            });
        };
    }

    render() {
        return (
            <div className="like-button">
                {(this.state.liked) ? (
                    <div>
                        <button
                            onClick={this.handleLike}
                            className={`like-btn ${this.props.story.author === this.props.currentUser.id ? "like-hide" : "reveal"}`}
                            
                        ><img src='./liked.svg' /></button>
                        <strong>{this.props.story.likerIds.length} claps</strong>
                    </div>
                ) : (
                        <div>
                            <button
                                onClick={this.handleLike}
                                className={`like-btn ${this.props.story.author === this.props.currentUser.id ? "like-hide" : "reveal"}`}
                            ><img src='unliked.svg' /></button>
                            <strong>{this.props.story.likerIds.length} claps</strong>
                        </div>
                    )}
            </div >
        )
    }
}

export default Like;
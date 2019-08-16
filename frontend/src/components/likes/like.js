import React from "react";
import { withRouter } from "react-router";
import './like.css';

class Like extends React.Component {
    constructor(props) {
        super(props);

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(e) {
        e.preventDefault();

        if (this.props.currentUser.id) {
            if (!this.state) {
                if (this.props.story.likerIds.includes(this.props.currentUser.id)) {
                    this.state = {
                        liked: true
                    };
                } else {
                    this.state = {
                        liked: false
                    };
                }
            }

            if (this.state.liked) {
                this.props.toggle(); // should trigger a re render of the parent component, passed in through inline props in stories_index_item

                let index = this.props.story.likerIds.indexOf(this.props.currentUser.id); // index of currentUsers id within story's followers array
                this.props.story.likerIds.splice(index, 1);

                this.props.unlike({
                    liker: this.props.currentUser.id,
                    likedStory: this.props.story._id
                })
                .then(() => {
                    this.setState({
                        liked: false
                    });
                });
            } else {
                this.props.toggle();
                this.props.story.likerIds.push(this.props.currentUser.id);

                this.props.like({
                    liker: this.props.currentUser.id,
                    likedStory: this.props.story._id
                })
                .then(() => {
                    this.setState({
                        liked: true
                    });
                });
            }
        } else {
            this.props.history.push("/signup");
        }
    }

    render() {
        if (!this.props.story.likerIds) {
            return null;
        }

        return (
            <div className="like">
                {this.props.story.likerIds.includes(this.props.currentUser.id) ? (
                    <div className='like-container'>
                        <button className="like-button" onClick={this.handleLike}>
                            <img src='./liked.svg' className='like-img'/>
                        </button>
                        <strong className='claps'>{this.props.story.likerIds.length} claps</strong>
                    </div>
                ) : (
                        <div className='like-container'>
                        <button className='like-button' onClick={this.handleLike}>
                            <img src='./unliked.svg' className='like-img'/>
                        </button>
                        <strong className='claps'>{this.props.story.likerIds.length} claps</strong>
                    </div>
                    )}
            </div>
        );
    }
}

export default withRouter(Like);
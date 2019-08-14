import * as APIUtil from '../util/like_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    };
}

export const removeLike = like => ({
    type: REMOVE_LIKE,
    likeId: like.id
});

export const like = (data) => dispatch => APIUtil.like(data) // makes an axios request with the req body and then dispatches to the reducer
    .then( like => dispatch(receiveLike(like)))
    
export const unlike = data => dispatch => APIUtil.unlike(data) 
    .then(like => dispatch(removeLike(like)));
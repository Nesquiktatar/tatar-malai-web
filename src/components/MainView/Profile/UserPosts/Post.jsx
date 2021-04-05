import React from 'react';
import * as s from './UserPosts.styles';

const Post = (props) => {
    return (
        <s.Post>
            <div>
            {props.message}
            <p><span>Likes : 5♥</span></p>
            </div>
        </s.Post>
    )
}

export default Post;
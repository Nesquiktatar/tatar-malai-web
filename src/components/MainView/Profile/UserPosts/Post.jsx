import React from 'react';
import * as s from './UserPosts.styles';

const Post = (props) => {
    return (
        <s.Post>
            {props.message}
            <p><span>Likes : 5♥</span></p>
        </s.Post>
    )
}

export default Post;
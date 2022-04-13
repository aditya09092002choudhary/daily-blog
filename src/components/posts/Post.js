import React from 'react';
import './post.css';

const Post = (props) => {
    return (
        <div className='post-container'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Post;

import React from 'react';

const Compose = (props) => {
    return (
        <div className='post-container'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Compose;

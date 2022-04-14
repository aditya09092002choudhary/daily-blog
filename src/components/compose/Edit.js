import React from 'react';
import './compose.css';
const Edit = (props) => {
    return (
        <div className='compose-container'>
            <div className="compose">
                <h1>Edit</h1>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <div className="input">
                        <input type="text" name="input" id='input' placeholder='Title...' />
                    </div>
                </div>
                <div className="content-container">
                    <label htmlFor="content">Content</label>
                    <div className="content">
                        <textarea name="content" id="content" cols="30" rows="10" placeholder='Content...'></textarea>
                    </div>
                </div>
                <div className="button-container">
                    <a href="/"><button style={{background:"darkcyan"}}>Submit</button></a>
                    <a href="/"><button>Cancel</button></a>
                </div>
            </div>
        </div>
    );
}

export default Edit;

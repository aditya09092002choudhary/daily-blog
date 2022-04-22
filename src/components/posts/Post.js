import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './post.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const baseUrl="https://daily-blog-backend.herokuapp.com/posts/";
// const baseUrl = "http://localhost:1337/posts/";
const Post = () => {
    const { id } = useParams();
    // console.log(id);
    const endpoint = baseUrl+id;
    const [blog, setblog] = useState({});
    useEffect(() => {
        axios.get(endpoint).then((response)=>{
            // console.log(response);
            setblog(response.data);
        })
    }, []);
    return (
        <div className='post-container'>
            <div className="exit"><a href="/"><FontAwesomeIcon icon={faXmark} /></a></div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
}

export default Post;

import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './post.css';
import axios from 'axios';
// const baseUrl="https://daily-blog-backend.herokuapp.com/posts/";
const baseUrl = "http://localhost:4000/posts/";
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
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
}

export default Post;

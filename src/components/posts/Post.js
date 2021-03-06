import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './post.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const baseUrl="https://daily-blog-backend.herokuapp.com/posts/";
// const baseUrl = "http://localhost:1337/posts/";
const Post = (props) => {
    const { id } = useParams();
    // console.log(id);
    const endpoint = baseUrl+id;
    const [blog, setblog] = useState({});
    const [cnt, setcnt] = useState(0);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Post | Daily Blogs";
        // window.location.reload();
        // document.querySelector("#root").style.display="grid";
        axios.get(endpoint).then((response)=>{
            // console.log(response);
            setblog(response.data);
            setcnt(1);
        })
    }, []);
    function handleExit(){
        document.querySelector(".post-inner-container").classList.add("scaleOut");
        setTimeout(()=>{
            window.history.back();
        },300);
    }
    return  <div className='post-outer container'>
        <div className='post-container'>
            <h1 className="heading">Post</h1>
    {((cnt!==0)?
            <div className="post-inner-container scaleIn">

            <div className="exit"><span onClick={handleExit}><FontAwesomeIcon icon={faXmark} /></span></div>
            <div className="image-container">
            {(blog.image.length!==0)?<img src={blog.image[0].base64} alt="post-image" />:(blog.imageLink!="")?<img src={blog.imageLink} alt="image" />:<img src='https://icon-library.com/images/img-icon/img-icon-0.jpg'  alt='post-image'/>}

            </div>
            <h1><FontAwesomeIcon icon={faCaretRight} /> {blog.title}</h1>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span><span className="addDate" style={{display:(blog.author===""||blog.author_id==="")?"none":"inherits"}}>posted <span style={{display:(blog.author==="")?"":"inline"}}>by </span> <h5 style={{display:(blog.author==="")?"":"inline"}}><NavLink to={`/author/${blog.author_id}`} style={{color:"black"}}>{blog.author}</NavLink></h5> on {blog.addDate}</span></span>
            {(props.uid===blog.author_id&&blog._id!=="627762b4bc58b9e10c6ff819")?<span className='editPost' style={{display:(props.login===1)?"unset":"none"}}><a href={"/edit/"+blog._id} >Edit&nbsp;&nbsp; <FontAwesomeIcon icon={faPen} /> </a></span>:""}
            </div>

            <p style={{whiteSpace:"break-spaces"}}>{blog.content}</p>
        </div>:
        <img width={70} style={{margin:"30px auto",display:"block"}} src="https://c.tenor.com/whis5JX19ycAAAAC/loading-load.gif" alt="fetching" />
        )}
        </div>
        </div>
    }

export default Post;

import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
 const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";

const Home = (props) => {
    const logs=props.login;
    const [content, setcontent] = useState([]);
    // content length
    const[leng,setLength]=useState(0);
        useEffect(() => {
            document.title = "Daily Blogs"
            document.querySelectorAll('.nav-items')[1].classList.add('liStyle');
        axios.get(baseUrl).then((response)=>{
            // console.log(response);
            setcontent(response.data);
        })
        setLength(content.length);
    },[]);


    // -----------------------------------------  Delete post --------------------------------

    const[remove,setremove] = useState(false);
    const[did,setdid] = useState(0);

    function deleteBlog(){
        axios.get(baseUrl+"remove/"+did).then((res)=>{
            window.location.reload();
        })
    }
    
    if(remove===true){
        deleteBlog();
    }
    function setter(e){
        setdid(e);
        const tmp = window.confirm("Are you sure you want to permanently delete this post.");
        setremove(tmp);
    }
    return (
        <div className="home-container">
                <div className="greet" ><p style={{textAlign:"end"}}>Welcome <span style={{textTransform:(props.greet!=="to the Daily Blogs")?"uppercase":"none"}}>{props.greet} ! </span> &nbsp;</p></div>
            <div className="inner-container">
                <div className="top">
                <div className="heading"><h1>Home</h1></div>
                <div className="add-blog">{(logs===1&&props.role!=="user")?<NavLink to="/compose"><button>Add Blog</button></NavLink>:""}</div>
                </div>
                <div className="posts">
               {((content.length!==0)&&(logs===0||props.role==="user"))? <div className="post">
                                <div className="image-container">
                                    {(content[0].image.length!==0)?<img src={content[0].image[0].base64} alt="post-image" />:<img src='https://icon-library.com/images/img-icon/img-icon-0.jpg' alt='post-image'/>}
                                </div>
                                    <div className='post-detail'>
                                        <h2>{content[0].title}</h2>
                                        <div className="post-details">
                                           <p>{`${content[0].content}`.substring(0,70)+ "..."} <NavLink to={`posts/${content[0]._id}`} style={{color:"blue",whiteSpace:"nowrap"}}>Read More</NavLink></p>
                                        </div>
                                    </div>
                </div>:""}
                    {
                        (content.length===0)?<img width={70} style={{margin:"30px auto",display:"block"}} src="https://c.tenor.com/whis5JX19ycAAAAC/loading-load.gif" alt="fetching" />:
                        [...content].reverse().map((val,i)=>{
                            return (i!==content.length-1)?<div className="post" key={i}>
                                <div className="image-container">
                                    {(val.image.length!==0)?<img src={val.image[0].base64} alt="post-image" />:(val.imageLink!="")?<img src={val.imageLink} alt="image" />:<img src='https://icon-library.com/images/img-icon/img-icon-0.jpg' alt='post-image'/>}
                                </div>
                                    <div className='post-detail'>
                                        <h2>{val.title}</h2>
                                        <span className="addDate" style={{display:(val.author==="")?"none":"inherits"}}>posted <span style={{display:(val.author==="")?"":"inline"}}>by </span> <h5 style={{display:(val.author==="")?"":"inline"}}><NavLink to={`/author/${val.author_id}`} style={{color:"black"}}>{val.author}</NavLink></h5> on {val.addDate}</span>
                                        <div className="post-details">
                                           <p>{`${val.content}`.substring(0,70)+ "..."} <NavLink to={`posts/${val._id}`} style={{color:"blue",whiteSpace:"nowrap"}}>Read More</NavLink></p>
                                            {((logs===1&&val.author_id===props.uid)&&props.role!=="user")?<p style={{whiteSpace:"nowrap"}}><a href={"/edit/"+val._id}><span style={{color:"blue"}}><FontAwesomeIcon icon={faPen}/></span></a><span className='span2' onClick={()=>{setter(val._id)} }style={{color:"red",cursor:"pointer"}}><FontAwesomeIcon icon={faTrashCan} /></span></p>:''}
                                        </div>
                                    </div>
                                   </div>:""
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;

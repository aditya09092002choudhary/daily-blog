// import './home.css';
import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../body/home.css';
import { useParams,NavLink } from 'react-router-dom';
 const baseUrl="https://daily-blog-backend.herokuapp.com/";
//  const baseUrl = "http://localhost:1337/";

const Author = (props) => {
    const logs=props.login;
    const {id}=useParams();
    // console.log(props.logset);
    const [username, setusername] = useState("Loading...");
    const [content, setcontent] = useState([]);
    document.title = username +" - Author | Daily Blogs";
    useEffect(() => {
        // document.querySelector("#root").style.display="grid";
        console.log(document.getElementById("root").offsetHeight,window.innerHeight);
        if(document.getElementById("root").offsetHeight<window.innerHeight+30){
            document.getElementById("root").style.display="block";
        }
        document.querySelectorAll(".nav-link")[0].style.color="wheat";
        axios.get(baseUrl).then((response)=>{
            setcontent(response.data);
            // console.log(response);
        })
        axios.get(baseUrl+"author/"+id).then((res)=>{
            setusername(res.data)
        })
    },[]);
    // document.getElementById("root").style.display="block";


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

// console.log(content[8].image[0].base64);
    return (
        <div className="home-container">
                {/* <div className="greet" ><p style={{textAlign:"end"}}>Welcome <span style={{textTransform:(props.greet!=="to the Daily Blogs")?"uppercase":"none"}}>{props.greet} ! </span> &nbsp;</p></div> */}
            <div className="inner-container"style={{marginTop:"30px"}}>
                <div className="top">
                <div className="heading"><h1>{username}</h1></div>
                <div className="add-blog">{(logs===1&&props.role==="admin"&&props.uid===id)?<NavLink to="/compose"><button>Add Blog</button></NavLink>:""}</div>
                </div>
                <div className="posts" >
                    {
                        (content.length===0)?<img width={30} style={{margin:"30px auto",display:"block"}} src="https://www.netatwork.com/uploads/AAPL/loaders/Thin%20broken%20ring.gif" alt="fetching" />:
                         content.map((val,i)=>{
                            return (i!==0&&val.author_id===id)?<div className="post" key={i}>
                                <div className="image-container">
                                    {(val.image.length!==0)?<img src={val.image[0].base64} alt="post-image" />:<img src='https://icon-library.com/images/img-icon/img-icon-0.jpg' alt='post-image'/>}
                                </div>
                                    <div className='post-detail'>
                                        <h2>{val.title}</h2>
                                        <span className="addDate" style={{display:(val.author===""||i===0)?"none":"inherits"}}>posted on {val.addDate}</span>
                                        <div className="post-details">
                                           <p>{`${val.content}`.substring(0,70)+ "..."} <NavLink to={`/posts/${val._id}`} style={{color:"blue",whiteSpace:"nowrap"}}>Read More</NavLink></p>
                                            {(logs===1&&val.author_id===props.uid)?<p style={{whiteSpace:"nowrap"}}><a href={"/edit/"+val._id}><span style={{color:"blue"}}><FontAwesomeIcon icon={faPen}/></span></a><span className='span2' onClick={()=>{setter(val._id)} }style={{color:"red",cursor:"pointer"}}><FontAwesomeIcon icon={faTrashCan} /></span></p>:''}
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

export default Author;

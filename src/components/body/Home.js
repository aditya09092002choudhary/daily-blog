import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import axios from 'axios';
 const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";
const Home = (props) => {
    const logs=props.login;
    // console.log(props.logset);
    const [content, setcontent] = useState([]);
    useEffect(() => {
        axios.get(baseUrl).then((response)=>{
            // console.log(response);
            setcontent(response.data);
        })
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
                <div className="add-blog">{(logs===1&&props.role==="admin")?<a href="/compose"><button>Add Blog</button></a>:""}</div>
                </div>
                <div className="posts">
                    {
                        (content.length===0)?<img width={20} style={{margin:"30px auto",display:"block"}} src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="fetching" />:
                        content.map((val,i)=>{
                            return <div className="post" key={i}>
                                    <h2>{val.title}</h2>
                                <span className="addDate" style={{display:(val.author===""||i===0)?"none":"inherits"}}>posted <span style={{display:(val.author==="")?"":"inline"}}>by </span> <h5 style={{display:(val.author==="")?"":"inline"}}>{val.author}</h5> on {val.addDate}</span>
                                    <div className="post-details">
                                    <p>{`${val.content}`.substring(0,70)+ "..."} <a href={`posts/${val._id}`} style={{color:"blue",whiteSpace:"nowrap"}}>Read More</a></p>
                                    {(logs===1&&val.author_id===props.uid)?<p><a href={"edit/"+val._id}><span style={{color:"blue"}}><FontAwesomeIcon icon={faPen}/></span></a><span className='span2' onClick={()=>{setter(val._id)} }style={{color:"red",cursor:"pointer"}}><FontAwesomeIcon icon={faTrashCan} /></span></p>:''}
                                    </div>
                                   </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;

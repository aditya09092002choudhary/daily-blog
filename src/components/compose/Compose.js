import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './compose.css';
import FileBase64 from 'react-file-base64';

const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";

const Compose = (props) => {
    const navigate=useNavigate();
    const [image, setimage] = useState([]);
    const [imageLink, setimageLink] = useState("");
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [username, setusername] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    // console.log(title,content);
    useEffect(() => {
    // document.querySelector("#root").style.display="grid";
        document.title = "Compose | Daily Blogs"
    }, []);
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.get(baseUrl+"protected",{headers:{
            Authorization:token,
        }}).then(res=>{
            // console.log(res);
            setusername(res.data.user.id);
            setfName(res.data.user.fName);
            setlName(res.data.user.lName);
        }).catch(err=>{
            // console.log(err);
            navigate("/login");
        })
    },[]);
    function saveBlog(e){
        e.preventDefault();
        axios.post(baseUrl+"compose",{image,imageLink,title,content,username,fName,lName}).then((response)=>{
            // console.log(response);
            if(response.data==="Saved"){
                window.location.href="/";
            }else{
                console.log("Internal Error!, Please try again later.");
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className='compose-container'>
                {/* <form encType='multipart/form-data' style={{marginBottom:"20px"}}> */}
            <div className="compose">
                <h1>Compose</h1>
                <div className="image-container">
                    <label htmlFor="title">Image</label>
                    <div className="input">
                    <FileBase64 multiple={ true } onDone={(base64)=>{setimage(base64)}}/>
                    </div>
                    <p style={{textAlign:"center",color:"gray",lineHeight:".7"}}>OR</p>
                    <div className="input">
                        <input type="text" name="imageLink" value={imageLink} onChange={(e)=>{setimageLink(e.target.value)}} id='input' placeholder= 'Image Link 🔗' />
                    </div>
                </div>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <div className="input">
                        <input type="text" name="title" value={title} onChange={(e)=>{settitle(e.target.value)}} id='input' placeholder='Title...' />
                    </div>
                </div>
                <div className="content-container">
                    <label htmlFor="content">Content</label>
                    <div className="content">
                        <textarea name="content" id="content" value={content} onChange={(e)=>{setcontent(e.target.value)}} cols="30" rows="10" placeholder='Content...'></textarea>
                    </div>
                </div>
                <div className="button-container">
                    <span><button onClick={saveBlog} style={{background:"darkcyan"}}>Submit</button></span>
                    <span onClick={()=>window.history.back()}><button>Cancel</button></span>
                </div>
            </div>
                {/* </form> */}
        </div>
    );
}

export default Compose;

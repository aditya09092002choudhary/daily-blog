import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './compose.css';

const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";

const Compose = (props) => {
    const navigate=useNavigate();
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [username, setusername] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    // console.log(title,content);
    useEffect(() => {
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
    function saveBlog(){

        axios.post(baseUrl+"compose",{title,content,username,fName,lName}).then((response)=>{
            // console.log(response);
            if(response.data==="Saved"){
                window.location.href="/";
            }else{
                window.alert("Internal Error!, Please try again later.");
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className='compose-container'>
            <div className="compose">
                <h1>Compose</h1>
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
        </div>
    );
}

export default Compose;

import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './compose.css';
import { useParams } from 'react-router-dom';

const baseUrl="https://daily-blog-backend.herokuapp.com/edit/";
// const baseUrl = "http://localhost:1337/edit/";
const Edit = () => {
    const { id } = useParams();
    // console.log(id);
    const endpoint = baseUrl+id;
    const [data, setdata] = useState({
        title:"",
        content:""
    });
    useEffect(() => {
        document.title = "Edit post | Daily Blogs"
        axios.get(endpoint).then((response)=>{
            // console.log(response);
            data.title=response.data.title;
            data.content=response.data.content;
        })
    }, []);
    function handleChange(e){
        const {name,value}=e.target;
        // console.log(e.target);
        setdata((prev)=>{
            if(name==="title"){
                return {
                    title:value,
                    content:prev.content
                }
            } else {
                return {
                    title:prev.title,
                    content:value
                }
            }
        })
    }
    // console.log(data);
    function send(){
        axios.post(endpoint,data).then((response)=>{
            // console.log(response);
            if(response.data==="Success"){
                window.location.href="/";
            }else{
                window.alert("Internal error!, Please try again later");
            }
        })
    }
    const [cnf, setcnf] = useState(false);
    function confirmation(){
        let chk=window.confirm("Are you sure, you wants to update this post.");
        setcnf(chk);
    }
    if(cnf===true){
        send();
    }
    return (
        <div className='compose-container'>
            <div className="compose">
                <h1>Edit</h1>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <div className="input">
                        <input type="text" name="title" id='title' onChange={handleChange} value={data.title} placeholder='Title...' />
                    </div>
                </div>
                <div className="content-container">
                    <label htmlFor="content">Content</label>
                    <div className="content">
                        <textarea name="content" id="content" cols="30" rows="10" spellCheck="true" onChange={handleChange} value={data.content} placeholder='Content...'></textarea>
                    </div>
                </div>
                <div className="button-container">
                    <span><button style={{background:"darkcyan"}} onClick={confirmation}>Submit</button></span>
                    <span onClick={()=>window.history.back()}><button>Cancel</button></span>
                </div>
            </div>
        </div>
    );
}

export default Edit;

import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './compose.css';
import { useParams } from 'react-router-dom';

// const baseUrl="https://daily-blog-backend.herokuapp.com/";
const baseUrl = "http://localhost:4000/edit/";
const Edit = () => {
    const [article, setArticle] = useState({});
    const { id } = useParams();
    console.log(id);
    const endpoint = baseUrl+id;
    useEffect(() => {
        document.title = "Edit post | Daily Blogs"
        axios.get(endpoint).then((response)=>{
            console.log(response);
            setArticle(response.data);
        })
    }, []);
    console.log(article.title,article.content);
    const [data, setdata] = useState({
        title:"",
        content:""
    });
    useEffect(()=>{
        data.title=article.title;
        data.content=article.content;
    },[]);
    function handleChange(e){
        const {name,value}=e.target;
        console.log(e.target);
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
    console.log(data);
    function send(){
        axios.post(endpoint,data).then((response)=>{
            console.log(response);
        })
    }
    
    return (
        <div className='compose-container'>
            <div className="compose">
                <h1>Edit</h1>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <div className="input">
                        <input type="text" name="title" id='input' onChange={handleChange} value={data.title} placeholder='Title...' />
                    </div>
                </div>
                <div className="content-container">
                    <label htmlFor="content">Content</label>
                    <div className="content">
                        <textarea name="content" id="content" cols="30" rows="10" spellCheck="true" onChange={handleChange} value={data.content} placeholder='Content...'></textarea>
                    </div>
                </div>
                <div className="button-container">
                    <a href="/"><button style={{background:"darkcyan"}} onClick={send}>Submit</button></a>
                    <a href="/"><button>Cancel</button></a>
                </div>
            </div>
        </div>
    );
}

export default Edit;

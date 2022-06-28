import React,{useState,useEffect} from "react";
import './news.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark,faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

// const Url = "http://localhost:1337/";
const Url="https://daily-blog-backend.herokuapp.com/";
function News(props){
    // console.log(props.role);
    useEffect(() => {
        document.title = "News | Daily Blogs"
    }, []);
    const [news, setnews] = useState([]); 
    const [savedNews, setsavedNews] = useState([]);
    const [saveNews,setsaveNews]=useState({
        title:"",
        pubDate:"",
        image_url:"",
        description:"",
        link:""
    });
    const baseUrl = "https://newsdata.io/api/1/news?apikey=pub_6494e69154e027b9ccf588e62e619540fb4e&q=latest&country=in,ru,us&language=en&category=health,politics,science,top,world";
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(baseUrl).then((response)=>{
            setnews(response.data.results);
        })
        axios.get(Url+"all/news").then((res)=>{
            setsavedNews(res.data);
        })
    }, []);
    // console.log(savedNews);
    function setNewsField(val){
        setsaveNews(()=>{
            return {
                title:val.title,
                pubDate:val.pubDate,
                image_url:val.image_url,
                description:val.description,
                link:val.link
            }
        });
        console.log(saveNews);
        if(saveNews.title!==""){
            allNews();
        }
    }
    function allNews(){
        axios.post(Url+'all/news',saveNews).then((res)=>{
            window.alert(res.data);
            // window.location.reload();
        });
        setsaveNews({
            title:"",
            pubDate:"",
            image_url:"",
            description:"",
            link:""
        });
    }
    function confirmation(id){
        if(window.confirm("Are you sure you want to permanently delete this post.")){
            deleteNews(id);
        }
    }
    function deleteNews(id){
        axios.post(Url+"delete/news",{id}).then((res)=>{
            window.alert(res.data);
            // window.location.reload();
        })
    }
        return <div className="news-container">
            <h1>Top News</h1>
            <div className="all-news">
                {(news.length===0)?<img width={20} style={{margin:"30px auto",display:"block"}} src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="fetching" />:
                news.map((val,i)=>{
                    return <div className="news" key={i}>
                    <div className="image">
                        <img src={(val.image_url!==null)?val.image_url:"https://images.unsplash.com/photo-1569516449771-41c89ee14ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5vbnltb3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
                    </div>
                    <div className="details">
                    <div className="heading">
                        <h2>{`${val.title}`.substring(0,50)+"..."}</h2>
                    </div>
                    <div className="desc"><p>{`${val.description}`.substring(0,100)+"..."}</p></div>
                    <div className="link" style={{display:"flex",justifyContent:"space-between"}}>
                        <a href={val.link} target="_blank" rel="noreferrer"><button style={{cursor:"pointer"}}>View</button></a>
                       {(props.role==="admin")? <span onClick={()=>setNewsField(val)} style={{color:"blue",cursor:"pointer"}}><FontAwesomeIcon icon={faBookmark}  /></span>:""}
                    </div>
                    </div>
                </div>
                })}
            </div>
            <h1>All News</h1>
            <div className="all-news">
                {(news.length===0)?<img width={20} style={{margin:"30px auto",display:"block"}} src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="fetching" />:
                [...savedNews].reverse().map((val,i)=>{
                    return <div className="news" key={i}>
                    <div className="image">
                        <img src={(val.image_url!==null)?val.image_url:"https://images.unsplash.com/photo-1569516449771-41c89ee14ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5vbnltb3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
                    </div>
                    <div className="details">
                        <div className="pubDate"><span style={{fontSize:"12px",color:"gray",margin:"0 0 0 6px "}}>Publish Date: {val.pubDate}</span></div>
                    <div className="heading">
                        <h2>{`${val.title}`.substring(0,50)+"..."}</h2>
                    </div>
                    <div className="desc"><p>{`${val.description}`.substring(0,100)+"..."}</p></div>
                    <div className="link" style={{display:"flex",justifyContent:"space-between"}}>
                        <a href={val.link} target="_blank" rel="noreferrer"><button style={{cursor:"pointer"}}>View</button></a>
                        {(props.role==='admin')? <span onClick={()=>confirmation(val._id)} style={{color:"red",cursor:"pointer"}}><FontAwesomeIcon icon={faTrashCan}  /></span>:""}
                    </div>
                    </div>
                </div>
                })}
                {(savedNews.length===0)?<h3>Nothing to show</h3>:""}
            </div>
        </div>
    }

export default News;

// https://newsdata.io/api/1/news?apikey=pub_6494e69154e027b9ccf588e62e619540fb4e&q=latest&country=in,ru,ua,us&language=en&category=health,politics,science,top,world
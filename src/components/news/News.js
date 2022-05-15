import React,{useState,useEffect} from "react";
import './news.css';
import axios from 'axios';

function News(){
    useEffect(() => {
        document.title = "News | Daily Blogs"
    }, []);
    // document.getElementById("root").style.display="block";
    const [news, setnews] = useState([]); 
    const baseUrl = "https://newsdata.io/api/1/news?apikey=pub_6494e69154e027b9ccf588e62e619540fb4e&q=latest&country=in,ru,ua,us&language=en&category=health,politics,science,top,world";
    // console.log(this.params.id);
    useEffect(() => {
        document.querySelectorAll(".nav-link")[3].style.color="wheat";
        axios.get(baseUrl).then((response)=>{
            // console.log(response);
            setnews(response.data.results);
        })
    }, []);
    // setnews(response.data.articles);
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
                        <h2>{`${val.title}`.substring(0,45)+"..."}</h2>
                    </div>
                    <div className="desc"><p>{`${val.description}`.substring(0,130)+"..."}</p></div>
                    <div className="link">
                        <a href={val.link} target="_blank" rel="noreferrer"><button style={{cursor:"pointer"}}>View</button></a>
                    </div>
                    </div>
                </div>
                })}
            </div>
        </div>
    }


export default News;

// https://newsdata.io/api/1/news?apikey=pub_6494e69154e027b9ccf588e62e619540fb4e&q=latest&country=in,ru,ua,us&language=en&category=health,politics,science,top,world
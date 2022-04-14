import React,{useState,useEffect} from 'react';
import './home.css';
import axios from 'axios';
const baseUrl="https://daily-blog-backend.herokuapp.com/";
const Home = (props) => {
    const [content, setcontent] = useState([]);
    useEffect(() => {
        axios.get(baseUrl).then((response)=>{
            console.log(response);
            setcontent(response.data)
        })
    }, []);
    return (
        <div className="home-container">
                <div className="greet"><p style={{textAlign:"end"}}>Welcome {props.greet} ! &nbsp;</p></div>
            <div className="inner-container">
                <div className="heading"><h1>Home</h1></div>
                <div className="posts">
                    {
                        content.map((val,i)=>{
                            return <div className="post" key={i}>
                                    <h2>{val.title}</h2>
                                    <p>{`${val.content}`.substring(0,70)+ "..."} <a href={`posts/${val._id}`} style={{color:"blue"}}>Read More</a></p>
                                   </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;

import React,{useState,useEffect} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const navigate=useNavigate();
    const link = [{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Contact Us",link:"/contact"},{name:"News",link:"/news"},{name:"Login",link:"/login"},{name:"Register",link:"/register"}]
    const [state, setstate] = useState(0);
    // const [status,setStatus]=useState(0);
    const status=props.login;
    function loading(){
        document.querySelector('.loader').style.visibility="visible";
    }
    function handleClick(){
        setstate(()=>{
            if(state===2){
                return 1;
            } else if(state===1){
                return 0;
            } else{
                return 1;
            }
        });
    }
    function logout(){
        loading();
        localStorage.removeItem('token');
        window.location.href="/";
    }
    // axios.get('http://localhost:4000/').then((response)=>{
    //     console.log(response);
    // })
    return (
        <nav className="navbar">
            <div className="loader"><div><img src="https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp" width={25} alt="loading" /></div></div>
            <div className="container">
                <div className="logo"><a href="/"><h2>Daily Blogs</h2></a></div>
                <div className="nav-items">
                    <ul className="nav-list">
                        {link.map((link,i)=>{
                            return (status===1&&(link.name==="Login"||link.name==="Register"))?"":(status===0&&link.name==="Logout")?"":<li key={i} className="nav-items" onClick={loading}><a href={link.link}> {link.name}</a></li>
                        })}
                        {(status===1)?<li className='nav-items'>Logout</li>:""}
                    </ul>
                </div>
                <div className="toggle" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <div className={(state===1)?"display sidebar":(state!==2)?"hide sidebar":"sidebar"} >
                   <ul className="nav-list" style={{display:(state===1)?"block":"none"}}>
                        {link.map((link,i)=>{
                            return (status===1&&(link.name==="Login"||link.name==="Register"))?"":<li key={i} className="nav-items" onClick={loading}><a href={link.link}> {link.name}</a></li>
                        })}
                        {(status===1)?<li className='nav-items' onClick={logout}>Logout</li>:""}
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;

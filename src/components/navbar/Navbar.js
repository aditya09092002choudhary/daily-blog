import React,{useState} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
// import axios from 'axios';


const Navbar = (props) => {
    const link = [{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Contact Us",link:"/contact"},{name:"News",link:"/news"},{name:"Login",link:"/login"},{name:"Register",link:"/register"},{name:"Update Password",link:"/uPassword"}]
    const [state, setstate] = useState(0);
    const status=props.login;
    function hide(){
        handleClick();
        document.querySelector(".sidebar").classList.toggle("display");
        document.querySelector(".sidebar").classList.toggle("hide");
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
    function clearStyle(){
        // document.querySelector("#root").style.display="grid";
        const x = document.querySelectorAll(".nav-link");
        for(let i=0;i<x.length;i++){
            x[i].style.color="white";
        }
    }
    function logout(){
        // loading();
        localStorage.removeItem('token');
        window.location.reload();
    }
    // axios.get('http://localhost:4000/').then((response)=>{
    //     console.log(response);
    // })
    return (
        <nav className="navbar">
            <div className="loader"><div><img src="https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp" width={25} alt="loading" /></div></div>
            <div className="container">
                <div className="logo"><NavLink to="/"><h2 onClick={clearStyle}>Daily Blogs</h2></NavLink></div>
                <div className="nav-items">
                    <ul className="nav-list">
                        {link.map((link,i)=>{
                            return (status===1&&(link.name==="Login"||link.name==="Register")||(status!==1&&(link.name==="Update Password")))?"":(status===0&&link.name==="Logout")?"":<li key={i} className="nav-items" ><NavLink to={link.link} className="nav-link" onClick={clearStyle}> {link.name}</NavLink></li>
                        })}
                        {(status===1)?<li className='nav-items logout' onClick={logout}>Logout</li>:""}
                    </ul>
                </div>
                <div className="toggle" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <div className={(state===1)?"display sidebar":(state!==2)?"hide sidebar":"sidebar"} >
                   <ul className="nav-list" style={{display:(state===1)?"block":"none"}}>
                        {link.map((link,i)=>{
                            return ((status===1&&(link.name==="Login"||link.name==="Register"))||(status!==1&&(link.name==="Update Password")))?"":<li key={i} className="nav-items" ><NavLink to={link.link} className="nav-link" onClick={hide}> {link.name}</NavLink></li>
                        })}
                        {(status===1)?<li className='nav-items logout' ><span onClick={logout}>Logout</span></li>:""}
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;

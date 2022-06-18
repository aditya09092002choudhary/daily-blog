import React,{useEffect, useState} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
// import axios from 'axios';


const Navbar = (props) => {
    const link = [{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Contact Us",link:"/contact"},{name:"News",link:"/news"},{name:"Login",link:"/login"},{name:"Register",link:"/register"}]
    const [state, setstate] = useState(0);
    const [option, setoption] = useState(false);
    const status=props.login;
    function hide(){
        handleClick();
        document.querySelector(".sidebar").classList.toggle("display");
        document.querySelector(".sidebar").classList.toggle("hide");
    }
    function handleOptions(){
        setoption((prev)=>{
             return !prev
        });
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
    // document.querySelectorAll('.nav-items').classList.add('liStyle');
    function clearStyle(e){
        const x = document.querySelectorAll(".nav-items");
        // document.querySelector("#root").style.display="grid";
        const y = document.querySelectorAll(".nav-links");
        for(let i=0;i<x.length;i++){
            x[i].classList.remove('liStyle');
            // y[i].style.color="white";
        }
        x[e+1].classList.add('liStyle');
    }
    function logout(){
        localStorage.removeItem('token');
        if(status===1)
        window.location.reload();
    }
    return (
        <div className='nav-container'>
        <nav className="navbar">
            <div className="loader"><div><img src="https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp" width={25} alt="loading" /></div></div>
            <div className="container">
                <div className="logo"><NavLink to="/"><h2 onClick={clearStyle}>Daily Blogs</h2></NavLink></div>
                <div className="nav-items">
                    <ul className="nav-list">
                        {link.map((link,i)=>{
                            return (status===1&&(link.name==="Login"||link.name==="Register")||(status!==1&&(link.name==="Update Password")))?"":(status===0&&link.name==="Logout")?"":<li key={i} className="nav-items" onClick={()=>{clearStyle(i)}}><NavLink to={link.link} className="nav-link" > {link.name}</NavLink></li>
                        })}
                       {(status===1)? <li className="nav-items"><img src="https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg" alt="profile" width={40} onClick={handleOptions}/></li>:""}
                    </ul>
                </div>
                <div className="toggle" onClick={handleClick}><FontAwesomeIcon icon={(state===0)?faBars:faClose} /></div>
            </div>
            <div className={(state===1)?"display sidebar":(state!==2)?"hide sidebar":"sidebar"} >
                   <ul className="nav-list" style={{display:(state===1)?"block":"none"}}>
                        {link.map((link,i)=>{
                            return ((status===1&&(link.name==="Login"||link.name==="Register"))||(status!==1&&(link.name==="Update Password")))?"":<li key={i} className="nav-items" ><NavLink to={link.link} className="nav-link" onClick={hide}> {link.name}</NavLink></li>
                        })}  {(status===1)?<li  className="nav-items" ><NavLink to={'/uPassword'} className="nav-link" onClick={handleOptions}> Update Password</NavLink></li>:""}
                        {(status===1)?<li className='nav-items logout' ><span onClick={logout}>Logout</span></li>:""}
                    </ul>
            </div>
        </nav>
                        <div className="options" style={{display:(option===false)?"none":"block"}}>
                            <ul>
                            {(status===1)?<li  className="nav-items" ><NavLink to={''} className="nav-link"  onClick={()=>window.alert("Coming Soon! 😊")}>Profile Picture</NavLink></li>:""}
                            {(status===1)?<li  className="nav-items" ><NavLink to={'/uPassword'} className="nav-link" onClick={handleOptions}> Update Password</NavLink></li>:""}
                            {(status===1)?<li className='nav-items logout' ><span onClick={logout}>Logout</span></li>:""}
                            </ul>
                        </div>
        </div>
    );
}

export default Navbar;

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
    useEffect(()=>{
        if(document.querySelector('.options').style.display==="none"){
            setoption(false);
        }
    },[]);
    function handleOptions(){
        setoption((prev)=>{
             return !prev;
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
    function clearStyle(i){
        setoption(false)
        const x = document.querySelectorAll(".nav-items");
        for(let i=0;i<x.length;i++){
            x[i].classList.remove('liStyle');
        }
        x[i+1].classList.add('liStyle');
    }
    function logout(){
        localStorage.removeItem('token');
        if(status===1)
        window.location.reload();
    }
    return (
        <div className='nav-container' >
        <nav className="navbar">
            <div className="loader"><div><img src="https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp" width={25} alt="loading" /></div></div>
            <div className="container">
                <div className="logo"><NavLink to="/"><h2 onClick={clearStyle}>Daily Blogs</h2></NavLink></div>
                <div className="nav-items">
                    <ul className="nav-list">
                        {link.map((link,i)=>{
                            return (status===1&&(link.name==="Login"||link.name==="Register")||(status!==1&&(link.name==="Update Password")))?"":(status===0&&link.name==="Logout")?"":<li key={i} className="nav-items" ><NavLink to={link.link} className="nav-link" onClick={()=>{clearStyle(i)}}> {link.name}</NavLink></li>
                        })}
                       {(status===1)? <li className="nav-items"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkzKuxNQRd64oM69MOwgCd2HVisB9qfuVbw&usqp=CAU" alt="profile" width={40} onClick={handleOptions}/></li>:""}
                    </ul>
                </div>
                <div className="toggle" style={{justifyContent:"center",alignItems:"center",columnGap:"30px"}}>
                    {(status===1)? <span className="nav-items"><img style={{borderRadius:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkzKuxNQRd64oM69MOwgCd2HVisB9qfuVbw&usqp=CAU" alt="profile" width={30} onClick={handleOptions}/></span>:""}
                    <FontAwesomeIcon icon={(state===0)?faBars:faClose} onClick={handleClick} />
                </div>
            </div>
            <div className={(state===1)?"display sidebar":(state!==2)?"hide sidebar":"sidebar"} >
                   <ul className="nav-list" style={{display:(state===1)?"block":"none"}}>
                        {link.map((link,i)=>{
                            return ((status===1&&(link.name==="Login"||link.name==="Register")))?"":<li key={i} className="nav-items" style={{margin:(status===1)?(i===0)?"10px auto 5px":"5px auto":""}} ><NavLink to={link.link} className="nav-link" onClick={hide}> {link.name}</NavLink></li>
                        })}  
                        {/* -------------------------- For user with proper authentication -------------------------- */}
                        {/* {(status===1)?<li  className="nav-items" ><NavLink to={''} className="nav-link"  onClick={()=>window.alert("Coming Soon! ????")}>Profile Picture</NavLink></li>:""}
                        {(status===1 && props.role==="admin")?<li  className="nav-items" ><NavLink to={'/role'} className="nav-link"  onClick={handleClick}>Update Role</NavLink></li>:""}
                        {(status===1)?<li  className="nav-items" ><NavLink to={'/uPassword'} className="nav-link" onClick={hide}> Update Password</NavLink></li>:""}
                        {(status===1)?<li className='nav-items logout' ><span onClick={logout}>Logout</span></li>:""} */}
                    </ul>
            </div>
        </nav>
                        {/* -------------------------- For user with proper authentication -------------------------- */}
        <div className="profile-container" style={{display:(option===false)?"none":"block"}}>
                        <div className="options" >
                            <ul>
                            {(status===1)?<li  className="nav-items" ><NavLink to={'#'} className="nav-link"  onClick={()=>window.alert("Coming Soon! ????")}>Profile Picture</NavLink></li>:""}<hr/>
                            {(status===1 && props.role==="admin")?<><li  className="nav-items" ><NavLink to={'/role'} className="nav-link"  onClick={handleOptions}>Update Role</NavLink></li><hr/></>:""}
                            {(status===1)?<li  className="nav-items" ><NavLink to={'/uPassword'} className="nav-link" onClick={handleOptions}> Update Password</NavLink></li>:""}<hr/>
                            {(status===1)?<li className='nav-items logout' ><span onClick={logout}>Logout</span></li>:""}
                            </ul>
                        </div>
                        <div className="close"><FontAwesomeIcon icon={faClose} onClick={()=>{setoption(false)}} /></div>
        </div>
        </div>
    );
}

export default Navbar;

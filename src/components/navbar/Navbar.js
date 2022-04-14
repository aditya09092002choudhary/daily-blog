import React,{useState} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const link = [{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Contact Us",link:"/contact"},{name:"Login",link:"/login"},{name:"Register",link:"/register"},{name:"News",link:"/news"}]
    const [state, setstate] = useState(2);
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
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo"><h2>Daily Blogs</h2></div>
                <div className="nav-items">
                    <ul className="nav-list">
                        {link.map((link,i)=>{
                            return <li key={i} className="nav-items"><a href={link.link}> {link.name}</a></li>
                        })}
                    </ul>
                </div>
                <div className="toggle" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <div className={(state===1)?"display sidebar":(state!==2)?"hide sidebar":"sidebar"} >
                   <ul className="nav-list" style={{display:(state===1)?"block":"none"}}>
                        {link.map((link,i)=>{
                            return <li key={i} className="nav-items"><a href={link.link}> {link.name}</a></li>
                        })}
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;

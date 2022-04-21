import React,{useState,useEffect} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const navigate=useNavigate();
    const link = [{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Contact Us",link:"/contact"},{name:"News",link:"/news"},{name:"Login",link:"/login"},{name:"Register",link:"/register"},{name:"Logout",link:"/logout"}]
    const [state, setstate] = useState(0);
    // const [status,setStatus]=useState(0);
    const status=props.login;
    // useEffect(()=>{
    //     const token = localStorage.getItem('token');
    //     axios.get('http://localhost:1337/protected',{headers:{
    //         Authorization:token,
    //     }}).then(res=>{
    //         console.log(res);
    //         if(res.data.success===true){
    //             setStatus(1);
    //             props.logStatus(1);
    //             props.Name(res.data.user.fName)
    //             props.UID(res.data.user.id);
    //             // navigate('/');
    //         }
    //     }).catch(err=>{
    //         console.log(err);
    //         // navigate("/login");
    //     })
    // },[]);
    // console.log(state);
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

    // axios.get('http://localhost:4000/').then((response)=>{
    //     console.log(response);
    // })
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo"><a href="/"><h2>Daily Blogs</h2></a></div>
                <div className="nav-items">
                    <ul className="nav-list">
                        {link.map((link,i)=>{
                            return (status===1&&(link.name==="Login"||link.name==="Register"))?"":(status===0&&link.name==="Logout")?"":<li key={i} className="nav-items"><a href={link.link}> {link.name}</a></li>
                        })}
                    </ul>
                </div>
                <div className="toggle" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <div className={(state===1)?"display sidebar":(state!==2)?"hide sidebar":"sidebar"} >
                   <ul className="nav-list" style={{display:(state===1)?"block":"none"}}>
                        {link.map((link,i)=>{
                            return (status===1&&(link.name==="Login"||link.name==="Register"))?"":(status===0&&link.name==="Logout")?"":<li key={i} className="nav-items"><a href={link.link}> {link.name}</a></li>
                        })}
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;

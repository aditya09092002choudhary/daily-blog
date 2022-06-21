import React,{useState,useEffect} from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";

const Role = (props) => {
    const navigate=useNavigate();
    useEffect(()=>{
        document.title="Update Role | Daily Blogs"
        if(props.login!==1||props.role!=="admin"){
            window.alert("Unauthorised access!");
            navigate('/');
        }
    },[]);
    const [valid,setvalid]=useState(true);
    const [errmsg, seterrmsg] = useState("");
    const [auth, setauth] = useState({
       username:"",
       role:"",
       newrole:""
    });
    function handleChange(e){
        const {name,value}=e.target;
        setauth((prev)=>{
          if(name==="username"){
            return {
              username:value,
              role:prev.role,
              newrole:prev.newrole
            }
          } else if(name==="newrole"){
            return {
              username:prev.username,
              role:prev.role,
              newrole:value
            }
          }else{
            return{
              username:prev.username,
              role:value,
              newrole:prev.newrole
            }
          }
        })
      }
      function updateRole(){
        axios.post(baseUrl+"role",auth).then((res)=>{
            // console.log(res.data);
            if(res.data.success===true){
                window.alert(res.data.message);
                navigate('/');
            }
            if(res.data.success===false){
                setvalid(false);
            }
        }).catch((res)=>{
            seterrmsg("User credentials are incorrect. Try again");
            setvalid(false);
        })
      }
    return (
        <div  className="container">
      <div  className="inner-container" style={{height:"80%"}}>
        <div className="loading-gif" style={{textAlign:"center",display:"none"}}><img src="https://www.netatwork.com/uploads/AAPL/loaders/loading_ajax.gif" width={35} alt="loading" /></div>
        <div  className="heading"><h1>Update Role</h1></div>
        <div  className="form-container">
         <p style={{color:"red",textAlign:'center'}}>&nbsp;{(valid===false)?errmsg+"!":""}</p> 
          <div onSubmit={(e)=>updateRole(e)} className="signup-form">
            <div  className="form-element">
              <div id="emailMsg"  className="err"></div>
              <div  className="inner-element">
                <div  className="icon"><i  className="fa-solid fa-envelope"></i></div>
                <div  className="input">
                  <input type="email" onChange={handleChange} name='username' placeholder="Enter username" id="email"  autoComplete="off" required/>
                </div>
              </div>
              <div  className="inner-element">
                <div  className="icon"><i className="fa-solid fa-user-large"></i></div>
                <div  className="input">
                  <select name="role" id="role" onChange={handleChange}>
                    <option style={{color:"gray"}}>Current Role</option>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div id="newroleMsg"  className="err"></div>
              <div  className="inner-element">
                <div  className="icon"><i className="fa-solid fa-user-large"></i></div>
                <div  className="input">
                  <select name="newrole" id="newrole" onChange={handleChange}>
                    <option style={{color:"gray"}}>New Role</option>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div  className="button">
                <button type="submit" onClick={updateRole}>Submit <i  className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>
    );
}

export default Role;

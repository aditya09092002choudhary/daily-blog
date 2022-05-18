import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";
const Login = () => {
  const navigate=useNavigate();
  useEffect(() => {
    document.querySelectorAll(".nav-link")[4].style.color="wheat";
    // document.querySelector("#root").style.display="grid";
    document.title = "Login | Daily Blogs"
}, []);
  const [valid,setvalid]=useState(true);
  const [errmsg, seterrmsg] = useState("");
  const [auth, setauth] = useState({
    username:"",
    role:"user",
    password:""
  });
  function handleChange(e){
    const {name,value}=e.target;
    setauth((prev)=>{
      if(name==="username"){
        return {
          username:value,
          role:prev.role,
          password:prev.password
        }
      } else if(name==="password"){
        return {
          username:prev.username,
          role:prev.role,
          password:value
        }
      }else{
        return{
          username:prev.username,
          role:value,
          password:prev.password
        }
      }
    })
  }
  useEffect(()=>{
    const token = localStorage.getItem('token');
    axios.get(baseUrl+'protected',{headers:{
        Authorization:token,
    }}).then(res=>{
        // console.log(res);
        if(res.data.success===true){
            navigate("/");
            // window.location.href="/";
          }
    }).catch(err=>{
        // console.log(err);
        navigate("/login");
    })
},[]);
	async function loginUser(event) {
		event.preventDefault()
    document.querySelector(".loading-gif").style.display="unset";
		const response = await fetch(baseUrl+'login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(auth),
		})
    // console.log(response);

		const data = await response.json()
    // console.log(data);
    localStorage.setItem('token',data.token);
    if(data.success===true){
      window.location.href="/";
      // navigate("/");
    }
    if(data.success===false){
    document.querySelector(".loading-gif").style.display="none";
      seterrmsg(data.message);
      setvalid(false);
    }
	}

    return (
        <div  className="container">
      <div  className="inner-container" style={{height:"80%"}}>
        <div className="loading-gif" style={{textAlign:"center",display:"none"}}><img src="https://www.netatwork.com/uploads/AAPL/loaders/loading_ajax.gif" width={35} alt="loading" /></div>
        <div  className="heading"><h1>Login</h1></div>
        <div  className="form-container">
         <p style={{color:"red",textAlign:'center'}}>&nbsp;{(valid===false)?errmsg+"!":""}</p> 
          <form method='post' onSubmit={loginUser} className="signup-form">
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
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div id="passwordMsg"  className="err"></div>
              <div  className="inner-element">
                <div  className="icon"><i  className="fa-solid fa-key"></i></div>
                <div  className="input">
                  <input type="password" onChange={handleChange} name='password' placeholder="Enter Password" id="password"  required/>
                </div>
              </div>
              {/* <div  className="checkbox">
                <input type="checkbox" name="check" id="check" /> <label htmlFor="check">Remember me</label>
              </div> */}
              <div  className="button">
                <button type="submit">Submit <i  className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
            </div>
        </div>
      </div>
    );
}

export default Login;

import Axios from 'axios';
import React,{useState,useEffect} from 'react';
import './auth.css';

// const baseUrl="https://daily-blog-backend.herokuapp.com/";
const baseUrl = "http://localhost:4000/login";
const Login = () => {
  useEffect(() => {
    document.title = "Login | Daily Blogs"
}, []);
  const [valid,setvalid]=useState(0);
  const [auth, setauth] = useState({
    username:"",
    password:""
  });
  function handleChange(e){
    const {name,value}=e.target;
    setauth((prev)=>{
      if(name==="username"){
        return {
          username:value,
          password:prev.password
        }
      } else{
        return {
          username:prev.username,
          password:value
        }
      }
    })
  }
  function send(e){
    e.preventDefault();
    console.log(auth);
    Axios.post("http://localhost:4000/login", auth)
    .then(function (response) {
      if(response.data==="Success"){
        window.location.href="/";
      }else{
        setvalid(response.data);
      }
    })
    .catch(function (error) {
      setvalid(401);
    });
  }
    return (
        <div  className="container">
      <div  className="inner-container" style={{height:"80%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <div  className="heading"><h1>Login</h1></div>
        <div  className="form-container">
         {(valid==="Success")?<p style={{color:"red"}}>&nbsp;Incorrect username or password.</p>:""} 
          <form method='post' className="signup-form">
            <div  className="form-element">
              <div id="emailMsg"  className="err"></div>
              <div  className="inner-element">
                <div  className="icon"><i  className="fa-solid fa-envelope"></i></div>
                <div  className="input">
                  <input type="email" onChange={handleChange} name='username' placeholder="Enter username" id="email"  autoComplete="off" required/>
                </div>
              </div>
              <div id="passwordMsg"  className="err"></div>
              <div  className="inner-element">
                <div  className="icon"><i  className="fa-solid fa-key"></i></div>
                <div  className="input">
                  <input type="password" onChange={handleChange} name='password' placeholder="Enter Password" id="password"  required/>
                </div>
              </div>
              <div  className="checkbox">
                <input type="checkbox" name="check" id="check" /> <label htmlFor="check">Remember me</label>
              </div>
              <div  className="button">
                <button type="submit" onClick={send}>Submit <i  className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
            </div>
        </div>
      </div>
    );
}

export default Login;

import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";
const Login = () => {
  const navigate=useNavigate();
  useEffect(() => {
    document.title = "Login | Daily Blogs"
}, []);
  const [valid,setvalid]=useState("");
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
  useEffect(()=>{
    const token = localStorage.getItem('token');
    axios.get(baseUrl+'protected',{headers:{
        Authorization:token,
    }}).then(res=>{
        console.log(res);
        if(res.data.success===true){
            // setStatus(1);
            // props.logStatus(1);
            window.location.href="/";
          }else{
            alert("Invalid username or password !");
          }
    }).catch(err=>{
        console.log(err);
        navigate("/login");
    })
},[]);
	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch(baseUrl+'login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(auth),
		})
    // console.log(response);

		const data = await response.json()
    console.log(data);
    localStorage.setItem('token',data.token);
    if(data.success===true){
      window.location.href="/";
    }

	// 	if (data.user) {
	// 		localStorage.setItem('token', data.user)
	// 		alert('Login successful')
	// 		window.location.href = '/'
	// 	} else {
  //     setvalid('Please check your username and password');
	// 	}
	}
    return (
        <div  className="container">
      <div  className="inner-container" style={{height:"80%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <div  className="heading"><h1>Login</h1></div>
        <div  className="form-container">
         <p style={{color:"red"}}>&nbsp;{valid}</p> 
          <form method='post' onSubmit={loginUser} className="signup-form">
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

import React,{useState,useEffect} from 'react';
import './auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";
const Register = () => {
  const navigate=useNavigate();
  useEffect(() => {
    // document.querySelector("#root").style.display="grid";
    document.title = "Register | Daily Blogs";
    document.querySelectorAll(".nav-link")[5].style.color="wheat";
}, []);
const [valid, setvalid] = useState(true);
const [errmsg, seterrmsg] = useState("");
const [auth, setauth] = useState({
  fName:"",
  lName:"",
  username:"",
  password:""
});

function handleChange(e){
  const {name,value}=e.target;
  setauth((prev)=>{
    if(name==="fName"){
      return {
        fName:value,
        lName:prev.lName,
        username:prev.username,
        password:prev.password
      }
    } else if(name==="lName"){
      return {
        fName:prev.fName,
        lName:value,
        username:prev.username,
        password:prev.password
      }
    }
    else if(name==="username"){
      return {
        fName:prev.fName,
        lName:prev.lName,
        username:value,
        password:prev.password
      }
    } else{
      return {
        fName:prev.fName,
        lName:prev.lName,
        username:prev.username,
        password:value
      }
    }
  })
  // console.log(auth);  
}
async function registerUser(event) {
  event.preventDefault();
  document.querySelector(".loading-gif").style.display="unset";
  axios.post(baseUrl+'register',auth).then((res)=>{
    if(res.data.success===true){
      // window.location.href="/login";
      navigate("/login");
    }else{
    document.querySelector(".loading-gif").style.display="none";
      setvalid(false);
      seterrmsg(res.data.message);
    }
  })
}

    return (
        <div className="container">
      <div className="inner-container">
      <div className="loading-gif" style={{textAlign:"center",display:"none"}}><img src="https://www.netatwork.com/uploads/AAPL/loaders/loading_ajax.gif" width={35} alt="loading" /></div>
        <div className="heading"><h1>Register</h1></div>
        <div className="form-container">
          {(valid===false)?<p style={{color:"red",textAlign:"center",fontSize:"14px"}}>{errmsg+", Check your email"}</p>:""}
          <form onSubmit={registerUser} className="signup-form">
            <div className="form-element">
              <div id="fNameMsg" className="err"></div>
              <div className="name">
                <div className="fName">
                  <div className="icon"><i className="fa-solid fa-user-large"></i></div>
                  <div className="input">
                    <input type="text" placeholder="First Name" onChange={handleChange} id="fName" name='fName' autoComplete="off" style={{textTransform:"capitalize"}} required/>
                  </div>
                </div>
                <div className="lName">
                  <div className="icon"><i className="fa-solid fa-user-large"></i></div>
                  <div className="input">
                    <input type="text" placeholder="Last Name" onChange={handleChange} autoComplete="off" name='lName' style={{textTransform:"capitalize"}}/>
                  </div>
                </div>
              </div>
              <div id="emailMsg" className="err"></div>
              <div className="inner-element">
                <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="input">
                  <input type="email" placeholder="Enter Email" onChange={handleChange} id="email"  name='username' autoComplete="off" required/>
                </div>
              </div>
              {/* <div id="phoneMsg" className="err"></div>
              <div className="inner-element">
                <div className="icon"><i className="fa-solid fa-phone"></i></div>
                <div className="input">
                  <input type="tel"  id="phone"    placeholder="Enter Mobile Number" autoComplete="off" required />
                </div>
              </div> */}
              <div id="passwordMsg" className="err"></div>
              <div className="inner-element">
                <div className="icon"><i className="fa-solid fa-key"></i></div>
                <div className="input">
                  <input type="password" placeholder="Enter Password" onChange={handleChange} id="password"  name='password' required/>
                </div>
                {/* <div className="icon-right" onClick={showPassword1}><i className="fa-solid fa-eye-slash eye1" ></i></div> */}
              </div>
              {/* <div id="confPassMsg" className="err"></div>
              <div className="inner-element">
                <div className="icon"><i className="fa-solid fa-key"></i></div>
                <div className="input">
                  <input type="password" placeholder="Confirm Password" id="conf-pass"   required/>
                </div>
                <div className="icon-right" onClick={showPassword2}><i className="fa-solid fa-eye-slash eye2" ></i></div>

              </div> */}
              {/* <div id="genderMsg" className="err"></div>
              <div className="gender">
                <div className="male">
                  <input type="radio" name="gender" id="male"   /> <label htmlFor="male" required="required">Male</label> 
                </div>
                <div className="female">
                  <input type="radio" name="gender" id="female"   /> <label htmlFor="female" required ="required">Female</label>
                </div>
              </div> */}
              {/* <div className="checkbox">
                <input type="checkbox" name="check" id="check" /> <label htmlFor="check">Remember me</label>
              </div> */}
              <div className="button">
                <button type="submit" >Submit <i className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
            </div>
        </div>
      </div>
    );
}

export default Register;

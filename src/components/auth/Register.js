import React,{useState,useEffect} from 'react';
import './auth.css';
import axios from 'axios';

const baseUrl="https://daily-blog-backend.herokuapp.com/";
// const baseUrl = "http://localhost:1337/";
const Register = () => {
  useEffect(() => {
    document.title = "Register | Daily Blogs"
}, []);
const [valid, setvalid] = useState("");
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
  console.log(auth);  
}
async function registerUser(event) {
  event.preventDefault()

  axios.post(baseUrl+'register',auth).then((res)=>{
    if(res.data.success===true){
      window.location.href="/login";
    }
  })
  // if (data.status === 'ok') {
  //   // history.push('/login')
  //   console.log('Hello');
  //   // window.location.href="/login";
  // }
}
// console.log(auth);
// function send(){
//   axios.post(baseUrl, auth)
//   .then(function (response) {
//     console.log(response);
//     setvalid(response.data);
//     if(valid==="1"){
//       <Router>
//         <Routes>
//           <Route path='/login' element={<Navigate to={"/"} />} />
//         </Routes>
//       </Router>
//     }
//   })
//   .catch(function (error) {
//     console.log(error);
//     alert(error.message);
//   });
// }
    return (
        <div className="container">
      <div className="inner-container">
        <div className="heading"><h1>Register</h1></div>
        <div className="form-container">
          {(valid!==""||valid!==1)?<p style={{color:"red"}}>{valid}</p>:""}
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
              <div className="checkbox">
                <input type="checkbox" name="check" id="check" /> <label htmlFor="check">Remember me</label>
              </div>
              <div className="button">
                <button type="submit">Submit <i className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
            </div>
        </div>
      </div>
    );
}

export default Register;

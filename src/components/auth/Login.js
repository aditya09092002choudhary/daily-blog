import React from 'react';
import './auth.css';

const Login = () => {
    return (
        <div  className="container">
      <div  className="inner-container" style={{height:"80%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <div  className="heading"><h1>Login</h1></div>
        <div  className="form-container">
          <form  className="signup-form">
            <div  className="form-element">
              <div id="emailMsg"  className="err"></div>
              <div  className="inner-element">
                <div  className="icon"><i  className="fa-solid fa-envelope"></i></div>
                <div  className="input">
                  <input type="email" placeholder="Enter Email" id="email"  autoComplete="off" required/>
                </div>
              </div>
              <div id="passwordMsg"  className="err"></div>
              <div  className="inner-element">
                <div  className="icon"><i  className="fa-solid fa-key"></i></div>
                <div  className="input">
                  <input type="password" placeholder="Enter Password" id="password"  required/>
                </div>
                <div  className="icon-right" ><i  className="fa-solid fa-eye-slash eye1" ></i></div>
              </div>
              <div  className="checkbox">
                <input type="checkbox" name="check" id="check" /> <label htmlFor="check">Remember me</label>
              </div>
              <div  className="button">
                <button type="submit" >Submit <i  className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
            </div>
        </div>
      </div>
    );
}

export default Login;

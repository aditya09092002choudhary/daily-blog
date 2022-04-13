import React from 'react';
import '../auth/auth.css';
// import './contact.css';

const Contact = () => {
    return (
        <div className="container">
      <div className="inner-container">
        <div className="heading"><h1>Contact Us</h1></div>
        <div className="form-container">
          <form className="signup-form">
            <div className="form-element">
              {/* <div id="fNameMsg" className="err"></div> */}
              <div className="name">
                <div className="fName">
                  <div className="icon"><i className="fa-solid fa-user-large"></i></div>
                  <div className="input">
                    <input type="text" placeholder="First Name" id="fName"   autoComplete="off" style={{textTransform:"capitalize"}} required/>
                  </div>
                </div>
                <div className="lName">
                  <div className="icon"><i className="fa-solid fa-user-large"></i></div>
                  <div className="input">
                    <input type="text" placeholder="Last Name" autoComplete="off" style={{textTransform:"capitalize"}}/>
                  </div>
                </div>
              </div>
              <div id="emailMsg" className="err"></div>
              <div className="inner-element">
                <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="input">
                  <input type="email" placeholder="Enter Email" id="email"  autoComplete="off" required/>
                </div>
              </div>
              <div className="textarea">
                  <label htmlFor="feedback">Message</label>
                  <textarea name=""  cols="30" rows="10" id="feedback" placeholder='Type Message ...'></textarea>
              </div>
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

export default Contact;

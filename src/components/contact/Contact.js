import React,{useState,useEffect} from 'react';
import '../auth/auth.css';
import { useNavigate } from 'react-router-dom';
// import './contact.css';

const Contact = () => {
  const navigate=useNavigate();
  const [width, setwidth] = useState("");
  useEffect(() => {
    setwidth(window.innerWidth);
    // document.querySelector("#root").style.display="grid";
    // document.querySelectorAll(".nav-link")[2].style.color="wheat";
    document.title = "Contact us | Daily Blogs"
}, []);
function sendFeedback(){
  if(document.getElementById("feedback").value==""){
    alert("Please fill all the required fields !");
  }
  else{
  alert("Thanks for contacting us 😊! Your response has been submitted.");
  navigate("/");
  }
}
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
                  <textarea name=""  cols="30" rows={(width<400)?"6":"10"} id="feedback" placeholder='Type Message ...' required></textarea>
              </div>
              <div className="button">
                <button type="submit" onClick={sendFeedback}>Submit <i className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
            </div>
        </div>
      </div>
    );
}

export default Contact;

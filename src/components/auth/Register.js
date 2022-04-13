import React from 'react';
import './auth.css';

const Register = () => {
//     const fName = document.querySelector("#fName");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#phone");
// const password = document.querySelector("#password");
// const confPass = document.querySelector("#conf-pass");
// const errMsg = document.querySelectorAll(".err");
// const fNameMsg = document.querySelector("#fNameMsg");
// const emailMsg = document.querySelector("#emailMsg");
// const phoneMsg = document.querySelector("#phoneMsg");
// const passwordMsg = document.querySelector("#passwordMsg");
// const confPassMsg = document.querySelector("#confPassMsg");
// const genderMsg = document.querySelector("#genderMsg");

// console.log(emailMsg,phoneMsg,passwordMsg,confPassMsg,genderMsg);

// function ValidateEmail() {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
//     return true;
//   }
//   console.log("You have entered an invalid email address!");
//   return false;
// }

// function validatePhone() {
//   if (/^[6789][0-9]{9}/.test(phone.value) && phone.value.trim().length === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function gender() {
//   var getSelectedValue = document.querySelector('input[name="gender"]:checked');
//   if (getSelectedValue != null) return true;
//   else return false;
// }

// function checkPassword() {
//   if (password.value === "") {
//     console.log("Enter Password !");
//     return 1;
//   } else if (password.value.trim().length < 8) {
//     return 2;
//   } else if (confPass.value === "") {
//     console.log("Enter password to confirm");
//     return 3;
//   } else if (password.value !== confPass.value) {
//     console.log("Wrong Password");
//     return 4;
//   } else {
//     return 0;
//   }
// }

// function showPassword1() {
//   const eye1 = document.querySelector(".eye1");
//   if (password.type === "password") {
//     password.type = "text";
//     eye1.classList.toggle("fa-eye-slash");
//     eye1.classList.toggle("fa-eye");
//   } else {
//     password.type = "password";
//     eye1.classList.toggle("fa-eye-slash");
//     eye1.classList.toggle("fa-eye");
//   }
// }

// function showPassword2() {
//   const eye2 = document.querySelector(".eye2");

//   if (confPass.type === "password") {
//     confPass.type = "text";
//     eye2.classList.toggle("fa-eye-slash");
//     eye2.classList.toggle("fa-eye");
//   } else {
//     confPass.type = "password";
//     eye2.classList.toggle("fa-eye-slash");
//     eye2.classList.toggle("fa-eye");
//   }
// }

// function clearFun() {
//   for (var i = 0; i < errMsg.length; i++) {
//     errMsg[i].innerText = "";
//   }
// }

// function validate(e) {
//   const genderVal = gender();
//   const emailVal = ValidateEmail();
//   const phoneVal = validatePhone();
//   const passwordVal = checkPassword();
//   if (
//     fName.value.trim().length < 3 ||
//     emailVal === false ||
//     phoneVal === false ||
//     passwordVal !== 0 ||
//     genderVal === false
//   ) {
//     e.preventDefault();
//     if (fName.value.trim().length < 3) {
//       if (fName.value.trim().length === 0) {
//         fNameMsg.innerText = "Enter Name";
//       } else {
//         fNameMsg.innerText = "Enter a valid name";
//       }
//     }
//     if (emailVal === false) {
//       if (email.value === "") {
//         emailMsg.innerText = "Enter Email";
//       } else {
//         emailMsg.innerText = "Invalid Email";
//       }
//     }
//     if (phoneVal === false) {
//       if (phone.value === "") {
//         phoneMsg.innerText = "Enter mobile number";
//       } else {
//         phoneMsg.innerText = "Invalid mobile number";
//       }
//     }
//     if (passwordVal !== 0) {
//       switch (passwordVal) {
//         case 1:
//           passwordMsg.innerText = "Enter password";
//           break;
//         case 2:
//           passwordMsg.innerText = "Password length must be atleast 8";
//           break;
//         case 3:
//           confPassMsg.innerText = "Enter password to confirm";
//           break;
//         case 4:
//           confPassMsg.innerText = "Wrong Password";
//           break;
//         default:
//           break;
//       }
//     }
//     if (genderVal === false) {
//       genderMsg.innerText = "Please select your gender.";
//     }
//   } else {
//     document.write("Success");
//   }
// }

    return (
        <div className="container">
      <div className="inner-container">
        <div className="heading"><h1>Register</h1></div>
        <div className="form-container">
          <form className="signup-form">
            <div className="form-element">
              <div id="fNameMsg" className="err"></div>
              <div className="name">
                <div className="fName">
                  <div className="icon"><i className="fa-solid fa-user-large"></i></div>
                  <div className="input">
                    <input type="text" placeholder="First Name" id="fName"  autoComplete="off" style={{textTransform:"capitalize"}} required/>
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
                  <input type="email" placeholder="Enter Email" id="email"   autoComplete="off" required/>
                </div>
              </div>
              <div id="phoneMsg" className="err"></div>
              <div className="inner-element">
                <div className="icon"><i className="fa-solid fa-phone"></i></div>
                <div className="input">
                  <input type="tel"  id="phone"    placeholder="Enter Mobile Number" autoComplete="off" required />
                </div>
              </div>
              <div id="passwordMsg" className="err"></div>
              <div className="inner-element">
                <div className="icon"><i className="fa-solid fa-key"></i></div>
                <div className="input">
                  <input type="password" placeholder="Enter Password" id="password"   required/>
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
              <div id="genderMsg" className="err"></div>
              <div className="gender">
                <div className="male">
                  <input type="radio" name="gender" id="male"   /> <label htmlFor="male" required="required">Male</label> 
                </div>
                <div className="female">
                  <input type="radio" name="gender" id="female"   /> <label htmlFor="female" required ="required">Female</label>
                </div>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="check" id="check" /> <label htmlFor="check">Remember me</label>
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

export default Register;

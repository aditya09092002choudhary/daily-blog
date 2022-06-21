import React,{useEffect} from "react";
import './about.css';

const About = () => {
  useEffect(() => {
    document.title = "About | Daily Blogs";
    // document.querySelectorAll(".nav-link")[1].style.color="wheat";
    // document.querySelector("#root").style.display="grid";
}, []);
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
      Hi folks,<br />Welcome to this blog website. This is a blogging website where you can read and write blogs. There is a news section also where you can see the latest news and old news also.<br /><br />
      To write blogs on this website a user needs some extra authentication. When a user logs in to the website the role assigned to him/her is a normal "User". But a user can write only if his/her role is "Editor".<br /><br />
      Steps to upgrade your account are given below.
      </p>
      <h3>How to write a blog ?</h3>
      <ul>
        <li>
          Create your account on <strong>Daily Blogs</strong> .
        </li>
        <li>
          Write a mail to us (<strong>blogdailyhelp@gmail.com</strong>) for
          upgrading your account along with a id proof attached.
        </li>
        <li>After proper validation you will receive a conformation mail. </li>
        <li>Then you can write blog.</li>
      </ul>
    </div>
  );
};

export default About;

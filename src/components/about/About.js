import React,{useEffect} from "react";
import './about.css';

const About = () => {
  useEffect(() => {
    document.title = "About | Daily Blogs";
    document.querySelectorAll(".nav-link")[1].style.color="wheat";
}, []);
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        This is an open platform to read and write blogs. <br /> Person with
        proper authentication can write blog on our site.
      </p>
      <h3>How to write a blog ?</h3>
      <ul>
        <li>
          Create your account on <strong>Daily Journal</strong> .
        </li>
        <li>
          Write a mail to us (<strong>dailyjournalhelp@gmail.com</strong>) for
          writing blog along with a id proof attached.
        </li>
        <li>After proper validation you will receive a conformation mail. </li>
        <li>Then you can write blog.</li>
      </ul>
    </div>
  );
};

export default About;

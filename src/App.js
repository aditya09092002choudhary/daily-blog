import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/body/Home";
import Footer from "./components/footer/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Post from "./components/posts/Post";
import News from "./components/news/News";
import Compose from "./components/compose/Compose";
const App = () => {
    // const title ="Day 1";
    // const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus laboriosam quis voluptate. Hic, laborum asperiores. Magni ipsa itaque, perferendis rem maiores hic quasi, totam ab labore corporis aspernatur laborum repellat necessitatibus sapiente aliquam est nihil libero animi ratione et aperiam. Error cumque, ullam officia maiores cupiditate ducimus quod placeat.";
    
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home greet={"to the Daily Blogs"} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="compose" element={<Compose />} />
          <Route path={`posts/:id`} element={<Post />}/>
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default App;
// 53d78ef0fef34d6aa6d46f98bb962a69
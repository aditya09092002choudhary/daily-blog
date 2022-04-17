import React,{useState} from "react";
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
import Edit from "./components/compose/Edit";
import Logout from "./components/auth/Logout";
import Delete from "./components/posts/Delete";
const App = () => {
    // const title ="Day 1";
    // const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus laboriosam quis voluptate. Hic, laborum asperiores. Magni ipsa itaque, perferendis rem maiores hic quasi, totam ab labore corporis aspernatur laborum repellat necessitatibus sapiente aliquam est nihil libero animi ratione et aperiam. Error cumque, ullam officia maiores cupiditate ducimus quod placeat.";
    const [login,setLogin]=useState(0);
    function logset(e){
      setLogin(e);
    }
  return (
    <React.StrictMode>
      <Router>
        <Navbar logStatus={login}/>
        <Routes>
          <Route path="/" element={<Home greet={"to the Daily Blogs"} />} logset={logset}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="compose" element={<Compose />} />
          <Route path="logout" element={<Logout />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="remove/:id" element={<Delete />} />
          <Route path={`posts/:id`} element={<Post />}/>
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default App;
// 53d78ef0fef34d6aa6d46f98bb962a69
import React,{useState,useEffect} from "react";
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
import axios from "axios";
import Author from "./components/posts/Author";
import Password from "./components/auth/Password";
 const baseUrl="https://daily-blog-backend.herokuapp.com/protected";
//  const baseUrl="http://localhost:1337/protected";
const App = () => {
 
    // const title ="Day 1";
    // const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus laboriosam quis voluptate. Hic, laborum asperiores. Magni ipsa itaque, perferendis rem maiores hic quasi, totam ab labore corporis aspernatur laborum repellat necessitatibus sapiente aliquam est nihil libero animi ratione et aperiam. Error cumque, ullam officia maiores cupiditate ducimus quod placeat.";
    const [login,setLogin]=useState(0);
    const [name, setName] = useState("");
    const [uid, setuid] = useState('');
    const [role, setrole] = useState('');
    useEffect(()=>{
      const token = localStorage.getItem('token');
      axios.get(baseUrl,{headers:{
          Authorization:token,
      }}).then(res=>{
          // console.log(res);
          if(res.data.success===true){
            setLogin(1);
            setName(res.data.user.fName);
            setuid(res.data.user.id);
            setrole(res.data.user.role);
          }
          
      }).catch(err=>{
          // console.log(err);
          // navigate("/login");
      })
  },[]);
    // function logset(e){
    //   setLogin(e);
    // }
    // function Name(e){
    //   setName(e);
    // }
    // function UID(e){
    //   setuid(e);
    // }
    // console.log(login);
    return (
    <React.StrictMode>
      <Router>
        <Navbar login={login} />
        <Routes>
          <Route path="/" element={<Home greet={(name==="")?"to the Daily Blogs":name} login={login} role={role} uid={uid} />} />
          <Route path="login" element={<Login />} login ={login}/>
          <Route path="register" element={<Register login={login} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="compose" element={<Compose login ={login} uid={uid}/>} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path={`posts/:id`} element={<Post />}/>
          <Route path={`author/:id`} element={<Author  login={login} role={role} uid={uid}/>}/>
          <Route path='/uPassword' element={<Password login={login} />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default App;
// 53d78ef0fef34d6aa6d46f98bb962a69
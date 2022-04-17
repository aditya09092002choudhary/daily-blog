// import React from 'react';
import axios from 'axios';
// const baseUrl="https://daily-blog-backend.herokuapp.com/";
const baseUrl = "http://localhost:4000/";
const Logout = () => {
        axios.get(baseUrl+"logout").then((response)=>{
            console.log(response);
            if(response.data==="Success"){
                window.location.href="/login";
            }
        })

}

export default Logout;

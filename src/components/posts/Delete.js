import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
const baseUrl="https://daily-blog-backend.herokuapp.com/remove/";
// const baseUrl = "http://localhost:1337/remove/";
const Delete = () => {
    const {id}=useParams();
    const endpoint=baseUrl+id;
    axios(endpoint).then((response)=>{
        window.location.href="/";
    })
}

export default Delete;

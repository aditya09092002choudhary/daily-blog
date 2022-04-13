import React from 'react';
import './home.css';

const Home = (props) => {
    const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus laboriosam quis voluptate. Hic, laborum asperiores. Magni ipsa itaque, perferendis rem maiores hic quasi, totam ab labore corporis aspernatur laborum repellat necessitatibus sapiente aliquam est nihil libero animi ratione et aperiam. Error cumque, ullam officia maiores cupiditate ducimus quod placeat.";
    return (
        <div className="home-container">
                <div className="greet"><p style={{textAlign:"end"}}>Welcome {props.greet} ! &nbsp;</p></div>
            <div className="inner-container">
                <div className="heading"><h1>Home</h1></div>
                <div className="posts">
                    <div className="post">
                        <h2>Day 1</h2>
                        <p>{para.substring(0,70)+ "..."} <a href="/post">Read More</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

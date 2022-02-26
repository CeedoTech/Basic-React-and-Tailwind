import React, { Component } from "react";
import axios from 'axios'

class About extends Component{
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }
    render(){
        const{posts} =this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span>{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })   
        ) : (
            <div className="center"> <b>No posts yet</b></div>
        )
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )   
    }
} 

{/* <h2 className="text-3xl text-center">Axios</h2>
<h4 className="center text-justify text-xl">We will be using Axios in this page</h4> */}
 
export default About

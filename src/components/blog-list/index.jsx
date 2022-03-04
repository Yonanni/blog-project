import React, { Component, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import data from "../../data/posts.json"
const BlogList = () => { 
 
  const [posts, setPosts] = useState(data)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
   const fetchBlogPosts = async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_BE_URL}/blogs`, {
            method: 'GET',
            headers: {
              'content-type' : 'application/json'
            }
        });
        let postsJson = await response.json();
        this.setState({ posts: postsJson, loading: false })
      } catch (error) {
        console.log(`error fetching from ${process.env.REACT_APP_BE_URL}/blogs`)
      }
    };
    // fetchBlogPosts()
  },[])

  
  

  
    console.log("data", data)
    return (
      loading === false ? (
        <Row>
          {posts.map((post) => (
          // {data.map((post) => (
            <Col md={4} key={post._id} style={{ marginBottom: 50 }}>
              <BlogItem {...post} />
              
            </Col>
            
          ))}
        </Row>
       ) : (<Row>Loading...</Row>) 
    );
  
}

export default BlogList
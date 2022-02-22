import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import data from "../../data/posts.json"
export default class BlogList extends Component { 
  state = {
    posts: data,
    loading: false,
  };
  // componentDidMount() {
  //   this.fetchBlogPosts();
  // }
  // fetchBlogPosts = async () => {
  //   try {
  //     let response = await fetch(
  //       `${process.env.REACT_APP_BE_URL}/blogs`, {
  //         method: 'GET',
  //         headers: {
  //           'content-type' : 'application/json'
  //         }
  //     });
  //     let postsJson = await response.json();
  //     this.setState({ posts: postsJson, loading: false })
  //   } catch (error) {
  //     console.log(`error fetching from ${process.env.REACT_APP_BE_URL}/blogs`)
  //   }
  // };
  // componentDidUpdate(prevProps, prevState) {
  // }
  

  render() {
    console.log("data", data)
    return (
      this.state.loading === false ? (
        <Row>
          {this.state.posts.map((post) => (
          // {data.map((post) => (
            <Col md={4} key={post._id} style={{ marginBottom: 50 }}>
              <BlogItem {...post} />
              
            </Col>
            
          ))}
        </Row>
       ) : (<Row></Row>) 
    );
  }
}
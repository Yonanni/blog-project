import React, { Component, useEffect, useState,  } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog-author";
import CoverButton from "../cover-button";
import CommentForm from "../comment-form";
import data from "../../data/posts.json"
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";


  const Blog = () => {
    const [verified, setVerified] = useState(true)
    const [blog, setBlog] = useState(null)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    // const history = useNavigate()
    
 console.log("blog", blog)
  useEffect(()=> {
    // fetchSinglePost(params.id)
    const currentBlog = data.filter(singleBlog=> singleBlog._id == params.id)
    setBlog(currentBlog)
  },[params.id])



//  const fetchSinglePost = async ({ id }) => {
//     try {
//       let response = await fetch(
//         `${process.env.REACT_APP_BE_URL}/blogs/${id}`, {
//           method: 'GET',
//           headers: {
//             'content-type' : 'application/json'
//           }
//       });
//       let data = await response.json();
//       if (data) {
        
//         setBlog(data)
//         setBlog(false)
//         // fetchComments(props.match.params);
//       } else {
//         history.push("/404");
//       }
//     } catch (error) {
//       console.log("error")
//     }
//   };
//   const fetchComments = async ({ id }) => {
//     try {
//       let response = await fetch(
//         `${process.env.REACT_APP_BE_URL}/blogs/${id}/comments`, {
//           method: 'GET',
//           headers: {
//             'content-type' : 'application/json'
//           }
//       });
//       let data = await response.json();
//       if (data) {
        
//         setComments(data)
//       }
//     } catch (error) {
//       console.log("error")
//     }
//   };
//   const reloadPage = e => {
    
//     setLoading(true)
//     e.preventDefault()
//   }
  
  // useEffect(()=> {
  //   // fetchSinglePost(match.params);

  // },[loading])

  
    
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            <div className="blog-details-cover-container">
            { verified && 
            <CoverButton cover={blog?.cover} post={params.id} 
            // reloadPage={reloadPage} 
            />
            }
            <Image className="blog-details-cover" src={blog?.cover} fluid />
            </div>
            <h1 className="blog-details-title">{blog?.title}</h1>
            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog?.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog?.createdAt}</div>
                <div>{`${blog?.readTime.value} ${blog?.readTime.unit} read`}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>

            <div className="mt-5">{comments === [] ? <></> : comments.map(c => <div key={c._id} className="blog-details-comments-container"><span className="blog-details-comment-author">{c.name}:</span><span className="blog-details-single-comment"><i className="fas fa-quote-left"></i>{c.text}</span></div>)}</div>

            <CommentForm post={params.id} 
            // reloadPage={reloadPage} 
            />

          </Container>
        </div>
      );
    }
 
}

export default Blog;

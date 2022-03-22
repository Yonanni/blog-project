import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./style.css"
import { useState } from "react";

const Writers = () => {

  const [post, setPost] = useState({
    content: "", 
    first_paragraph: "", 
    title: "", 
    category: "", 
    cover: "https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg"
  })

// console.log("post==", post)

  const handleChange = (e) => {
    let id = e.target.id
    setPost({
      ...post,
      [id]: e.target.value
    })
  }
  const handleChangeQuill = (value) => {
    setPost({ ...post, content: value });
  };
  const handleChangeQuillPara = (value) => {
    setPost({ ...post, first_paragraph: value });
  };

  const postArticle = async (e) => {
    e.preventDefault()
    try {
    
      const response = await fetch(`${process.env.REACT_APP_URL_DEV}/articles`, {
        method: "POST",
        body: JSON.stringify(post),
        // headers: headers,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem("Token")}`
        },
        // mode: "cors" 
      })
      console.log("response",response)
      if (response.ok){
        alert("Posted!!!!❤❤❤")
        setPost({
          content: "", 
          first_paragraph: "", 
          title: "", 
          category: "", 
          cover: ""
        })
        // setShow(false)
        // navigate("/to-write")
      } else {
        alert("something went wrong⚠❌📵")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container className="contain">
      <Row>
        <Col>welcome !!!!</Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <h5>Setting</h5>
          <h5>Profile</h5>
          <h5>Posts</h5>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Col>
            
            <Container className="new-blog-container">
        <Form className="mt-5" 
          onSubmit={postArticle}
        >
          <Form.Group controlId="title" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
            size="lg" 
            placeholder="Title" 
            value={post.title}
            onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control 
            size="lg" 
            as="select"
            value={post.category} 
            onChange={handleChange}
            >
              <option>select category</option>
                  <option>Techinology</option>
                  <option>Finance</option>
                  <option>Politics</option>
                  <option>News</option>
                  <option>Sport</option>
            </Form.Control>
          </Form.Group>
          {/* <Form.Group id="first_paragraph" className="mt-3"> */}
            <Form.Label>First paragraph</Form.Label>
            <ReactQuill
            id="first_paragraph" 
            className="mt-3"
            value={post.first_paragraph}
            onChange={handleChangeQuillPara}
            
            />
          {/* </Form.Group> */}
          {/* <Form.Group id="content" className="mt-3"> */}
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
            id="content" 
            className="mt-3"
            value={post.content}
            onChange={handleChangeQuill}
            // className="new-blog-content"
            />
          {/* </Form.Group> */}
          {/* <Form.Group controlId="cover" className="mt-3">
            <Form.Control
            size="lg" 
            type="file"
            className="form-control-file"
            value={this.state.cover}
            onChange={hand}
            />
          </Form.Group> */}
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
          </Col>
          <Col>
            <Button>New Post</Button>
            <Button>New Post</Button>
            <Button>New Post</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Writers;

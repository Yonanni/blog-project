import React, { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles.css";

const CommentForm = (props) =>  {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     name: "",
    //     text: ""        
    //   };
    // }

    const [comment, setComment] = useState({
      name: "",
      text: ""
    })

    const handleChange = e => {
        let id = e.target.id
        setComment({ ...comment, [id]: e.target.value })
    }

    const sendComment = async(e, id) => {
        e.preventDefault()
        console.log("Trying to send a new comment --> ", comment)
        try {
            let response = await fetch(`${process.env.REACT_APP_BE_URL}/blogs/${id}/comments`, { // trouble catching this postID
              method: 'POST',
              body: JSON.stringify(comment),
              headers: {
                'content-type' : 'application/json'
            }
            })
            if (response.ok) {
              console.log(response, comment)
              console.log("NEW COMMENT POSTED")
              props.reloadPage(e)
            } else {
              alert("Something went wrong")
            }
          } catch (error) {
            alert(error)
          }
    }


    return (
        <>
        <div className="mt-5"><strong>Tell us what you think!</strong></div>

        <Form onSubmit={e => sendComment(e, props.post.id)}>
            <div className="comment-form-container">
            <Form.Group controlId="name" className="my-3 mx-1">
                <Form.Control 
                size="lg" 
                placeholder="Your name" 
                value={comment.name}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="text" className="my-3 mx-1">
                <Form.Control 
                size="lg" 
                placeholder="Your comment" 
                value={comment.text}
                onChange={handleChange}
                />
            </Form.Group>
            <Button
            type="submit"
            size="sm"
            variant="dark"
            className="my-3"
            style={{ marginLeft: "0.5em" }}
            >
            Submit
            </Button>
            </div>
        </Form>
        </>
    );
  
}

export default CommentForm
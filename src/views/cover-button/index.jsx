import React, { Component, useState } from "react";
import FormData from "form-data";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./styles.css";

const CoverButton = (props) => {
    

    const [selectedFile, setselectedFile] = useState(null)

    const handleCover = event => {
      const file = event.target.files[0] 
      setselectedFile(file)
    }

    const uploadCover = async(e, id) => { 
        e.preventDefault()
        const data = new FormData()
        console.log("Trying to send a new cover image --> ", selectedFile)
        data.append("cover", selectedFile)
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_BE_URL}/blogs/${id}/uploadCover`,
          data: data
        })
        
    }

  
    return (
        <Form onSubmit={e => uploadCover(e, props.post.id)}>
        {/* Implement Dummy Button for file upload so we can control appearance        */}
        <Button className="blog-details-change-img-button" type="submit">
          {props.cover===undefined?<>Upload Image</>:<>Edit Image</>}
        </Button> 
        <Form.Group controlId="cover" className="my-3 mx-1 blog-details-img-form">
        <Form.Control
        // className="invisible-form-control" // visibility hidden
        type="file"
        size="lg" 
        placeholder="" 
        // value={props?.cover}
        onChange={handleCover}
        />
        </Form.Group>
        </Form>
    );
  
}

export default CoverButton
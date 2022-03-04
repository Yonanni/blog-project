import React, { Component, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";
 const BlogAuthor = ({ name, avatar })=> {

 const [verified, setVerified] = useState(true)// when signed in as author or admin, verified = true.

  
    return (
      <Row>
        <Col xs={2}>
          <Image className="blog-author" src={avatar} roundedCircle />
        </Col>
        <Col>
          <div>by</div>
          <h6>{name}</h6>
          {/* on clicking edit, go to new page for changing avatar */}
        </Col>
      </Row>
    );

}
export default BlogAuthor

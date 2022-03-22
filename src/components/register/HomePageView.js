
import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Form, Button, Modal } from "react-bootstrap";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import screen from "../../animation/screen.json";
import "./style.css";

const HomePageView = () => {
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(false);
  const [login, setLogin] = useState({
    password: "",
    email: "",
  });
  const [registry, setRegistry] = useState({
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    password: "",
    bio: ""
  })
  // const { show, setShow, handleClose, handleShow, setRole, role } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  // console.log("navi--", navigate);
  const handleChange = (e) => {
    let id = e.target.id;
    setLogin({
      ...login,
      [id]: e.target.value,
    });
  };

  useEffect(()=>{
    setRegistry({
      ...registry,
      role: role ? "Author" : "User"
    })
  },[role])

  const handleRegisterChange = (e) => {
    let id = e.target.id
    setRegistry({
      ...registry,
      [id]: e.target.value
    })
  }

  const Register = async (e) => {
    e.preventDefault()
    try {
    
      const response = await fetch(`${process.env.REACT_APP_URL_DEV}/users/register`, {
        method: "POST",
        body: JSON.stringify(registry),
        // headers: headers,
        headers: {
          'Content-Type': 'application/json'
        },
        // mode: "cors" 
      })
      console.log("response",response)
      if (response.ok){
        setShow(false)
        alert("Welcom to This beautiful site❤❤❤")
        navigate("/to-write")
      } else {
        alert("something went wrong⚠❌📵")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_DEV}/users/login`,
        {
          method: "POST",
          body: JSON.stringify(login),
          // headers: headers,
          headers: {
            "Content-Type": "application/json",
          },
          // mode: "cors"
        }
      );
      // console.log("response", response);
      if (response.ok) {
        const res = await response.json();
        window.localStorage.setItem("Token", res.accessToken);
        // navigate("/home");
        navigate("/home");
        window.location.reload(); 
        // console.log("res", res);
        // setShow(true)
        // alert("Successfull Login ❤❤❤");
      } else {
        alert("something went wrong⚠❌📵");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className=" position-relative">
          <Col className="pushDown"></Col>
          <Col>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lets get you upto speed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Register}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleRegisterChange} />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleRegisterChange} />
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Firstname" onChange={handleRegisterChange} />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Lastname" onChange={handleRegisterChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            <Card className="cardWrap">
              <small>If you have an account, just Log In</small>
              <Card.Body>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-2">
                    Continue
                  </Button>
                </Form>
              </Card.Body>
              <small>
                New to this site, just click <em>start writing</em> or{" "}
                <em>start reading</em>
              </small>
              <div className="my-1">
              <Button className="mr-1" variant="info" onClick={()=>{
              handleShow()
              setRole(true)
            }}>
              Start writing
            </Button>
            <Button className="" variant="warning" onClick={()=>{
              handleShow()
              setRole(false)
            }}>
              Start reading
            </Button>
              </div>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePageView;

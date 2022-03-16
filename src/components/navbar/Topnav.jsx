import React, { Component } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import logo from "../../assets/logo.png";

import "./navbar.css";
const NavBar = (props) => {
  const params = useParams();
  const location = useLocation();
  const user = useUser()
  console.log("user", user);
  const { show, setShow, handleClose, setRole, handleShow } = props;

  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img className="blog-navbar-brand" alt="logo" src={logo} />
        </Navbar.Brand>

        {/* <Button
            as={Link}
            to="/new"
            className="blog-navbar-add-button bg-dark"
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Post Article
          </Button> */}
        <div>
          {location.pathname == "/to-write" ? (
            <>
              <Button
                variant="warning"
                onClick={() => {
                  handleShow();
                  setRole(false);
                }}
              >
                Start reading
              </Button>
              {user &&<Button>Dashboard</Button>}
            </>
          ) : (
            <>
              {location.pathname == "/to-read" ? (
                <>
                  <Button
                    className="mr-1"
                    variant="info"
                    onClick={() => {
                      handleShow();
                      setRole(true);
                    }}
                  >
                    Start writing
                  </Button>
                  {user &&<Button>Dashboard</Button>}
                </>
              ) : (
                <>
                  <Button
                    className="mr-1"
                    variant="info"
                    onClick={() => {
                      handleShow();
                      setRole(true);
                    }}
                  >
                    Start writing
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => {
                      handleShow();
                      setRole(false);
                    }}
                  >
                    Start reading
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
};
export default NavBar;

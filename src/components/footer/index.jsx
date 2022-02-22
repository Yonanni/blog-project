import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Container>{`${new Date().getFullYear()} - © Yonatan Mehari | Developed with ❤ by Yonatan.`}</Container>
      </footer>
    );
  }
}

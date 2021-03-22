import Head from "next/head";
import React, { useState } from "react";
import { Nav, Navbar, Container, Modal, Button } from "react-bootstrap";
import { Login } from "./Login/Login";

import styles from "../../styles/components/navbar.module.css";

export const LandingNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Login />
          <Button color="sucess" onClick={handleClose}>
            Login{" "}
          </Button>
        </Modal.Body>
      </Modal>

      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className={styles.navbarText}>
            PutFive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="#link"
                className={styles.navbarText}
                onClick={(e) => {
                  e.preventDefault();
                  handleShow(e);
                }}
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LandingNavbar;

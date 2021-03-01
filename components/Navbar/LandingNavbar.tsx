import Head from 'next/head';
import React, { useState } from 'react';
import { Nav, Navbar, Container, Modal, Button } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import styles from '../../styles/components/navbar.module.css';

export const LandingNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    event.preventDefault();
    setShow(true);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      {/*Login-SignUp Modal*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          If you're reading this you have made it to the modal body! Yay
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Login</Button>
        </Modal.Footer>
      </Modal>
      {/*Navbar*/}
      <Navbar bg='primary' expand='lg'>
        <Container>
          <Navbar.Brand href='#home' className={styles.navbarText}>
            PutFive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link
                href='#link'
                className={styles.navbarText}
                onClick={(e) => {
                  e.preventDefault();
                  handleShow();
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

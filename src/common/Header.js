import React from 'react';
import logo from '../assets/images/logo.png';
import menuIcon from '../assets/images/location.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" fixed="top">
        <Container fluid id='containerFluid' className='d-flex mainNav'>
          <div className='container main-navbar' bg="light">
            <div className='topSection'>
              <Navbar.Brand as={NavLink} to="/" exact><img src={logo} alt='Logo' /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navbar-light navbar-nav">
                <Dropdown>
                  <Dropdown.Toggle variant="#142B2B" id="dropdown-basic" className='dropButton'>
                    <img src={menuIcon} alt='Newyork - NY' /> Newyork - NY
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" className='navMenu'>Newyork - NY</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className='navMenu'>Newyork - NY</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className='navMenu'>Newyork - NY</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="#link" className='navMenu'>Events</Nav.Link>
                <Nav.Link href="#link" className='navMenu'>About</Nav.Link>
                <Nav.Link href="#link" className='navMenu'>Support</Nav.Link>
                <Dropdown>
                <Dropdown.Toggle variant="#142B2B" id="dropdown-basic" className='dropButton'>
                  Download
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className='navMenu'>iOS App</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className='navMenu'>Android App</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Nav>

              <Form className="d-flex navForm">
                <i className="fa fa-search" aria-hidden="true" style={{ color: '#1DFFFF', paddding: '10px', height: '30px', paddingTop: '12px', paddingLeft: '10px', }}></i>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ backgroundColor: '#0A3544', border: 'none', }}
                />
              </Form>
              <span className='topSliderIcon'><a href='#filter'><i className="fa-solid fa-sliders"></i></a></span>

            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <div className='imgBanner'><h1 className='bannerText'>Connect to the world of events</h1></div>
        </div>
    );
}

export default Header;

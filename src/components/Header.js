import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "./App";

const Header = () => {
  const { user } = useAuth();
  return (
    <Row>
      <Col>
        <Navbar className="">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img
                  style={{ maxWidth: "100px", padding: "0" }}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>
            <Nav className="fw-bold">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
              <Link to="/contact-us" className="nav-link text-dark">
                Contact Us
              </Link>
              {user && (
                <Link to="/dashboard" className="nav-link text-dark">
                  {user && user.displayName}
                </Link>
              )}
              {!user && (
                <Link to="/login" class="btn btn-dark fw-bold">
                  Sing In
                </Link>
              )}
            </Nav>
          </Container>
        </Navbar>
        <hr />
      </Col>
    </Row>
  );
};

export default Header;

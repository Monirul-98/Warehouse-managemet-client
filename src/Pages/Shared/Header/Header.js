import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Love Beverages
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <Nav.Link as={Link} to="/manageinventory">
                  Manage Inventory
                </Nav.Link>
              ) : (
                ""
              )}
              {user ? (
                <Nav.Link as={Link} to="/additem">
                  Add Item
                </Nav.Link>
              ) : (
                ""
              )}
              {user ? (
                <Nav.Link as={Link} to="/myitem">
                  My Items
                </Nav.Link>
              ) : (
                ""
              )}

              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={() => signOut(auth)}
                >
                  Sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

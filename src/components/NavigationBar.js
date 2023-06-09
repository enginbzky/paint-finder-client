import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoutButton from "../registration/LogoutButton";
import LoginButton from "../registration/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo-resim.png";
import logoName from "../assets/logo-isim.png";
import { UserContext } from "../context/UserContext";
import ProtectedLink from "./ProtectedLink";

function NavigationBar() {
  const { isAuthenticated } = useAuth0();
  const user = useContext(UserContext);
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle
          className="text-black"
          variant="dark"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Brand className="text-black pe-4">
          <img
            src={logo}
            alt="logo"
            style={{
              height: 40,
              width: 50,
            }}
          ></img>
          <img
            src={logoName}
            alt="logo"
            style={{
              height: 40,
              width: 180,
            }}
          ></img>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar me-auto">
            <Nav.Link className="ps-5" as={NavLink} to="/" exact={true}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav>
              {isAuthenticated ? (
                <>
                  <ProtectedLink
                    name="Administration"
                    link="/administration"
                    user={user}
                    roles={["admin"]}
                  />
                  <ProtectedLink
                    name="User Management"
                    link="/userManagement"
                    user={user}
                    roles={["admin"]}
                  />
                  <Nav.Link as={NavLink} to="/paintFinder">
                    Paint Finder
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/profile">
                    Profile
                  </Nav.Link>
                </>
              ) : null}
            </Nav>
          </Nav>
          <Nav>
            <div>
              {isAuthenticated ? (
                <div>
                  <LogoutButton />
                </div>
              ) : (
                <LoginButton />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

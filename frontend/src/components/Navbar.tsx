import { Navbar, Nav, Container } from "react-bootstrap";
import { User } from "../models/user";
import { Link } from "react-router-dom";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";

interface NavBarProps {
  loggedInUser: User | null;
  onSignUpClick: () => void;
  onLoginClick: () => void;
  onLogoutSuccessful: () => void;
}

const NavBar = ({
  loggedInUser,
  onSignUpClick,
  onLoginClick,
  onLogoutSuccessful,
}: NavBarProps) => {
  return (
    <Navbar bg="primary" variant="dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Notes App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} to="/privacy">
              Privacy
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {loggedInUser ? (
              <NavBarLoggedInView
                user={loggedInUser}
                onLogoutSuccessful={onLogoutSuccessful}
              />
            ) : (
              <NavBarLoggedOutView
                onSignUpClick={onSignUpClick}
                onLoginClick={onLoginClick}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

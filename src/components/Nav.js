import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Nav.css";

function nav() {
  return (
    <div className="NavCont">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#cart">
            <Button variant="secondary">Cart :- 0</Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default nav;

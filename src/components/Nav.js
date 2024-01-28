import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import Context from "../context/context";
import { useContext } from "react";

function NavComp(props) {
  const Cnxt = useContext(Context);

  console.log(Cnxt);

  function toRoute(str) {
    window.location = str;
  }
  return (
    <div className="NavCont">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="me-auto">
          <Nav.Link onClick={() => toRoute("/")} href="#home">
            Home
          </Nav.Link>
          <Nav.Link onClick={() => toRoute("/")} href="#store">
            Store
          </Nav.Link>
          <Nav.Link onClick={() => toRoute("/about")} href="#about">
            About
          </Nav.Link>
          <Nav.Link href="#cart">
            <Button onClick={props.onOpen} variant="secondary">
              Cart :- {Cnxt.items.length}
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavComp;

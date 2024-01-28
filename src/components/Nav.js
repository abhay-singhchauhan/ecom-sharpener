import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import Context from "../context/context";
import { useContext } from "react";

function NavComp(props) {
  const Cnxt = useContext(Context);
  console.log(Cnxt);
  return (
    <div className="NavCont">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
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

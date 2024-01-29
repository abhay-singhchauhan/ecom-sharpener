import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import Context from "../context/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function NavComp(props) {
  const Cnxt = useContext(Context);

  console.log(Cnxt);

  return (
    <div className="NavCont">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="me-auto">
          <Link to={"/home"}>
            <div>Home</div>
          </Link>
          <Link to={"/"}>
            <div>Store</div>
          </Link>
          <Link to={"/about"}>
            <div>About</div>
          </Link>
          <Link to={"/contacts"}>
            <div>Contacts</div>
          </Link>

          <div>
            <Button onClick={props.onOpen} variant="secondary">
              Cart :- {Cnxt.items.length}
            </Button>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavComp;

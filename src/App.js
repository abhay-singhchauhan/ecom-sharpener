import "./App.css";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import ProductCart from "./components/ProductCard";
import Cart from "./components/Cart";
import ContextProvider from "./context/contextProvider";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ContextProvider>
      {" "}
      <Nav onOpen={handleShow}></Nav>
      <Heading></Heading>
      <ProductCart></ProductCart>
      <Cart onClose={handleClose} onOpen={handleShow} current={show}></Cart>
    </ContextProvider>
  );
}

export default App;
